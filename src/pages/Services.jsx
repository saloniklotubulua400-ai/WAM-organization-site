import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Detailed Categorized Services Data
  const serviceCategories = [
    {
      id: "biomedical",
      categoryName: "Biomedical & Clinical Linkages",
      accent: "biomedical",
      description: "Direct clinical care, diagnostic screening, and direct healthcare referral pathways.",
      services: [
        {
          title: "HIV Testing & Counselling (HTC)",
          desc: "Voluntary, confidential, and client-centered HIV testing, pre/post-test counselling, and direct linkage to care.",
        },
        {
          title: "STI Screening & Treatment Linkage",
          desc: "Symptomatic screening for sexually transmitted infections and direct referral to friendly healthcare facilities.",
        },
        {
          title: "PrEP & PEP Referrals",
          desc: "Sensitization and clinical referral for Pre-Exposure Prophylaxis (PrEP) and Post-Exposure Prophylaxis (PEP).",
        },
        {
          title: "Alcohol & Substance Use Screening",
          desc: "Routine screening, brief intervention, and referral for treatment (SBIRT) for individuals struggling with substance dependency.",
        },
        {
          title: "Reproductive Health Services",
          desc: "Family planning counselling, adolescent-friendly reproductive health education, and maternal care linkages.",
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
          title: "Individual & Group Counselling",
          desc: "Professional mental health support, trauma-informed therapy, and structured group support for young people and women.",
        },
        {
          title: "Peer Education & Mentorship",
          desc: "Peer-led risk-reduction sessions, life-skills training, and mentorship clubs under the MLINDE and MENTOR programmes.",
        },
        {
          title: "Substance Use Prevention Forums",
          desc: "Community psychoeducation and youth awareness sessions targeted at preventing drug abuse and addiction.",
        },
        {
          title: "Psychosocial Support Groups (PSSG)",
          desc: "Safe spaces for survivors of gender-based violence, people living with HIV, and vulnerable adolescents.",
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
          title: "GBV Prevention & Emergency Response",
          desc: "Community safety mapping, post-violence clinical referrals, legal aid linkages, and emergency safe-house coordination.",
        },
        {
          title: "Rights Advocacy & Legal Literacy",
          desc: "Sensitizing communities, youth, and children on human rights, gender equality, and legal protection systems.",
        },
        {
          title: "Stakeholder & System Engagement",
          desc: "Collaborating with local administration, health departments, and civil society to strengthen social safety nets.",
        },
        {
          title: "Economic Empowerment Linkages",
          desc: "Connecting vulnerable women and out-of-school youth to skill-building opportunities and micro-livelihood initiatives.",
        },
      ],
    },
  ];

  // Referral Pathway Steps
  const referralSteps = [
    { step: "01", title: "Identification & Outreach", desc: "Community Health Volunteers (CHVs) and peer educators identify individuals needing health or psychosocial support." },
    { step: "02", title: "Screening & Counselling", desc: "Initial risk assessments, confidential counselling, and service mapping conducted by WAM staff." },
    { step: "03", title: "Direct Referral", desc: "Issuance of official referral vouchers to partner health facilities, safe spaces, or legal aid centers." },
    { step: "04", title: "Follow-up & Retention", desc: "Case management and continuous follow-up to ensure complete care loop and beneficiary well-being." },
  ];

  const filteredCategories =
    activeCategory === "all"
      ? serviceCategories
      : serviceCategories.filter((cat) => cat.id === activeCategory);

  return (
    <div className="wam-services">

      {/* 1. HERO HEADER */}
      <section className="services-hero">
        <div className="container services-hero-inner">
          <span className="services-eyebrow">Integrated Support Framework</span>
          <h1 className="services-hero-title">Our Services & Intervention Pathways</h1>
          <p className="services-hero-lead">
            WAM delivers holistic biomedical, behavioral, and structural support to build healthier, safer,
            and resilient communities.
          </p>
        </div>
      </section>

      {/* 2. CATEGORY FILTER BAR */}
      <section className="filter-bar">
        <div className="container filter-bar-inner">
          <span className="filter-label">Filter Service Category:</span>
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
      </section>

      {/* 3. DETAILED SERVICES LIST */}
      <section className="services-list">
        <div className="container">
          <div className="category-blocks">
            {filteredCategories.map((cat) => (
              <div key={cat.id}>
                {/* Section Header */}
                <div className={`category-header category-header--${cat.accent}`}>
                  <span className={`category-label category-label--${cat.accent}`}>Service Category</span>
                  <h2 className="category-title">{cat.categoryName}</h2>
                  <p className="category-desc">{cat.description}</p>
                </div>

                {/* Services Cards Grid */}
                <div className="services-grid">
                  {cat.services.map((service, idx) => (
                    <div key={idx} className="service-card">
                      <div>
                        <h3 className="service-card-title">{service.title}</h3>
                        <p className="service-card-desc">{service.desc}</p>
                      </div>
                      <div className="service-card-footer">
                        <Link to="/contact" className="service-card-link">Access or Refer &rarr;</Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REFERRAL & CASE MANAGEMENT PATHWAY */}
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
            {referralSteps.map((s) => (
              <div key={s.step} className="referral-card">
                <span className="referral-step-number">{s.step}</span>
                <h4 className="referral-step-title">{s.title}</h4>
                <p className="referral-step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION / REFERRAL FORM DIRECTIVE */}
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

    </div>
  );
}