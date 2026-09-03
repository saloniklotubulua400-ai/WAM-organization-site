import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Impact.css";

export default function Impact() {
  const [activeTab, setActiveTab] = useState("all");
  const [activeRegion, setActiveRegion] = useState("nairobi");
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);

  const summaryStats = [
    { number: "2,500+", label: "Children & Youth Reached", category: "Overall Reach" },
    { number: "4,500+", label: "HIV Testing & Counselling Linkages", category: "Biomedical" },
    { number: "1,950+", label: "Psychosocial Support Sessions", category: "Mental Health" },
    { number: "24+", label: "Community Health & Peer Networks", category: "Capacity" },
  ];

  const programmeImpacts = [
    {
      id: "mlinde",
      title: "MLINDE Initiative",
      subtitle: "Children & Early Intervention (Ages 8–17)",
      color: "#059669",
      badge: "Child Protection",
      stats: [
        { count: "300+", detail: "Children sensitized on rights & abuse prevention" },
        { count: "240+", detail: "Pupils active in school health and rights clubs" },
        { count: "80+", detail: "Families engaged in positive parenting dialogues" },
      ],
      description:
        "Building early resilience, reducing child vulnerability, and fostering safe spaces across primary schools and local communities.",
    },
    {
      id: "mentor",
      title: "MENTOR Initiative",
      subtitle: "Adolescents & Youth Leadership (Ages 14–35)",
      color: "#0284c7",
      badge: "Reproductive Health",
      stats: [
        { count: "3,000+", detail: "Youth equipped with SRH & life-skills training" },
        { count: "240+", detail: "Young people tested and linked to friendly care" },
        { count: "80+", detail: "Peer educators trained for community outreach" },
      ],
      description:
        "Empowering adolescents and young adults to make informed reproductive health choices, fight stigma, and lead local peer groups.",
    },
    {
      id: "wellness",
      title: "WELLNESS Initiative",
      subtitle: "Vulnerable Groups & Recovery Pathways",
      color: "#0d9488",
      badge: "Community Care",
      stats: [
        { count: "300+", detail: "Individuals supported in substance-use recovery" },
        { count: "140+", detail: "GBV survivors linked to clinical & legal support" },
        { count: "5+", detail: "Active Psychosocial Support Groups (PSSG) active" },
      ],
      description:
        "Providing holistic trauma-informed care, fighting marginalization, and establishing resilient community safety nets.",
    },
  ];

  const regions = [
    {
      id: "nairobi",
      county: "Nairobi County",
      metrics: "1,200+ Youth Reached",
      focus: "Urban informal settlements, youth peer networks, and substance-use recovery pathways.",
      tags: ["Informal Settlements", "Peer Outreach", "Substance Recovery"],
    },
    {
      id: "machakos",
      county: "Machakos County",
      metrics: "850+ Students Enrolled",
      focus: "School-based health clubs, adolescent SRH education, and GBV survivor linkage.",
      tags: ["School Health", "SRH Education", "GBV Support"],
    },
    {
      id: "kitui",
      county: "Kitui County",
      metrics: "450+ Families Supported",
      focus: "Community health volunteer networks and adolescent reproductive health advocacy.",
      tags: ["CHV Networks", "Reproductive Rights", "Family Care"],
    },
    {
      id: "makueni",
      county: "Makueni County",
      metrics: "300+ Support Sessions",
      focus: "Psychosocial support groups, child rights advocacy, and parenting dialogues.",
      tags: ["PSS Groups", "Child Rights", "Parent Dialogues"],
    },
  ];

  const stories = [
    {
      quote:
        "Through the MENTOR programme, I found the confidence to seek reproductive health services without fear of stigma. Now I lead peer outreach in my village.",
      role: "Youth Peer Educator",
      location: "Machakos County",
      initiative: "MENTOR Initiative",
    },
    {
      quote:
        "The MLINDE health club in our school gave our students a voice. They know their rights and where to report child safety issues.",
      role: "Primary School Teacher",
      location: "Nairobi County",
      initiative: "MLINDE Initiative",
    },
    {
      quote:
        "The psychosocial support groups gave us a platform to recover safely from trauma and build financial stability together.",
      role: "Community Support Leader",
      location: "Kitui County",
      initiative: "WELLNESS Initiative",
    },
  ];

  const filteredProgrammes =
    activeTab === "all"
      ? programmeImpacts
      : programmeImpacts.filter((p) => p.id === activeTab);

  return (
    <div className="impact-page">
      {/* 1. HERO HEADER */}
      <section className="impact-hero">
        <div className="impact-container text-center">
          <span className="hero-eyebrow">Measurable Outcomes</span>
          <h1 className="hero-title">Our Impact Across Communities</h1>
          <p className="hero-lead">
            Tracking progress, measuring real outcomes, and transforming lives
            through evidence-based health and psychosocial interventions across Kenya.
          </p>
        </div>
      </section>

      {/* 2. HIGH-LEVEL STATS GRID */}
      <section className="summary-stats-section">
        <div className="impact-container">
          <div className="stats-grid">
            {summaryStats.map((item, index) => (
              <div key={index} className="stat-card">
                <span className="stat-category">{item.category}</span>
                <h2 className="stat-number">{item.number}</h2>
                <p className="stat-label">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROGRAMME IMPACT BREAKDOWN WITH INTERACTIVE TABS */}
      <section className="programmes-section">
        <div className="impact-container">
          <div className="text-center" style={{ marginBottom: "2.5rem" }}>
            <span className="section-eyebrow">Programmatic Breakdown</span>
            <h2 className="section-title">Impact by Strategic Initiative</h2>
            <p className="section-subtitle">
              Select an initiative to explore target outcomes and quantitative reach
            </p>

            {/* Filter Tabs */}
            <div className="filter-tabs">
              <button
                onClick={() => setActiveTab("all")}
                className={`tab-btn ${activeTab === "all" ? "tab-btn--active" : ""}`}
              >
                All Initiatives
              </button>
              {programmeImpacts.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(p.id)}
                  className={`tab-btn ${activeTab === p.id ? "tab-btn--active" : ""}`}
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>

          <div className="programmes-stack">
            {filteredProgrammes.map((programme) => (
              <div
                key={programme.id}
                className="programme-card"
                style={{ "--accent-color": programme.color }}
              >
                <div className="programme-card-header">
                  <div>
                    <span className="programme-badge">{programme.badge}</span>
                    <h3 className="programme-title">{programme.title}</h3>
                    <span className="programme-subtitle">{programme.subtitle}</span>
                  </div>
                </div>

                <p className="programme-description">{programme.description}</p>

                <div className="programme-stats-grid">
                  {programme.stats.map((s, idx) => (
                    <div key={idx} className="programme-stat-item">
                      <span className="programme-stat-count">{s.count}</span>
                      <span className="programme-stat-detail">{s.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GEOGRAPHIC FOOTPRINT INTERACTIVE DASHBOARD */}
      <section className="geographic-section">
        <div className="impact-container">
          <div className="text-center" style={{ marginBottom: "2.5rem" }}>
            <span className="section-eyebrow">Geographic Scope</span>
            <h2 className="section-title">Where We Operate</h2>
            <p className="section-subtitle">
              Click a county to review tailored health and psychosocial operations
            </p>
          </div>

          <div className="region-dashboard">
            {/* Interactive County Selector Tabs */}
            <div className="region-selector">
              {regions.map((r) => (
                <button
                  key={r.id}
                  className={`region-nav-btn ${
                    activeRegion === r.id ? "region-nav-btn--active" : ""
                  }`}
                  onClick={() => setActiveRegion(r.id)}
                >
                  <span className="region-nav-name">{r.county}</span>
                  <span className="region-nav-meta">{r.metrics}</span>
                </button>
              ))}
            </div>

            {/* Region Details Display Box */}
            <div className="region-display-card">
              {regions
                .filter((r) => r.id === activeRegion)
                .map((selected) => (
                  <div key={selected.id} className="region-display-content">
                    <div className="region-display-header">
                      <h3>{selected.county}</h3>
                      <span className="region-metrics-badge">{selected.metrics}</span>
                    </div>

                    <p className="region-display-focus">{selected.focus}</p>

                    <div className="region-tags-wrapper">
                      <strong className="tags-label">Key Focus Areas:</strong>
                      <div className="region-tags">
                        {selected.tags.map((tag, i) => (
                          <span key={i} className="region-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE TESTIMONIAL CAROUSEL */}
      <section className="stories-section">
        <div className="impact-container">
          <div className="text-center" style={{ marginBottom: "2.5rem" }}>
            <span className="section-eyebrow">Field Feedback</span>
            <h2 className="section-title">Voices from the Field</h2>
            <p className="section-subtitle">
              First-hand perspectives from community champions and participants
            </p>
          </div>

          <div className="story-interactive-card">
            <div className="story-content-body">
              <span className="story-initiative-badge">
                {stories[activeStoryIdx].initiative}
              </span>
              <p className="story-quote">"{stories[activeStoryIdx].quote}"</p>
              <div className="story-meta">
                <strong className="story-role">{stories[activeStoryIdx].role}</strong>
                <span className="story-location">
                  {stories[activeStoryIdx].location}
                </span>
              </div>
            </div>

            <div className="story-controls">
              {stories.map((_, idx) => (
                <button
                  key={idx}
                  className={`story-dot ${
                    activeStoryIdx === idx ? "story-dot--active" : ""
                  }`}
                  onClick={() => setActiveStoryIdx(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. MEL FRAMEWORK SECTION */}
      <section className="mel-section">
        <div className="impact-container">
          <div className="mel-card">
            <span className="section-eyebrow">Framework & Accountability</span>
            <h3>Monitoring, Evaluation & Learning (MEL)</h3>
            <p>
              WAM utilizes rigorous Monitoring, Evaluation, and Learning (MEL) frameworks
              to track indicator progress, safeguard beneficiary confidentiality, and
              continually optimize field operations in alignment with national public
              health guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="impact-cta-section text-center">
        <div className="impact-container">
          <h2>Help Us Expand Our Impact</h2>
          <p>
            Partner with WAM to scale health and psychosocial interventions across Nairobi,
            Machakos, Kitui, and Makueni counties.
          </p>
          <div className="cta-btn-group">
            <Link to="/contact" className="btn-cta-primary">
              Partner With Us
            </Link>
            <Link to="/programmes" className="btn-cta-secondary">
              Explore Programmes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}