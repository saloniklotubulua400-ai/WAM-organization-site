import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Detailed Categorized Services Data
  const serviceCategories = [
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

  // Referral Pathway Steps
  const referralSteps = [
    { 
      step: "01", 
      title: "Identification & Outreach", 
      desc: "Community Health Volunteers (CHVs) and peer educators identify individuals needing health or psychosocial support.",
      detail: "Outreach teams engage with communities directly in high-density areas, youth hubs, and households to conduct risk assessments and raise awareness."
    },
    { 
      step: "02", 
      title: "Screening & Counselling", 
      desc: "Initial risk assessments, confidential counselling, and service mapping conducted by WAM staff.",
      detail: "Trained counsellors evaluate specific health and psychological needs to formulate an individualized, confidential care plan."
    },
    { 
      step: "03", 
      title: "Direct Referral", 
      desc: "Issuance of official referral vouchers to partner health facilities, safe spaces, or legal aid centers.",
      detail: "Clients receive standardized referral vouchers ensuring rapid, priority attention at partner clinical and legal centers without unnecessary delays."
    },
    { 
      step: "04", 
      title: "Follow-up & Retention", 
      desc: "Case management and continuous follow-up to ensure complete care loop and beneficiary well-being.",
      detail: "Dedicated case managers monitor progress through phone check-ins, home visits, and support group integration to guarantee complete continuum of care."
    },
  ];

  // Frequently Asked Questions Data
  const faqs = [
    {
      question: "Are WAM services confidential?",
      answer: "Yes. All testing, counselling, and referral services strictly follow client confidentiality guidelines and protocol regulations."
    },
    {
      question: "Do I have to pay for referrals or testing support?",
      answer: "No. Community-level screening, peer support, and referral services coordinated directly by WAM are provided free of charge."
    },
    {
      question: "How quickly can I access emergency GBV or PEP services?",
      answer: "Emergency response for GBV and PEP post-exposure services are prioritized immediately with 24/7 rapid linkage protocols."
    },
    {
      question: "Can I refer a friend or family member?",
      answer: "Absolutely. You can initiate a referral on behalf of someone else through our online contact form or by contacting a community health volunteer."
    }
  ];

  // Computed Filtered Categories & Search
  const filteredCategories = useMemo(() => {
    return serviceCategories
      .map((cat) => {
        if (activeCategory !== "all" && cat.id !== activeCategory) {
          return null;
        }

        if (!searchQuery.trim()) {
          return cat;
        }

        const query = searchQuery.toLowerCase();
        const filteredServices = cat.services.filter(
          (s) =>
            s.title.toLowerCase().includes(query) ||
            s.desc.toLowerCase().includes(query)
        );

        if (filteredServices.length > 0) {
          return { ...cat, services: filteredServices };
        }

        return null;
      })
      .filter(Boolean);
  }, [activeCategory, searchQuery]);

  // Total Services Count calculation
  const totalVisibleServices = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.services.length, 0);
  }, [filteredCategories]);

  return (
    <div className="wam-services">

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

          {/* Quick Metrics Bar */}
          <div className="hero-metrics">
            <div className="metric-badge">
              <span className="metric-number">3+</span>
              <span className="metric-label">Core Pillars</span>
            </div>
            <div className="metric-badge">
              <span className="metric-number">13+</span>
              <span className="metric-label">Specialized Interventions</span>
            </div>
            <div className="metric-badge">
              <span className="metric-number">100%</span>
              <span className="metric-label">Confidential Support</span>
            </div>
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              aria-label="Search services"
            />
            {searchQuery && (
              <button 
                className="search-clear-btn" 
                onClick={() => setSearchQuery("")}
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
                role="tab"
                aria-selected={activeCategory === "all"}
                onClick={() => setActiveCategory("all")}
                className={`filter-btn ${activeCategory === "all" ? "filter-btn--active" : ""}`}
              >
                All Services
              </button>
              {serviceCategories.map((cat) => (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`filter-btn ${activeCategory === cat.id ? "filter-btn--active" : ""}`}
                >
                  {cat.categoryName.split(" ")[0]} Services
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Search & Active Filter Counter Summary */}
      <div className="container filter-summary-bar">
        <span>Showing <strong>{totalVisibleServices}</strong> service interventions</span>
        {(searchQuery || activeCategory !== "all") && (
          <button 
            className="reset-filters-btn"
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* 3. DETAILED SERVICES LIST */}
      <section className="services-list">
        <div className="container">
          
          {filteredCategories.length === 0 ? (
            <div className="no-results-card">
              <h3>No matching services found</h3>
              <p>We couldn't find any service matching "{searchQuery}". Try searching for another term or reset your category filters.</p>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
              >
                View All Services
              </button>
            </div>
          ) : (
            <div className="category-blocks">
              {filteredCategories.map((cat) => (
                <div key={cat.id} className="category-block-item">
                  
                  {/* Section Header */}
                  <div className={`category-header category-header--${cat.accent}`}>
                    <span className={`category-label category-label--${cat.accent}`}>Service Category</span>
                    <h2 className="category-title">{cat.categoryName}</h2>
                    <p className="category-desc">{cat.description}</p>
                  </div>

                  {/* Services Cards Grid */}
                  <div className="services-grid">
                    {cat.services.map((service) => (
                      <div key={service.id || service.title} className="service-card">
                        <div className="service-card-header">
                          <span className="card-badge">{cat.categoryName.split(" ")[0]}</span>
                        </div>
                        <div className="service-card-body">
                          <h3 className="service-card-title">{service.title}</h3>
                          <p className="service-card-desc">{service.desc}</p>
                        </div>
                        <div className="service-card-footer">
                          <button 
                            className="service-card-info-btn"
                            onClick={() => setSelectedService(service)}
                          >
                            Quick View
                          </button>
                          <Link to="/contact" className="service-card-link">Access or Refer &rarr;</Link>
                        </div>
                      </div>
                    ))}
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

          <div className="referral-grid">
            {referralSteps.map((s, idx) => (
              <div 
                key={s.step} 
                className={`referral-card ${activeStepIndex === idx ? "referral-card--active" : ""}`}
                onClick={() => setActiveStepIndex(idx)}
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

          {/* Interactive Step Detail Box */}
          <div className="referral-detail-box">
            <div className="referral-detail-header">
              <span className="referral-detail-step">Step {referralSteps[activeStepIndex].step} Workflow Focus</span>
              <h3>{referralSteps[activeStepIndex].title}</h3>
            </div>
            <p className="referral-detail-body">{referralSteps[activeStepIndex].detail}</p>
            <div className="referral-detail-actions">
              <button 
                disabled={activeStepIndex === 0} 
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                className="btn btn-outline-sm"
              >
                &larr; Previous Step
              </button>
              <button 
                disabled={activeStepIndex === referralSteps.length - 1} 
                onClick={() => setActiveStepIndex((prev) => Math.min(referralSteps.length - 1, prev + 1))}
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
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${openFaqIndex === index ? "faq-item--open" : ""}`}
              >
                <button 
                  className="faq-question" 
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  aria-expanded={openFaqIndex === index}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{openFaqIndex === index ? "−" : "+"}</span>
                </button>
                {openFaqIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
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
            <Link to="/contact" className="btn btn-primary">Make a Referral / Contact Us</Link>
            <Link to="/programmes" className="btn btn-outline">View Core Programmes</Link>
          </div>
        </div>
      </section>

      {/* 7. QUICK VIEW MODAL */}
      {selectedService && (
        <div className="modal-backdrop" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <button className="modal-close-btn" onClick={() => setSelectedService(null)} aria-label="Close modal">✕</button>
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
              <Link to="/contact" className="btn btn-primary" onClick={() => setSelectedService(null)}>
                Proceed to Referral Form
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}