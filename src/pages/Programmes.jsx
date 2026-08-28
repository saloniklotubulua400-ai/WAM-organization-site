import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Programmes.css";

export default function Programmes() {
  const [selectedProgramme, setSelectedProgramme] = useState("all");

  // Detailed Data for WAM Core Programmes
  const programmesData = [
    {
      id: "mlinde",
      title: "MLINDE",
      subtitle: "Protecting Children. Building Healthier Futures.",
      targetAudience: "Children aged 8–17 years",
      accent: "mlinde",
      summary:
        "MLINDE focuses on child rights, protection, early health interventions, life skills, and comprehensive psychosocial wellbeing.",
      keyAreas: [
        "Child-rights awareness & advocacy",
        "Child protection & prevention of abuse",
        "Life-skills education & guidance",
        "Mental health & psychosocial support",
        "Children's health clubs",
        "Mentorship & peer support networks",
        "Community & family awareness",
      ],
      impactFocus: "Early intervention, safe spaces, and rights awareness for children.",
    },
    {
      id: "mentor",
      title: "MENTOR",
      subtitle: "Empowering Young People Through Knowledge, Skills and Health",
      targetAudience: "Young people aged 14–35 years",
      accent: "mentor",
      summary:
        "MENTOR supports youth capacity building, reproductive health, disease prevention, HIV testing, and referral networks.",
      keyAreas: [
        "Life-skills training & capacity building",
        "Sexual & Reproductive Health (SRH)",
        "HIV prevention, testing & counselling",
        "Direct linkage and health service referral",
        "Disease prevention education",
        "Community mobilization & youth leadership",
      ],
      impactFocus: "Youth empowerment, informed health choices, and direct clinical linkages.",
    },
    {
      id: "wellness",
      title: "WELLNESS",
      subtitle: "Supporting Vulnerable Communities to Thrive",
      targetAudience: "Vulnerable groups, girls, women & community members",
      accent: "wellness",
      summary:
        "The WELLNESS programme delivers targeted interventions addressing substance use, gender-based violence (GBV), human rights, and mental health.",
      keyAreas: [
        "Substance-use prevention & early support",
        "Individual & group counselling",
        "Psychosocial support groups",
        "Gender-Based Violence (GBV) prevention & response",
        "Human-rights awareness & community sensitization",
        "Peer education & referral pathways",
      ],
      impactFocus: "Community resilience, trauma support, and stigma reduction.",
    },
  ];

  // Comprehensive Service Pathways
  const serviceCategories = [
    {
      title: "Behavioural & Community Services",
      description: "Promoting healthy choices, risk reduction, and community-led resilience.",
      items: [
        "Community mobilization & outreach forums",
        "Peer counselling & education sessions",
        "Risk assessment & reduction counselling",
        "Substance-use prevention forums",
        "Community advocacy & structural dialogue",
      ],
    },
    {
      title: "Biomedical & Health Services",
      description: "Direct access pathways to clinical health services and support.",
      items: [
        "HIV testing & counselling (HTC)",
        "STI screening & treatment linkage",
        "HIV care & treatment linkages",
        "Alcohol & substance-use screening",
        "Family planning, PEP & PrEP access",
      ],
    },
    {
      title: "Structural & Systems Services",
      description: "Strengthening community environments and advocacy networks.",
      items: [
        "Stakeholder sensitization & local working groups",
        "Sexual violence prevention & emergency response",
        "Behavior-change & psychosocial support groups",
        "Linkages to alternative livelihoods",
        "Institutional partnerships & capacity building",
      ],
    },
  ];

  const displayedProgrammes =
    selectedProgramme === "all"
      ? programmesData
      : programmesData.filter((p) => p.id === selectedProgramme);

  return (
    <div className="wam-programmes">

      {/* 1. PAGE HERO HEADER */}
      <section className="programmes-hero">
        <div className="container programmes-hero-inner">
          <span className="programmes-eyebrow">Our Interventions</span>
          <h1 className="programmes-hero-title">WAM Core Programmes & Services</h1>
          <p className="programmes-hero-lead">
            We design and execute evidence-based interventions tailored for children, youth, women, and
            vulnerable populations across Kenya.
          </p>
        </div>
      </section>

      {/* 2. PROGRAMME FILTERING CONTROL */}
      <section className="filter-bar">
        <div className="container filter-bar-inner">
          <span className="filter-label">Filter Initiative:</span>
          <div className="filter-buttons" role="tablist" aria-label="Filter programmes">
            <button
              role="tab"
              aria-selected={selectedProgramme === "all"}
              onClick={() => setSelectedProgramme("all")}
              className={`filter-btn ${selectedProgramme === "all" ? "filter-btn--active" : ""}`}
            >
              All Programmes
            </button>
            {programmesData.map((p) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={selectedProgramme === p.id}
                onClick={() => setSelectedProgramme(p.id)}
                className={`filter-btn ${selectedProgramme === p.id ? "filter-btn--active" : ""}`}
              >
                {p.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROGRAMMES DETAILED GRID */}
      <section className="programmes-list">
        <div className="container">
          <div className="programmes-grid">
            {displayedProgrammes.map((p) => (
              <div key={p.id} id={p.id} className="programme-card">
                <div className="programme-card-head">
                  <div>
                    <span className={`programme-audience-badge programme-audience-badge--${p.accent}`}>
                      Target: {p.targetAudience}
                    </span>
                    <h2 className="programme-title">{p.title}</h2>
                    <h4 className="programme-subtitle">{p.subtitle}</h4>
                  </div>
                </div>

                <p className="programme-summary">{p.summary}</p>

                <div className="programme-focus-box">
                  <h4>Key Focus & Components:</h4>
                  <div className="programme-key-areas">
                    {p.keyAreas.map((area, idx) => (
                      <div key={idx} className="programme-key-area">
                        <span className={`programme-key-area-bullet programme-key-area-bullet--${p.accent}`}>•</span> {area}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="programme-footer">
                  <span className="programme-goal">
                    <strong>Goal:</strong> {p.impactFocus}
                  </span>
                  <Link to="/contact" className="programme-cta">
                    Partner on {p.title} &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THREE-PILLAR SERVICES MATRIX */}
      <section className="service-matrix">
        <div className="container">
          <div className="service-matrix-header">
            <h2>Integrated Service Delivery Pathways</h2>
            <p>How WAM connects communities to health, psychosocial, and legal support</p>
          </div>

          <div className="service-matrix-grid">
            {serviceCategories.map((sec, i) => (
              <div key={i} className="service-matrix-card">
                <h3>{sec.title}</h3>
                <p>{sec.description}</p>
                <ul>
                  {sec.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="programmes-cta">
        <div className="container container--cta">
          <h2>Support Our Community Work</h2>
          <p>
            Help us expand MLINDE, MENTOR, and WELLNESS to reach more children, youth, and families across
            Nairobi, Machakos, Kitui, and Makueni.
          </p>
          <div className="programmes-cta-actions">
            <Link to="/contact" className="btn btn-primary">Get Involved</Link>
            <Link to="/contact" className="btn btn-outline">Contact Programme Directors</Link>
          </div>
        </div>
      </section>

    </div>
  );
}