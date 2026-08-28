import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AreasOfOperation.css";

export default function AreasOfOperation() {
  const [selectedCounty, setSelectedCounty] = useState("all");

  const countiesData = [
    {
      id: "nairobi",
      name: "Nairobi City County",
      category: "Urban Outreach & Referral Focus",
      tagline: "High-density informal settlement engagement and youth reproductive health linkages.",
      stats: { beneficiaries: "6,500+", focus: "Youth & Informal Settlements" },
      highlights: [
        "Viwandani & Mukuru informal settlement community support hubs.",
        "Peer-to-peer Sexual & Reproductive Health (SRH) education (MENTOR).",
        "Substance-use screening and clinical referral pathways.",
        "Child protection clubs in primary educational institutions (MLINDE).",
      ],
      initiatives: ["MLINDE", "MENTOR", "WELLNESS"],
    },
    {
      id: "machakos",
      name: "Machakos County",
      category: "Community Health & GBV Response",
      tagline: "Strengthening rural health linkages, psychosocial groups, and child safety networks.",
      stats: { beneficiaries: "3,800+", focus: "Community Health & Protection" },
      highlights: [
        "Gender-Based Violence (GBV) community awareness & survivor support.",
        "School-based child rights and abuse prevention workshops.",
        "Psychosocial support groups (PSSG) for vulnerable women and girls.",
        "Local government & technical working group (TWG) collaborations.",
      ],
      initiatives: ["MLINDE", "WELLNESS"],
    },
    {
      id: "kitui",
      name: "Kitui County",
      category: "Rights Advocacy & Youth Empowerment",
      tagline: "Empowering rural youth, enhancing life skills, and driving community dialogue.",
      stats: { beneficiaries: "2,900+", focus: "Youth SRH & Mental Health" },
      highlights: [
        "HIV prevention, testing, and counselling (HTS) linkage networks.",
        "Youth life-skills training and leadership mentorship sessions.",
        "Alcohol and substance-use prevention dialogue forums.",
        "Community stakeholder sensitization for child protection.",
      ],
      initiatives: ["MENTOR", "WELLNESS"],
    },
    {
      id: "makueni",
      name: "Makueni County",
      category: "Holistic Wellbeing & System Linkages",
      tagline: "Promoting resilience, health access, and institutional partnership frameworks.",
      stats: { beneficiaries: "2,400+", focus: "Health Promotion & Resilience" },
      highlights: [
        "Community health education on disease prevention and control.",
        "Youth-friendly reproductive health services advocacy.",
        "Capacity building for local volunteers and peer educators.",
        "Integration of mental health awareness into community forums.",
      ],
      initiatives: ["MLINDE", "MENTOR"],
    },
  ];

  const filteredCounties =
    selectedCounty === "all"
      ? countiesData
      : countiesData.filter((c) => c.id === selectedCounty);

  return (
    <div className="areas-page">
      {/* PAGE HEADER */}
      <section className="areas-header">
        <div className="container header-container">
          <span className="badge-pill">Geographic Footprint</span>
          <h1>Our Areas of Operation</h1>
          <p>
            WAM operates across four key counties in Kenya, delivering targeted interventions in health promotion, child protection, youth empowerment, and psychosocial support.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="areas-section">
        <div className="container">
          
          {/* FILTER CONTROLS */}
          <div className="filter-wrapper">
            <span className="filter-label">Filter Region:</span>
            <div className="filter-buttons">
              <button
                className={`filter-btn ${selectedCounty === "all" ? "active" : ""}`}
                onClick={() => setSelectedCounty("all")}
              >
                All Counties (4)
              </button>
              {countiesData.map((county) => (
                <button
                  key={county.id}
                  className={`filter-btn ${selectedCounty === county.id ? "active" : ""}`}
                  onClick={() => setSelectedCounty(county.id)}
                >
                  {county.name}
                </button>
              ))}
            </div>
          </div>

          {/* COUNTIES GRID */}
          <div className="counties-grid">
            {filteredCounties.map((county) => (
              <div key={county.id} className="county-card">
                <div className="card-header">
                  <span className="county-category">{county.category}</span>
                  <h2>{county.name}</h2>
                  <p className="county-tagline">{county.tagline}</p>
                </div>

                <div className="card-stats">
                  <div className="stat-box">
                    <span className="stat-value">{county.stats.beneficiaries}</span>
                    <span className="stat-label">Reached</span>
                  </div>
                  <div className="stat-box">
                    <span className="stat-value">{county.stats.focus}</span>
                    <span className="stat-label">Core Priority</span>
                  </div>
                </div>

                <div className="card-body">
                  <h4>Key Interventions & Presence</h4>
                  <ul className="highlights-list">
                    {county.highlights.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="card-footer">
                  <span className="initiatives-label">Active Programmes:</span>
                  <div className="initiative-tags">
                    {county.initiatives.map((tag) => (
                      <span key={tag} className={`tag tag-${tag.toLowerCase()}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PARTNERSHIP CTA BANNER */}
          <div className="partnership-banner">
            <div className="banner-content">
              <h3>Expanding Impact Across Kenya</h3>
              <p>
                Interested in bringing WAM’s health, protection, and psychosocial programmes to your county or institution?
              </p>
            </div>
            <Link to="/contact" className="banner-btn">
              Partner With Us &rarr;
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}