import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Impact.css";

// Asset imports (wamo1 through wamo14)
import wamo1 from "../assets/wamo1.png";
import wamo2 from "../assets/wamo2.png";
import wamo3 from "../assets/wamo3.png";
import wamo4 from "../assets/wamo4.png";
import wamo5 from "../assets/wamo5.png";
import wamo6 from "../assets/wamo6.png";
import wamo7 from "../assets/wamo7.png";
import wamo8 from "../assets/wamo8.png";
import wamo9 from "../assets/wamo9.png";
import wamo10 from "../assets/wamo10.png";
import wamo11 from "../assets/wamo11.png";
import wamo12 from "../assets/wamo12.png";
import wamo13 from "../assets/wamo13.png"; // Single Hero Image
import wamo14 from "../assets/wamo14.png";

export default function Impact() {
  const [activeTab, setActiveTab] = useState("all");

  const summaryStats = [
    { number: "2500+", label: "Children & Youth Reached", category: "Overall Reach" },
    { number: "4500+", label: "HIV Testing & Counselling Linkages", category: "Biomedical" },
    { number: "1950+", label: "Psychosocial Support Sessions", category: "Mental Health" },
    { number: "24+", label: "Community Health & Peer Networks", category: "Capacity" },
  ];

  const programmeImpacts = [
    {
      id: "mlinde",
      title: "MLINDE Initiative (Ages 8–17)",
      color: "#04724d",
      image: wamo1,
      stats: [
        { count: "300+", detail: "Children sensitized on rights and abuse prevention" },
        { count: "240+", detail: "Pupils active in school health and rights clubs" },
        { count: "80+", detail: "Families engaged in positive parenting dialogues" },
      ],
      description: "Building early resilience, reducing child vulnerability, and fostering safe spaces across schools and local communities.",
    },
    {
      id: "mentor",
      title: "MENTOR Initiative (Ages 14–35)",
      color: "#123c69",
      image: wamo2,
      stats: [
        { count: "3000+", detail: "Youth equipped with SRH and life-skills training" },
        { count: "240+", detail: "Young people tested and linked to friendly care" },
        { count: "80+", detail: "Peer educators trained for community outreach" },
      ],
      description: "Empowering adolescents and young adults to make informed reproductive health choices and lead peer support groups.",
    },
    {
      id: "wellness",
      title: "WELLNESS Initiative (Vulnerable Groups)",
      color: "#62b6cb",
      image: wamo3,
      stats: [
        { count: "300+", detail: "Individuals supported in substance-use recovery pathways" },
        { count: "140+", detail: "GBV survivors linked to clinical, legal, and psychosocial support" },
        { count: "5+", detail: "Active psychosocial support groups (PSSG) established" },
      ],
      description: "Providing holistic trauma-informed care, fighting stigma, and establishing long-term community safety nets.",
    },
  ];

  const regions = [
    { county: "Nairobi County", image: wamo4, focus: "Urban informal settlements, youth peer networks, and substance-use outreach." },
    { county: "Machakos County", image: wamo5, focus: "School-based health clubs, SRH education, and GBV survivor linkage." },
    { county: "Kitui County", image: wamo6, focus: "Community health volunteer networks and adolescent reproductive health." },
    { county: "Makueni County", image: wamo7, focus: "Psychosocial support groups and child protection advocacy." },
  ];

  const stories = [
    {
      quote: "Through the MENTOR programme, I found the confidence to seek reproductive health services without fear of stigma. Now I lead peer outreach in my village.",
      role: "Youth Peer Educator",
      location: "Machakos",
      image: wamo8,
    },
    {
      quote: "The MLINDE health club in our school gave our students a voice. They know their rights and where to report child safety issues.",
      role: "Primary School Teacher",
      location: "Nairobi",
      image: wamo9,
    },
    {
      quote: "The psychosocial support groups gave us a platform to recover safely from trauma and build financial stability together.",
      role: "Community Support Leader",
      location: "Kitui",
      image: wamo10,
    },
  ];

  const filteredProgrammes =
    activeTab === "all"
      ? programmeImpacts
      : programmeImpacts.filter((p) => p.id === activeTab);

  return (
    <div className="impact-page">
      
      {/* 1. HERO HEADER WITH WAMO13 FULL-WIDTH BACKGROUND */}
      <section
        className="impact-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(16, 42, 67, 0.85), rgba(16, 42, 67, 0.88)), url(${wamo13})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="impact-container">
          <div className="hero-content">
            <span className="hero-subtitle">Measurable Outcomes</span>
            <h1>Our Impact Across Communities</h1>
            <p>
              Tracking progress, measuring real outcomes, and transforming lives through evidence-based health and psychosocial interventions. WAM recognizes that sustainable community transformation requires collaboration. We build and strengthen partnerships with communities, government institutions, development partners, civil society organizations, private sector actors, academic institutions, and other stakeholders to share knowledge, resources, expertise, and opportunities while avoiding duplication and maximizing collective impact.
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

      {/* 3. PROGRAMME IMPACT BREAKDOWN WITH TABS & PROGRAMME IMAGES */}
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
                <div className="programme-card-layout">
                  <div className="programme-card-content">
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
                  <div className="programme-card-media">
                    <img src={programme.image} alt={programme.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GEOGRAPHIC FOOTPRINT & COVERAGE WITH COUNTY CARDS & IMAGES */}
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
                <div className="region-img-frame">
                  <img src={r.image} alt={r.county} />
                </div>
                <div className="region-card-body">
                  <div className="region-card-header">
                    <div className="region-dot"></div>
                    <h3>{r.county}</h3>
                  </div>
                  <p>{r.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMMUNITY STORIES & TESTIMONIALS WITH PORTRAITS */}
      <section className="stories-section">
        <div className="impact-container">
          <div className="text-center" style={{ marginBottom: "50px" }}>
            <h2 className="section-header-title">Voices from the Field</h2>
            <p className="section-header-desc">Real feedback from community leaders and participants</p>
          </div>

          <div className="stories-grid impact-container-narrow">
            {stories.map((story, i) => (
              <div key={i} className="story-card">
                <div className="story-media">
                  <img src={story.image} alt={story.role} />
                </div>
                <div className="story-content">
                  <p className="story-quote">"{story.quote}"</p>
                  <div>
                    <strong className="story-role">{story.role}</strong>
                    <span className="story-location">Location: {story.location} County</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MONITORING, EVALUATION & LEARNING (MEL) STATEMENT WITH WAMO11 & WAMO12 */}
      <section className="mel-section">
        <div className="impact-container mel-layout">
          <div className="mel-media-grid">
            <img src={wamo11} alt="WAM Field Monitoring" />
            <img src={wamo12} alt="WAM Evaluation Team" />
          </div>
          <div className="mel-text">
            <h3>Our Commitment to Data Quality & MEL</h3>
            <p>
              WAM utilizes rigorous Monitoring, Evaluation, and Learning (MEL) frameworks to track indicator progress, ensure beneficiary data confidentiality, and continually optimize field operations in accordance with national public health standards.
            </p>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION WITH BACKGROUND OVERLAY (WAMO14) */}
      <section 
        className="impact-cta-section text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(18, 60, 105, 0.92), rgba(16, 42, 67, 0.95)), url(${wamo14})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
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