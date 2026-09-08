import React, { useState, useId } from "react";
import { Link } from "react-router-dom";
import "./About.css";

import wamo11Img from "../assets/wamo11.png";

export default function About() {
  const [activeTab, setActiveTab] = useState("board");
  const boardTabId = useId();
  const opsTabId = useId();
  const boardPanelId = useId();
  const opsPanelId = useId();

  const pillars = [
    { num: "01", title: "Healthcare & Linkages", desc: "Improving access to health information, direct services, referrals, and care pathways across local communities." },
    { num: "02", title: "Children & Youth Support", desc: "Comprehensive counselling, mentorship, life-skills training, and psychosocial services for young people." },
    { num: "03", title: "Personal & Community Development", desc: "Empowering individuals through capacity development, skill-building, and localized resilience initiatives." },
    { num: "04", title: "Positive Societal Systems", desc: "Partnering with stakeholders and institutions to build responsive, equitable, and sustainable community systems." }
  ];

  const values = [
    { title: "Dignity & Respect", desc: "Every individual deserves unconditional dignity, care, and respectful engagement." },
    { title: "Confidentiality", desc: "Protecting beneficiary rights, privacy, and personal health narratives in all operations." },
    { title: "Inclusion & Equality", desc: "Ensuring equal access to health and psychosocial resources for vulnerable populations." },
    { title: "Accountability", desc: "Maintaining transparent monitoring, routine data quality, and institutional reporting." },
    { title: "Partnership & Collaboration", desc: "Working hand-in-hand with communities, government agencies, and civil society." }
  ];

  const leadershipData = {
    board: [
      { id: "board-1", role: "Board of Directors", count: "5 Members", desc: "Provides high-level technical oversight, fiduciary governance, policy direction, and institutional accountability." },
      { id: "board-2", role: "Executive Leadership", count: "Directorate", desc: "Drives organizational strategy, donor relations, overall management, and programmatic expansion." }
    ],
    operations: [
      { id: "ops-1", role: "Programmes & Coordination", desc: "Oversees MLINDE, MENTOR, and WELLNESS field implementations." },
      { id: "ops-2", role: "Finance & Operations", desc: "Manages financial compliance, reporting, human resources, and procurement." },
      { id: "ops-3", role: "Community Field Network", desc: "Dedicated team of community health volunteers, peer educators, and field officers." }
    ]
  };

  const activeLeadership = activeTab === "board" ? leadershipData.board : leadershipData.operations;

  return (
    <article className="wam-about">
      {/* 1. HERO SECTION */}
      <header className="about-hero">
        <div className="container">
          <div className="grid grid--min-lg grid--gap-lg" style={{ alignItems: "center" }}>
            <div className="about-hero-inner">
              <span className="about-badge">About WAM</span>
              <h1 className="about-hero-title">Empowering Communities. Promoting Holistic Wellbeing.</h1>
              <p className="about-hero-lead">
                Wellness Approach Mentors (WAM) is a Kenyan NGO dedicated to supporting children, youth, and
                vulnerable populations across health, psychosocial, and structural dimensions. WAM is committed to ensuring that all people have fair and meaningful opportunities to access
                wellness services and participate in development initiatives, regardless of their circumstances.
                We promote equality, reduce barriers to inclusion, and uphold high standards of quality,
                effectiveness, safety, and accountability in all our programmes and services.
              </p>
            </div>
            <div className="about-hero-image-wrapper">
              <img
                src={wamo11Img}
                alt="Community members participating in a WAM health and wellness workshop"
                className="about-hero-image"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </header>

      {/* 2. REGISTRATION & SDG 3 BANNER */}
      <section className="reg-banner" aria-label="Registration and Standards">
        <div className="container reg-banner-inner">
          <div>
            <strong>Official Registration:</strong>
            <span>Registered NGO in Kenya (30 April 2020)</span>
          </div>
          <div>
            <strong className="reg-strong--accent">Global Strategic Alignment:</strong>
            <span>UN Sustainable Development Goal 3 (Good Health & Well-being)</span>
          </div>
        </div>
      </section>

      {/* 3. WHO WE ARE + MISSION / VISION */}
      <section className="section" aria-labelledby="who-we-are-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Who We Are</span>
            <h2 id="who-we-are-heading" className="section-heading">A Holistic Approach to Community Health & Resilience</h2>
          </div>
          <div className="grid grid--min-lg grid--gap-lg">
            <div className="about-copy">
              <p>
                Wellness Approach Mentors (WAM) works at the intersection of public health, human rights, and
                social protection. Our multi-dimensional model addresses physical, social, mental,
                psychological, emotional, economic, and spiritual wellbeing.
              </p>
              <p>
                By partnering with government authorities, healthcare networks, civil society, and local
                leaders, WAM builds sustainable referral pathways and community-driven solutions.
              </p>
            </div>

            <div className="mission-vision">
              <div className="statement-card">
                <h3>OUR VISION</h3>
                <p>“Transformed, Healthy and Resilient Communities.”</p>
              </div>

              <div className="statement-card statement-card--accent">
                <h3>OUR MISSION</h3>
                <p>
                  “To Enhance Equitable Access to Quality Wellness Services for All, Contributing to Sustainable Health Outcomes and Healthier Communities.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STRATEGIC PILLARS */}
      <section className="section section--alt" aria-labelledby="pillars-heading">
        <div className="container">
          <div className="section-header">
            <h2 id="pillars-heading" className="section-heading">Our Strategic Pillars</h2>
            <p className="section-intro">The framework driving our community interventions</p>
          </div>

          <div className="grid grid--min-sm">
            {pillars.map((p) => (
              <div key={p.num} className="pillar-card">
                <span className="pillar-number">{p.num}</span>
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CORE VALUES */}
      <section className="section" aria-labelledby="values-heading">
        <div className="container">
          <div className="section-header">
            <h2 id="values-heading" className="section-heading">Community Engagement</h2>
            <p className="section-intro">What Guides Us</p>
          </div>

          <div className="grid grid--min-xs grid--gap-sm">
            {values.map((v) => (
              <div key={v.title} className="value-card">
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GOVERNANCE & ORGANIZATIONAL STRUCTURE */}
      <section className="section section--dark" aria-labelledby="governance-heading">
        <div className="container">
          <div className="section-header">
            <h2 id="governance-heading" className="section-heading section-heading--onDark">
              Governance & Organizational Structure
            </h2>
            <p className="section-intro section-intro--onDark">Technical leadership and operational framework</p>
          </div>

          <div className="toggle-row" role="tablist" aria-label="Governance view options">
            <button
              id={boardTabId}
              type="button"
              role="tab"
              aria-selected={activeTab === "board"}
              aria-controls={boardPanelId}
              onClick={() => setActiveTab("board")}
              className={`toggle-btn ${activeTab === "board" ? "toggle-btn--active" : ""}`}
            >
              Board & Leadership
            </button>
            <button
              id={opsTabId}
              type="button"
              role="tab"
              aria-selected={activeTab === "ops"}
              aria-controls={opsPanelId}
              onClick={() => setActiveTab("ops")}
              className={`toggle-btn ${activeTab === "ops" ? "toggle-btn--active" : ""}`}
            >
              Programmes & Operations
            </button>
          </div>

          <div
            id={activeTab === "board" ? boardPanelId : opsPanelId}
            role="tabpanel"
            aria-labelledby={activeTab === "board" ? boardTabId : opsTabId}
            className="gov-list"
          >
            {activeLeadership.map((item) => (
              <div key={item.id} className="gov-card">
                <div className="gov-card-header">
                  <h3>{item.role}</h3>
                  {item.count && <span className="gov-count">{item.count}</span>}
                </div>
                <p className="gov-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SAFEGUARDING & ETHICAL COMMITMENT */}
      <section className="section section--compact section--soft section--center" aria-labelledby="safeguarding-heading">
        <div className="container container--narrow">
          <h2 id="safeguarding-heading" className="safeguard-title">Safeguarding & Confidentiality Commitment</h2>
          <p className="safeguard-text">
            WAM strictly adheres to safeguarding protocols designed to protect children, youth, and
            vulnerable adults. We guarantee confidentiality, non-discrimination, and ethical standards across
            all health screening, counselling, and referral activities.
          </p>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="section section--center" aria-labelledby="cta-heading">
        <div className="container container--cta">
          <h2 id="cta-heading" className="section-heading">Collaborate With WAM</h2>
          <p className="section-intro section-intro--cta">
            We welcome institutional partnerships, donors, volunteers, and community stakeholders aligned
            with our mission.
          </p>
          <div className="cta-row">
            <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
            <Link to="/programmes" className="btn btn-secondary">Explore Programmes</Link>
          </div>
        </div>
      </section>
    </article>
  );
}