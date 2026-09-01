import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Programmes.css";

// Relative path: move up from src/pages to src/assets
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
      image: wamo12,
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
      image: wamo13,
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

  const coreValues = [
    { name: "Professionalism", desc: "We uphold high standards of excellence, competence, and accountability in everything we do." },
    { name: "Loyalty", desc: "We remain committed to the people, communities, partners, and purpose we serve." },
    { name: "Integrity", desc: "We act with honesty, transparency, responsibility, and ethical conduct." },
    { name: "Service to Humanity", desc: "We place people and communities at the heart of our work." },
    { name: "Empathy", desc: "We listen, understand, respect, and respond to people's experiences with compassion." },
    { name: "Confidentiality", desc: "We protect the dignity, privacy, and trust of the people we serve." }
  ];

  const guidingPrinciples = [
    { title: "Innovation & Creativity", desc: "Promoting innovative thinking and continuous learning to develop locally appropriate solutions." },
    { title: "Equity & Quality", desc: "Ensuring fair access to wellness services while upholding the highest standards of safety and care." },
    { title: "Coordination & Networking", desc: "Building strong multi-stakeholder partnerships to maximize collective community impact." },
    { title: "Openness & Feedback", desc: "Valuing transparent engagement and using community feedback to continually improve intervention quality." },
    { title: "Supporting Local Initiatives", desc: "Strengthening local capacity and prioritizing community ownership for long-term sustainability." }
  ];

  const displayedProgrammes =
    selectedProgramme === "all"
      ? programmesData
      : programmesData.filter((p) => p.id === selectedProgramme);

  return (
    <div className="wam-programmes">

      {/* 1. HERO SECTION */}
      <section className="programmes-hero">
        <div className="programmes-hero-bg-wrapper">
          <img src={wamo5} alt="WAM Interventions Cover" className="programmes-hero-bg" />
          <div className="programmes-hero-overlay"></div>
        </div>
        <div className="container programmes-hero-inner">
          <span className="programmes-eyebrow">Wellness Approach Mentors (WAM)</span>
          <h1 className="programmes-hero-title">Empowering Communities, Transforming Lives</h1>
          <p className="programmes-hero-lead">
            At WAM, we believe lasting development begins with healthy, empowered, and resilient people. We work alongside individuals, families, young people, and communities to unlock local potential, strengthen resilience, and build sustainable futures.
          </p>
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

      {/* 3. CORE VALUES & GUIDING PRINCIPLES */}
      <section className="foundations-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Organizational Foundations</h2>
            <p className="section-subtitle">Guiding principles and core values that drive our mission forward</p>
          </div>

          <div className="foundations-grid">
            {/* Core Values */}
            <div className="foundations-column">
              <h3 className="column-title">Six Core Values</h3>
              <div className="values-list">
                {coreValues.map((val, idx) => (
                  <div key={idx} className="value-item">
                    <strong>{val.name}</strong>
                    <span>{val.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Guiding Principles */}
            <div className="foundations-column">
              <h3 className="column-title">Guiding Principles</h3>
              <div className="principles-list">
                {guidingPrinciples.map((prin, idx) => (
                  <div key={idx} className="principle-item">
                    <strong>{prin.title}</strong>
                    <p>{prin.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROGRAMME FILTER BAR */}
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

      {/* 5. PROGRAMMES GRID */}
      <section className="programmes-list">
        <div className="container">
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
                      {p.keyAreas.map((area, idx) => (
                        <div key={idx} className="programme-key-area">
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

      {/* 6. SERVICES MATRIX */}
      <section className="service-matrix">
        <div className="container">
          <div className="service-matrix-header">
            <h2 className="service-matrix-title">Integrated Service Delivery Pathways</h2>
            <p className="service-matrix-subtitle">
              How WAM connects communities to health, psychosocial, and legal support
            </p>
          </div>

          <div className="service-matrix-grid">
            {serviceCategories.map((sec, i) => (
              <div key={i} className="service-matrix-card">
                <h3 className="service-card-title">{sec.title}</h3>
                <p className="service-card-desc">{sec.description}</p>
                <ul className="service-checklist">
                  {sec.items.map((item, idx) => (
                    <li key={idx} className="service-checklist-item">
                      <span className="service-checklist-icon">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
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