import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Programmes.css";

// Relative paths to assets (Ensure filenames match exact case on Linux build servers)
import wamo5 from "../assets/wamo5.png";
import wamo11 from "../assets/wamo11.png";
import wamo12 from "../assets/wamo12.png";
import wamo13 from "../assets/wamo13.png";

export default function Programmes() {
  const [selectedProgramme, setSelectedProgramme] = useState("all");

  const programmesData = [
    {
      id: "mlinde",
      title: "MLINDE",
      subtitle: "Protecting Children. Building Healthier Futures.",
      targetAudience: "Children aged 8–17 years",
      accent: "mlinde",
      image: wamo11,
      summary:
        "MLINDE puts children's rights, safety, and wellbeing first — combining early health interventions, life-skills education, and psychosocial support to help every child grow up protected and thriving.",
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
      image: wamo12,
      summary:
        "MENTOR equips young people with the knowledge, skills, and health services they need to make informed choices — from life-skills training to direct HIV testing, counselling, and referral pathways.",
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
      image: wamo13,
      summary:
        "WELLNESS walks alongside vulnerable community members through counselling, peer support, and advocacy — addressing substance use, gender-based violence, and mental health with compassion and consistency.",
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
      {/* 1. HERO SECTION */}
      <section className="programmes-hero programmes-hero--split">
        <div className="container">
          <div className="programmes-hero-grid">
            <div className="programmes-hero-content">
              <span className="programmes-eyebrow">Wellness Approach Mentors (WAM)</span>
              <h1 className="programmes-hero-title">Empowering Communities, Transforming Lives</h1>
              <p className="programmes-hero-lead">
                Lasting development starts with healthy, empowered, resilient people. Our programmes work alongside individuals, families, young people, and communities to unlock local potential and build futures that last.
              </p>
            </div>
            <div className="programmes-hero-image-wrapper">
              <img src={wamo5} alt="WAM Interventions Cover" className="programmes-hero-image" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISION & MISSION BAR */}
      <section className="vision-mission-section">
        <div className="container vision-mission-grid">
          <div className="vm-card">
            <h3>Our Vision</h3>
            <p>“Transformed, Healthy and Resilient Communities.”</p>
          </div>
          <div className="vm-card">
            <h3>Our Mission</h3>
            <p>“To Enhance Equitable Access to Quality Wellness Services for All, Contributing to Sustainable Health Outcomes and Healthier Communities.”</p>
          </div>
        </div>
      </section>

      {/* 3. PROGRAMME FILTER BAR */}
      <section className="filter-bar">
        <div className="container filter-bar-inner">
          <span className="filter-label">Browse by Programme:</span>
          <div className="filter-buttons" role="tablist" aria-label="Filter programmes">
            <button
              type="button"
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
                type="button"
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

      {/* 4. PROGRAMMES GRID */}
      <section className="programmes-list">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Core Programmes</h2>
            <p className="section-subtitle">
              Three flagship interventions, each tailored to a different life stage — grounded in evidence, community partnership, and dignity.
            </p>
          </div>

          <div className="programmes-grid">
            {displayedProgrammes.map((p) => (
              <div key={p.id} id={p.id} className="programme-card">
                <div className="programme-image-wrapper">
                  <img
                    src={p.image}
                    alt={`${p.title} Programme Banner`}
                    className="programme-card-image"
                    loading="lazy"
                  />
                  <div className="programme-image-overlay"></div>
                  <span className={`programme-audience-badge programme-audience-badge--${p.accent}`}>
                    Target: {p.targetAudience}
                  </span>
                </div>

                <div className="programme-card-body">
                  <div className="programme-card-head">
                    <div>
                      <h2 className="programme-title">{p.title}</h2>
                      <h4 className="programme-subtitle">{p.subtitle}</h4>
                    </div>
                  </div>

                  <p className="programme-summary">{p.summary}</p>

                  <div className="programme-focus-box">
                    <h4 className="programme-focus-title">Key Focus &amp; Components:</h4>
                    <div className="programme-key-areas">
                      {p.keyAreas.map((area) => (
                        <div key={area} className="programme-key-area">
                          <span className="programme-key-area-check">✓</span> {area}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICES MATRIX */}
      <section className="service-matrix">
        <div className="container">
          <div className="service-matrix-header">
            <h2 className="service-matrix-title">Integrated Service Delivery Pathways</h2>
            <p className="service-matrix-subtitle">
              How WAM connects communities to health, psychosocial, and structural support — no wrong door, every pathway leads to care.
            </p>
          </div>

          <div className="service-matrix-grid">
            {serviceCategories.map((sec) => (
              <div key={sec.title} className="service-matrix-card">
                <h3 className="service-card-title">{sec.title}</h3>
                <p className="service-card-desc">{sec.description}</p>
                <ul className="service-checklist">
                  {sec.items.map((item) => (
                    <li key={item} className="service-checklist-item">
                      <span className="service-checklist-icon">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="programmes-cta">
        <div className="container container--cta">
          <h2 className="cta-heading">Partner With Us</h2>
          <p className="cta-lead">
            We welcome donors, development partners, government agencies, private sector organizations, and volunteers to join WAM in expanding access to wellness services across Nairobi, Machakos, Kitui, and Makueni.
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