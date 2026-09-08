import React, { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const SAVED_KEY = "wam_saved_services";
const TOAST_DURATION_MS = 2200;
const AUTOPLAY_INTERVAL_MS = 3200;
const COUNTUP_DURATION_MS = 1000;

/* ----------------------------------------------------------------
   Helpers
------------------------------------------------------------------*/

// Fires once when the referenced element enters the viewport.
function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, inView];
}

// Counts a number up from 0 to target once active. Keeps suffix/prefix intact.
function useCountUp(rawValue, active) {
  const [display, setDisplay] = useState(rawValue.replace(/[0-9]/g, "0"));
  const hasRun = useRef(false);

  useEffect(() => {
    if (!active || hasRun.current) return;
    hasRun.current = true;

    const match = rawValue.match(/[\d,]+/);
    if (!match) {
      setDisplay(rawValue);
      return;
    }
    const target = parseInt(match[0].replace(/,/g, ""), 10);
    const prefix = rawValue.slice(0, match.index);
    const suffix = rawValue.slice(match.index + match[0].length);
    const start = performance.now();

    let frameId;
    const tick = (now) => {
      const progress = Math.min((now - start) / COUNTUP_DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      setDisplay(`${prefix}${current.toLocaleString()}${suffix}`);
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [active, rawValue]);

  return display;
}

// Splits text around a query and wraps matches in <mark>.
function highlightMatch(text, query) {
  const trimmed = query.trim();
  if (!trimmed) return text;
  const escaped = trimmed.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "ig"));
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    part.toLowerCase() === trimmed.toLowerCase() ? (
      <mark key={i} className="search-highlight">
        {part}
      </mark>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
}

// Renders a single animated metric badge.
function MetricBadge({ number, label, active }) {
  const display = useCountUp(number, active);
  return (
    <div className="metric-badge">
      <span className="metric-number">{display}</span>
      <span className="metric-label">{label}</span>
    </div>
  );
}

/* ----------------------------------------------------------------
   Static data (content unchanged)
------------------------------------------------------------------*/

const SERVICE_CATEGORIES = [
  {
    id: "biomedical",
    categoryName: "Biomedical & Clinical Linkages",
    accent: "biomedical",
    description: "Direct clinical care, diagnostic screening, and direct healthcare referral pathways.",
    services: [
      {
        id: "htc-01",
        title: "HIV Testing & Counselling (HTC)",
        desc: "Voluntary, confidential, and client-centered HIV testing, pre/post-test counselling, and direct linkage to care.",
        details: "Our HTC services strictly prioritize client confidentiality and emotional well-being. We offer pre-test counselling, rapid testing, immediate post-test support, and direct linkage to ART clinics for post-test management.",
        targetAudience: "General Public, Youth, High-Risk Groups",
        turnaround: "Same-Day Results (15-30 Mins)",
      },
      {
        id: "sti-02",
        title: "STI Screening & Treatment Linkage",
        desc: "Symptomatic screening for sexually transmitted infections and direct referral to friendly healthcare facilities.",
        details: "Comprehensive symptom screening for STIs coupled with swift referrals to youth-friendly and non-stigmatizing health centers. Free partner notification tools and prevention counselling are provided.",
        targetAudience: "Adolescents, Young Adults, Key Populations",
        turnaround: "Immediate Referral Vouchers Issued",
      },
      {
        id: "prep-03",
        title: "PrEP & PEP Referrals",
        desc: "Sensitization and clinical referral for Pre-Exposure Prophylaxis (PrEP) and Post-Exposure Prophylaxis (PEP).",
        details: "Educational outreach, risk self-assessment support, and fast-tracked medical referrals for PrEP initiation and emergency PEP provision within crucial window periods.",
        targetAudience: "At-Risk Individuals, Emergency Survivors",
        turnaround: "Emergency PEP Linkage < 72 Hours",
      },
      {
        id: "substance-04",
        title: "Alcohol & Substance Use Screening",
        desc: "Routine screening, brief intervention, and referral for treatment (SBIRT) for individuals struggling with substance dependency.",
        details: "Evidence-based screening protocols to evaluate chemical dependency levels, paired with motivational interviewing and seamless transition pathways to specialized treatment centers.",
        targetAudience: "Youth, Community Members, Vulnerable Individuals",
        turnaround: "Flexible Routine Assessments",
      },
      {
        id: "rep-05",
        title: "Reproductive Health Services",
        desc: "Family planning counselling, adolescent-friendly reproductive health education, and maternal care linkages.",
        details: "Contraceptive counseling, menstrual hygiene resources, adolescent sexual reproductive health education, and direct linkage to prenatal and maternal care facilities.",
        targetAudience: "Adolescent Girls, Young Women (AGYW), Mothers",
        turnaround: "Ongoing Consultation & Linkage",
      },
    ],
  },
  {
    id: "behavioral",
    categoryName: "Behavioral & Psychosocial Support",
    accent: "behavioral",
    description: "Interventions aimed at risk reduction, mental well-being, life skills, and behavior change.",
    services: [
      {
        id: "counseling-06",
        title: "Individual & Group Counselling",
        desc: "Professional mental health support, trauma-informed therapy, and structured group support for young people and women.",
        details: "One-on-one professional counselling sessions along with facilitated peer therapy sessions focusing on stress, anxiety, grief, and personal trauma management.",
        targetAudience: "Women, Vulnerable Youth, Trauma Survivors",
        turnaround: "By Appointment / Emergency On-Call",
      },
      {
        id: "peer-07",
        title: "Peer Education & Mentorship",
        desc: "Peer-led risk-reduction sessions, life-skills training, and mentorship clubs under the MLINDE and MENTOR programmes.",
        details: "Structured peer networks providing life-skills training, negotiation skills, decision-making toolkits, and safe spaces for young people across local communities.",
        targetAudience: "In-School & Out-of-School Youth",
        turnaround: "Weekly / Bi-Weekly Sessions",
      },
      {
        id: "forum-08",
        title: "Substance Use Prevention Forums",
        desc: "Community psychoeducation and youth awareness sessions targeted at preventing drug abuse and addiction.",
        details: "Community dialogues, school outreach programs, and interactive workshops highlighting addiction risks, healthy coping mechanisms, and support networks.",
        targetAudience: "Community Youth, Schools, Parents",
        turnaround: "Monthly Community Outreaches",
      },
      {
        id: "pssg-09",
        title: "Psychosocial Support Groups (PSSG)",
        desc: "Safe spaces for survivors of gender-based violence, people living with HIV, and vulnerable adolescents.",
        details: "Facilitated support groups offering emotional grounding, shared experience processing, stigma reduction, and community coping strategies.",
        targetAudience: "GBV Survivors, PLHIV, Vulnerable Groups",
        turnaround: "Scheduled Weekly Circles",
      },
    ],
  },
  {
    id: "structural",
    categoryName: "Structural & Community Systems",
    accent: "structural",
    description: "Addressing underlying social, legal, and economic factors that impact community well-being.",
    services: [
      {
        id: "gbv-10",
        title: "GBV Prevention & Emergency Response",
        desc: "Community safety mapping, post-violence clinical referrals, legal aid linkages, and emergency safe-house coordination.",
        details: "Rapid crisis response for GBV survivors, including rapid medical referrals (PEP, emergency contraception), psycho-social intervention, safe house linkages, and police liaison.",
        targetAudience: "Survivors of Gender-Based Violence",
        turnaround: "24/7 Rapid Emergency Response",
      },
      {
        id: "rights-11",
        title: "Rights Advocacy & Legal Literacy",
        desc: "Sensitizing communities, youth, and children on human rights, gender equality, and legal protection systems.",
        details: "Empowerment sessions educating community members on fundamental rights, child protection frameworks, legal remedies, and legal aid provider connections.",
        targetAudience: "Local Communities, Women & Youth Groups",
        turnaround: "Continuous Educational Programs",
      },
      {
        id: "stakeholder-12",
        title: "Stakeholder & System Engagement",
        desc: "Collaborating with local administration, health departments, and civil society to strengthen social safety nets.",
        details: "Multi-sectoral advocacy sessions, local leader roundtables, and health governance working groups designed to build sustainable community safety nets.",
        targetAudience: "Local Chiefs, County Officials, Health Leads",
        turnaround: "Quarterly Advocacy Roundtables",
      },
      {
        id: "econ-13",
        title: "Economic Empowerment Linkages",
        desc: "Connecting vulnerable women and out-of-school youth to skill-building opportunities and micro-livelihood initiatives.",
        details: "Linkages to technical vocational institutions, financial literacy sessions, micro-grant schemes, and livelihood self-help groups.",
        targetAudience: "Out-of-School Youth, Vulnerable Women",
        turnaround: "Cohort-Based Linkages",
      },
    ],
  },
];

const REFERRAL_STEPS = [
  {
    step: "01",
    title: "Identification & Outreach",
    desc: "Community Health Volunteers (CHVs) and peer educators identify individuals needing health or psychosocial support.",
    detail: "Outreach teams engage with communities directly in high-density areas, youth hubs, and households to conduct risk assessments and raise awareness.",
  },
  {
    step: "02",
    title: "Screening & Counselling",
    desc: "Initial risk assessments, confidential counselling, and service mapping conducted by WAM staff.",
    detail: "Trained counsellors evaluate specific health and psychological needs to formulate an individualized, confidential care plan.",
  },
  {
    step: "03",
    title: "Direct Referral",
    desc: "Issuance of official referral vouchers to partner health facilities, safe spaces, or legal aid centers.",
    detail: "Clients receive standardized referral vouchers ensuring rapid, priority attention at partner clinical and legal centers without unnecessary delays.",
  },
  {
    step: "04",
    title: "Follow-up & Retention",
    desc: "Case management and continuous follow-up to ensure complete care loop and beneficiary well-being.",
    detail: "Dedicated case managers monitor progress through phone check-ins, home visits, and support group integration to guarantee complete continuum of care.",
  },
];

const FAQS = [
  {
    question: "Are WAM services confidential?",
    answer: "Yes. All testing, counselling, and referral services strictly follow client confidentiality guidelines and protocol regulations.",
  },
  {
    question: "Do I have to pay for referrals or testing support?",
    answer: "No. Community-level screening, peer support, and referral services coordinated directly by WAM are provided free of charge.",
  },
  {
    question: "How quickly can I access emergency GBV or PEP services?",
    answer: "Emergency response for GBV and PEP post-exposure services are prioritized immediately with 24/7 rapid linkage protocols.",
  },
  {
    question: "Can I refer a friend or family member?",
    answer: "Absolutely. You can initiate a referral on behalf of someone else through our online contact form or by contacting a community health volunteer.",
  },
];

/* ----------------------------------------------------------------
   Component
------------------------------------------------------------------*/

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [savedIds, setSavedIds] = useState([]);
  const [toast, setToast] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const referralGridRef = useRef(null);
  const faqRefs = useRef({});
  const toastTimerRef = useRef(null);

  // Debounce the search input so filtering doesn't run on every keystroke.
  useEffect(() => {
    const t = setTimeout(() => setSearchQuery(searchInput), 250);
    return () => clearTimeout(t);
  }, [searchInput]);

  // Load persisted bookmarks once on mount.
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(SAVED_KEY) || "[]");
      if (Array.isArray(stored)) setSavedIds(stored);
    } catch {
      // ignore corrupt storage
    }
  }, []);

  // Clear any pending toast timer on unmount.
  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  const showToast = useCallback((message) => {
    setToast(message);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setToast(null), TOAST_DURATION_MS);
  }, []);

  const toggleSaved = useCallback(
    (serviceId, serviceTitle) => {
      setSavedIds((prev) => {
        const wasSaved = prev.includes(serviceId);
        const next = wasSaved ? prev.filter((id) => id !== serviceId) : [...prev, serviceId];
        try {
          localStorage.setItem(SAVED_KEY, JSON.stringify(next));
        } catch {
          // storage unavailable — bookmark still works for this session
        }
        showToast(
          wasSaved
            ? `Removed "${serviceTitle}" from saved services`
            : `Saved "${serviceTitle}" — find it under the Saved tab`
        );
        return next;
      });
    },
    [showToast]
  );

  const allServicesFlat = useMemo(
    () =>
      SERVICE_CATEGORIES.flatMap((cat) =>
        cat.services.map((s) => ({ ...s, categoryName: cat.categoryName, accent: cat.accent }))
      ),
    []
  );

  // Computed filtered categories & search (also supports a "saved" pseudo-category).
  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (activeCategory === "saved") {
      const savedServices = allServicesFlat.filter((s) => savedIds.includes(s.id));
      const matched = query
        ? savedServices.filter(
            (s) => s.title.toLowerCase().includes(query) || s.desc.toLowerCase().includes(query)
          )
        : savedServices;
      if (matched.length === 0) return [];
      return [
        {
          id: "saved",
          categoryName: "Your Saved Services",
          accent: "saved",
          description: "Services you've bookmarked for quick access later.",
          services: matched,
        },
      ];
    }

    return SERVICE_CATEGORIES.map((cat) => {
      if (activeCategory !== "all" && cat.id !== activeCategory) return null;

      if (!query) return cat;

      const filteredServices = cat.services.filter(
        (s) => s.title.toLowerCase().includes(query) || s.desc.toLowerCase().includes(query)
      );

      return filteredServices.length > 0 ? { ...cat, services: filteredServices } : null;
    }).filter(Boolean);
  }, [activeCategory, searchQuery, savedIds, allServicesFlat]);

  const totalVisibleServices = useMemo(
    () => filteredCategories.reduce((acc, cat) => acc + cat.services.length, 0),
    [filteredCategories]
  );

  // Stats: animate counters once the hero metrics scroll into view.
  const inViewOptions = useMemo(() => ({ threshold: 0.5 }), []);
  const [metricsRef, metricsInView] = useInView(inViewOptions);

  // Referral pathway: keyboard navigation (left/right arrows) when the grid has focus.
  const handleReferralKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      setIsAutoPlaying(false);
      setActiveStepIndex((prev) => Math.min(REFERRAL_STEPS.length - 1, prev + 1));
    } else if (e.key === "ArrowLeft") {
      setIsAutoPlaying(false);
      setActiveStepIndex((prev) => Math.max(0, prev - 1));
    }
  };

  // Referral pathway: autoplay.
  useEffect(() => {
    if (!isAutoPlaying) return undefined;
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % REFERRAL_STEPS.length);
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const copyReferralSummary = async () => {
    const summary = REFERRAL_STEPS.map((s) => `Step ${s.step} — ${s.title}: ${s.desc}`).join("\n\n");
    try {
      await navigator.clipboard.writeText(summary);
      showToast("Referral pathway copied to clipboard");
    } catch {
      showToast("Couldn't copy — please try manually");
    }
  };

  const copyServiceDetails = async (service) => {
    const text = `${service.title}\n\n${service.details || service.desc}\n\nTarget group: ${
      service.targetAudience || "—"
    }\nAvailability: ${service.turnaround || "—"}`;
    try {
      await navigator.clipboard.writeText(text);
      showToast("Service details copied to clipboard");
    } catch {
      showToast("Couldn't copy — please try manually");
    }
  };

  // Quick-view modal: Escape to close + lock body scroll while open.
  useEffect(() => {
    if (!selectedService) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelectedService(null);
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [selectedService]);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const scrollToCategory = (catId) => {
    const el = document.getElementById(`cat-${catId}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const referralProgressPercent =
    REFERRAL_STEPS.length > 1 ? (activeStepIndex / (REFERRAL_STEPS.length - 1)) * 100 : 100;

  return (
    <div className="wam-services">
      {/* Scoped styling for the interactive pieces, additive only. */}
      <style>{`
        .search-highlight {
          background: rgba(28, 122, 76, 0.18);
          color: inherit;
          border-radius: 3px;
          padding: 0 2px;
        }
        .wam-toast {
          position: fixed;
          left: 50%;
          bottom: 28px;
          transform: translate(-50%, 12px);
          background: #0f2744;
          color: #ffffff;
          padding: 12px 20px;
          border-radius: 999px;
          font-size: 0.88rem;
          box-shadow: 0 12px 30px rgba(0,0,0,0.25);
          z-index: 200;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .wam-toast--visible {
          opacity: 1;
          transform: translate(-50%, 0);
        }
        .bookmark-btn {
          border: 1.5px solid rgba(15, 39, 68, 0.15);
          background: #ffffff;
          border-radius: 999px;
          width: 34px;
          height: 34px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1rem;
          line-height: 1;
          transition: transform 0.15s ease, border-color 0.15s ease, background 0.15s ease;
        }
        .bookmark-btn:hover {
          transform: scale(1.08);
        }
        .bookmark-btn--active {
          background: #1c7a4c;
          border-color: #1c7a4c;
          color: #ffffff;
        }
        .jump-nav {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }
        .jump-nav-btn {
          border: 1px solid rgba(15, 39, 68, 0.15);
          background: #ffffff;
          border-radius: 999px;
          padding: 6px 14px;
          font-size: 0.82rem;
          cursor: pointer;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .jump-nav-btn:hover {
          background: #eef4f2;
        }
        .referral-progress-track {
          height: 4px;
          background: rgba(15, 39, 68, 0.1);
          border-radius: 999px;
          margin: 20px 0 4px;
          overflow: hidden;
        }
        .referral-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #1c7a4c, #1c5d99);
          border-radius: 999px;
          transition: width 0.35s ease;
        }
        .referral-controls {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          margin-bottom: 8px;
        }
        .referral-playpause-btn,
        .referral-copy-btn {
          border: 1px solid rgba(15, 39, 68, 0.15);
          background: #ffffff;
          border-radius: 999px;
          padding: 6px 14px;
          font-size: 0.8rem;
          cursor: pointer;
        }
        .referral-playpause-btn:hover,
        .referral-copy-btn:hover {
          background: #eef4f2;
        }
        .wam-faq-answer-wrap {
          overflow: hidden;
          transition: max-height 0.32s ease, opacity 0.28s ease;
        }
        @media (prefers-reduced-motion: reduce) {
          .wam-toast, .bookmark-btn, .referral-progress-fill, .wam-faq-answer-wrap {
            transition: none !important;
          }
        }
      `}</style>

      {/* 1. HERO HEADER */}
      <section className="services-hero">
        <div className="container services-hero-inner">
          <span className="services-eyebrow">Integrated Support Framework</span>
          <h1 className="services-hero-title">Our Services & Intervention Pathways</h1>
          <p className="services-hero-lead">
            Our work is guided by professionalism, loyalty, integrity, service to humanity, empathy, and
            confidentiality, while our programmes emphasize quality, innovation, local wisdom,
            collaboration, accountability, feedback, and community ownership. At WAM, we believe meaningful impact is achieved not by doing things for communities, but by
            working with them. Together, we can transform challenges into opportunities, local strengths
            into lasting solutions, and individual potential into community-wide transformation.
          </p>

          {/* Quick Metrics Bar — animated */}
          <div className="hero-metrics" ref={metricsRef}>
            <MetricBadge number="3+" label="Core Pillars" active={metricsInView} />
            <MetricBadge number="13+" label="Specialized Interventions" active={metricsInView} />
            <MetricBadge number="100%" label="Confidential Support" active={metricsInView} />
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER & SEARCH BAR */}
      <section className="filter-bar">
        <div className="container filter-bar-inner">
          {/* Search Box */}
          <div className="search-box">
            <input
              type="text"
              placeholder="Search services by keyword..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="search-input"
              aria-label="Search services"
            />
            {searchInput && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchInput("")}
                aria-label="Clear search query"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="filter-buttons-wrapper">
            <span className="filter-label">Filter Category:</span>
            <div className="filter-buttons" role="tablist" aria-label="Filter service categories">
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === "all"}
                onClick={() => setActiveCategory("all")}
                className={`filter-btn ${activeCategory === "all" ? "filter-btn--active" : ""}`}
              >
                All Services
              </button>
              {SERVICE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`filter-btn ${activeCategory === cat.id ? "filter-btn--active" : ""}`}
                >
                  {cat.categoryName.split(" ")[0]} Services
                </button>
              ))}
              {savedIds.length > 0 && (
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === "saved"}
                  onClick={() => setActiveCategory("saved")}
                  className={`filter-btn ${activeCategory === "saved" ? "filter-btn--active" : ""}`}
                >
                  ★ Saved ({savedIds.length})
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Search & Active Filter Counter Summary */}
      <div className="container filter-summary-bar">
        <span>
          Showing <strong>{totalVisibleServices}</strong> service interventions
        </span>
        {(searchQuery || activeCategory !== "all") && (
          <button
            type="button"
            className="reset-filters-btn"
            onClick={() => {
              setActiveCategory("all");
              setSearchInput("");
            }}
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* 3. DETAILED SERVICES LIST */}
      <section className="services-list">
        <div className="container">
          {activeCategory === "all" && !searchQuery && (
            <div className="jump-nav" aria-label="Jump to category">
              {SERVICE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className="jump-nav-btn"
                  onClick={() => scrollToCategory(cat.id)}
                >
                  {cat.categoryName} &darr;
                </button>
              ))}
            </div>
          )}

          {filteredCategories.length === 0 ? (
            <div className="no-results-card">
              <h3>No matching services found</h3>
              <p>
                We couldn't find any service matching "{searchQuery}". Try searching for another term or
                reset your category filters.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setActiveCategory("all");
                  setSearchInput("");
                }}
              >
                View All Services
              </button>
            </div>
          ) : (
            <div className="category-blocks">
              {filteredCategories.map((cat) => (
                <div key={cat.id} id={`cat-${cat.id}`} className="category-block-item">
                  {/* Section Header */}
                  <div className={`category-header category-header--${cat.accent}`}>
                    <span className={`category-label category-label--${cat.accent}`}>Service Category</span>
                    <h2 className="category-title">{cat.categoryName}</h2>
                    <p className="category-desc">{cat.description}</p>
                  </div>

                  {/* Services Cards Grid */}
                  <div className="services-grid">
                    {cat.services.map((service) => {
                      const isSaved = savedIds.includes(service.id);
                      return (
                        <div key={service.id} className="service-card">
                          <div className="service-card-header">
                            <span className="card-badge">{cat.categoryName.split(" ")[0]}</span>
                            <button
                              type="button"
                              className={`bookmark-btn ${isSaved ? "bookmark-btn--active" : ""}`}
                              onClick={() => toggleSaved(service.id, service.title)}
                              aria-pressed={isSaved}
                              aria-label={isSaved ? "Remove from saved services" : "Save this service"}
                              title={isSaved ? "Remove from saved" : "Save for later"}
                            >
                              {isSaved ? "★" : "☆"}
                            </button>
                          </div>
                          <div className="service-card-body">
                            <h3 className="service-card-title">{highlightMatch(service.title, searchQuery)}</h3>
                            <p className="service-card-desc">{highlightMatch(service.desc, searchQuery)}</p>
                          </div>
                          <div className="service-card-footer">
                            <button
                              type="button"
                              className="service-card-info-btn"
                              onClick={() => setSelectedService(service)}
                            >
                              Quick View
                            </button>
                            <Link to="/contact" className="service-card-link">
                              Access or Refer &rarr;
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. INTERACTIVE REFERRAL & CASE MANAGEMENT PATHWAY */}
      <section className="referral-section">
        <div className="container">
          <div className="referral-header">
            <span className="referral-eyebrow">How We Work</span>
            <h2>The WAM Care & Referral Pathway</h2>
            <p>
              Ensuring seamless service delivery from community outreach to facility-based treatment and
              ongoing support.
            </p>
          </div>

          <div className="referral-controls">
            <button
              type="button"
              className="referral-playpause-btn"
              onClick={() => setIsAutoPlaying((p) => !p)}
              aria-pressed={isAutoPlaying}
            >
              {isAutoPlaying ? "⏸ Pause tour" : "▶ Play tour"}
            </button>
            <button type="button" className="referral-copy-btn" onClick={copyReferralSummary}>
              Copy pathway summary
            </button>
          </div>

          <div
            className="referral-grid"
            ref={referralGridRef}
            tabIndex={0}
            onKeyDown={handleReferralKeyDown}
            aria-label="Referral pathway steps — use left and right arrow keys to navigate"
          >
            {REFERRAL_STEPS.map((s, idx) => (
              <div
                key={s.step}
                className={`referral-card ${activeStepIndex === idx ? "referral-card--active" : ""}`}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveStepIndex(idx);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setActiveStepIndex(idx)}
              >
                <div className="referral-card-step-badge">
                  <span className="referral-step-number">{s.step}</span>
                </div>
                <div className="referral-card-content">
                  <h4 className="referral-step-title">{s.title}</h4>
                  <p className="referral-step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="referral-progress-track">
            <div className="referral-progress-fill" style={{ width: `${referralProgressPercent}%` }} />
          </div>

          {/* Interactive Step Detail Box */}
          <div className="referral-detail-box">
            <div className="referral-detail-header">
              <span className="referral-detail-step">
                Step {REFERRAL_STEPS[activeStepIndex].step} Workflow Focus
              </span>
              <h3>{REFERRAL_STEPS[activeStepIndex].title}</h3>
            </div>
            <p className="referral-detail-body">{REFERRAL_STEPS[activeStepIndex].detail}</p>
            <div className="referral-detail-actions">
              <button
                type="button"
                disabled={activeStepIndex === 0}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveStepIndex((prev) => Math.max(0, prev - 1));
                }}
                className="btn btn-outline-sm"
              >
                &larr; Previous Step
              </button>
              <button
                type="button"
                disabled={activeStepIndex === REFERRAL_STEPS.length - 1}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveStepIndex((prev) => Math.min(REFERRAL_STEPS.length - 1, prev + 1));
                }}
                className="btn btn-primary-sm"
              >
                Next Step &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-header">
            <span className="faq-eyebrow">Common Enquiries</span>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about accessing our services and referral networks.</p>
          </div>
          <div className="faq-accordion">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={faq.question} className={`faq-item ${isOpen ? "faq-item--open" : ""}`}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-icon">{isOpen ? "−" : "+"}</span>
                  </button>
                  <div
                    className="wam-faq-answer-wrap"
                    style={{
                      maxHeight: isOpen ? `${faqRefs.current[index]?.scrollHeight || 300}px` : "0px",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="faq-answer" ref={(el) => (faqRefs.current[index] = el)}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="services-cta">
        <div className="container container--cta">
          <h2>Need Service Linkage or Support?</h2>
          <p>
            Whether you are seeking personal support, referring a client, or looking to partner with our
            clinical networks, our team is ready to assist.
          </p>
          <div className="services-cta-actions">
            <Link to="/contact" className="btn btn-primary">
              Make a Referral / Contact Us
            </Link>
            <Link to="/programmes" className="btn btn-outline">
              View Core Programmes
            </Link>
          </div>
        </div>
      </section>

      {/* 7. QUICK VIEW MODAL */}
      {selectedService && (
        <div className="modal-backdrop" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setSelectedService(null)}
              aria-label="Close modal"
            >
              ✕
            </button>
            <div className="modal-header">
              <h3>{selectedService.title}</h3>
            </div>
            <div className="modal-body">
              <p className="modal-desc">{selectedService.desc}</p>
              {selectedService.details && (
                <div className="modal-extra">
                  <h4>Service Details</h4>
                  <p>{selectedService.details}</p>
                </div>
              )}
              <div className="modal-meta-grid">
                {selectedService.targetAudience && (
                  <div className="meta-item">
                    <strong>Target Group:</strong>
                    <span>{selectedService.targetAudience}</span>
                  </div>
                )}
                {selectedService.turnaround && (
                  <div className="meta-item">
                    <strong>Availability:</strong>
                    <span>{selectedService.turnaround}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline" onClick={() => copyServiceDetails(selectedService)}>
                Copy Details
              </button>
              {/* ✅ Correct Syntax */}
<Link 
  className="btn btn-primary" 
  to="/contact" 
  onClick={() => setSelectedService(null)}
>
  Request Service or Referral &rarr;
</Link>
            </div>
          </div>
        </div>
      )}

      {/* TOAST */}
      <div className={`wam-toast ${toast ? "wam-toast--visible" : ""}`} role="status" aria-live="polite">
        {toast}
      </div>
    </div>
  );
}