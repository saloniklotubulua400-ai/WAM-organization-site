import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Impact.css";

export default function Impact() {
  const [activeTab, setActiveTab] = useState("all");

  const summaryStats = [
    { number: "15,000+", label: "Children & Youth Reached", category: "Overall Reach" },
    { number: "8,500+", label: "HIV Testing & Counselling Linkages", category: "Biomedical" },
    { number: "3,200+", label: "Psychosocial Support Sessions", category: "Mental Health" },
    { number: "40+", label: "Community Health & Peer Networks", category: "Capacity" },
  ];

  const programmeImpacts = [
    {
      id: "mlinde",
      title: "MLINDE Initiative (Ages 8–17)",
      color: "#04724d",
      stats: [
        { count: "5,200+", detail: "Children sensitized on rights and abuse prevention" },
        { count: "1,200+", detail: "Pupils active in school health and rights clubs" },
        { count: "850+", detail: "Families engaged in positive parenting dialogues" },
      ],
      description: "Building early resilience, reducing child vulnerability, and fostering safe spaces across schools and local communities.",
    },
    {
      id: "mentor",
      title: "MENTOR Initiative (Ages 14–35)",
      color: "#123c69",
      stats: [
        { count: "7,800+", detail: "Youth equipped with SRH and life-skills training" },
        { count: "6,400+", detail: "Young people tested and linked to friendly care" },
        { count: "450+", detail: "Peer educators trained for community outreach" },
      ],
      description: "Empowering adolescents and young adults to make informed reproductive health choices and lead peer support groups.",
    },
    {
      id: "wellness",
      title: "WELLNESS Initiative (Vulnerable Groups)",
      color: "#62b6cb",
      stats: [
        { count: "2,100+", detail: "Individuals supported in substance-use recovery pathways" },
        { count: "1,400+", detail: "GBV survivors linked to clinical, legal, and psychosocial support" },
        { count: "30+", detail: "Active psychosocial support groups (PSSG) established" },
      ],
      description: "Providing holistic trauma-informed care, fighting stigma, and establishing long-term community safety nets.",
    },
  ];

  const regions = [
    { county: "Nairobi County", focus: "Urban informal settlements, youth peer networks, and substance-use outreach." },
    { county: "Machakos County", focus: "School-based health clubs, SRH education, and GBV survivor linkage." },
    { county: "Kitui County", focus: "Community health volunteer networks and adolescent reproductive health." },
    { county: "Makueni County", focus: "Psychosocial support groups and child protection advocacy." },
  ];

  const stories = [
    {
      quote: "Through the MENTOR programme, I found the confidence to seek reproductive health services without fear of stigma. Now I lead peer outreach in my village.",
      role: "Youth Peer Educator",
      location: "Machakos",
    },
    {
      quote: "The MLINDE health club in our school gave our students a voice. They know their rights and where to report child safety issues.",
      role: "Primary School Teacher",
      location: "Nairobi",
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
        <div className="impact-container">
          <div className="hero-content">
            <span className="hero-subtitle">Measurable Outcomes</span>
            <h1>Our Impact Across Communities</h1>
            <p>
              Tracking progress, measuring real outcomes, and transforming lives through evidence-based health and psychosocial interventions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. HIGH-LEVEL STATS GRID */}
      <section className="summary-stats-section">
        <div className="impact-container">
          <div className="stats-grid">
            {summaryStats.map((item, index) => (
              <div key={index} className="stat-card">
                <h2>{item.number}</h2>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROGRAMME IMPACT BREAKDOWN WITH TABS */}
      <section className="programmes-section">
        <div className="impact-container">
          <div className="text-center" style={{ marginBottom: "40px" }}>
            <h2 className="section-header-title">Impact by Strategic Initiative</h2>
            <p className="section-header-desc">Explore the measurable outcomes delivered through WAM's core initiatives</p>

            {/* Filter Tabs */}
            <div className="filter-tabs">
              <button
                onClick={() => setActiveTab("all")}
                className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
              >
                All Initiatives
              </button>
              {programmeImpacts.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(p.id)}
                  className={`tab-btn ${activeTab === p.id ? "active" : ""}`}
                >
                  {p.title.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="programmes-stack">
            {filteredProgrammes.map((programme) => (
              <div
                key={programme.id}
                className="programme-card"
                style={{ borderLeft: `6px solid ${programme.color}` }}
              >
                <h3>{programme.title}</h3>
                <p className="programme-description">{programme.description}</p>

                <div className="programme-stats-grid">
                  {programme.stats.map((s, idx) => (
                    <div key={idx}>
                      <span className="programme-stat-count" style={{ color: programme.color }}>
                        {s.count}
                      </span>
                      <span className="programme-stat-detail">{s.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GEOGRAPHIC FOOTPRINT & COVERAGE */}
      <section className="geographic-section">
        <div className="impact-container">
          <div className="text-center" style={{ marginBottom: "50px" }}>
            <span className="geographic-subtitle">Geographic Scope</span>
            <h2 className="section-header-title" style={{ marginTop: "8px" }}>Where We Operate</h2>
            <p className="section-header-desc">Implementing tailored health and psychosocial solutions across key counties in Kenya</p>
          </div>

          <div className="regions-grid">
            {regions.map((r, idx) => (
              <div key={idx} className="region-card">
                <div className="region-card-header">
                  <div className="region-dot"></div>
                  <h3>{r.county}</h3>
                </div>
                <p>{r.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMMUNITY STORIES & TESTIMONIALS */}
      <section className="stories-section">
        <div className="impact-container">
          <div className="text-center" style={{ marginBottom: "50px" }}>
            <h2 className="section-header-title">Voices from the Field</h2>
            <p className="section-header-desc">Real feedback from community leaders and participants</p>
          </div>

          <div className="stories-grid impact-container-narrow">
            {stories.map((story, i) => (
              <div key={i} className="story-card">
                <p className="story-quote">"{story.quote}"</p>
                <div>
                  <strong className="story-role">{story.role}</strong>
                  <span className="story-location">Location: {story.location} County</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MONITORING, EVALUATION & LEARNING (MEL) STATEMENT */}
      <section className="mel-section">
        <div className="impact-container-narrow text-center">
          <h3>Our Commitment to Data Quality & MEL</h3>
          <p>
            WAM utilizes rigorous Monitoring, Evaluation, and Learning (MEL) frameworks to track indicator progress, ensure beneficiary data confidentiality, and continually optimize field operations in accordance with national public health standards.
          </p>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="impact-cta-section text-center">
        <div className="impact-container-cta">
          <h2>Help Us Expand Our Impact</h2>
          <p>
            Partner with WAM to scale our reach across Nairobi, Machakos, Kitui, and Makueni counties.
          </p>
          <div className="cta-btn-group">
            <Link to="/contact" className="btn-primary-cta">
              Partner With Us
            </Link>
            <Link to="/programmes" className="btn-secondary-cta">
              Explore Programmes
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}