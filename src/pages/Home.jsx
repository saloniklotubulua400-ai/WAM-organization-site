import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// Correct relative path: move up from src/pages to src/assets
import wamo1 from "../assets/wamo1.png";
import wamo2 from "../assets/wamo2.png";
import wamo3 from "../assets/wamo3.png";
import wamo4 from "../assets/wamo4.png";
import wamo5 from "../assets/wamo5.png";
import wamo6 from "../assets/wamo6.png";
import wamo7 from "../assets/wamo7.png";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const [activeServiceTab, setActiveServiceTab] = useState("behavioural");
  const [openFaq, setOpenFaq] = useState(null);

  // Pillars mapped with wamo1 to wamo4
  const pillars = [
    {
      number: "01",
      title: "Healthcare & Linkages",
      desc: "Improving access to appropriate health information, services, referrals, and support.",
      image: wamo1,
    },
    {
      number: "02",
      title: "Children & Youth Psychosocial Support",
      desc: "Supporting children and young people through counselling, mentorship, life-skills, and psychosocial services.",
      image: wamo2,
    },
    {
      number: "03",
      title: "Personal & Community Development",
      desc: "Building individual capacity, knowledge, skills, and resilience while strengthening local communities.",
      image: wamo3,
    },
    {
      number: "04",
      title: "Positive Societal Systems",
      desc: "Working with communities and stakeholders to promote supportive, responsive, and sustainable systems.",
      image: wamo4,
    },
  ];

  // Core programmes mapped with wamo5, wamo6, wamo7
  const programmes = [
    {
      id: "mlinde",
      title: "MLINDE",
      tagline: "Protecting Children. Building Healthier Futures.",
      target: "Children aged 8–17 years",
      category: "children",
      desc: "Focuses on child rights, protection, health, life skills, and psychosocial wellbeing.",
      points: ["Child-rights awareness", "Prevention of child abuse", "Children's health clubs", "Mental health & mentorship"],
      image: wamo5,
      link: "/programmes#mlinde",
    },
    {
      id: "mentor",
      title: "MENTOR",
      tagline: "Empowering Young People Through Knowledge, Skills and Health",
      target: "Youth aged 14–35 years",
      category: "youth",
      desc: "Supports youth capacity building, reproductive health, HIV prevention, and access to health services.",
      points: ["Life-skills training", "Sexual & Reproductive Health", "HIV testing & counselling", "Community mobilization"],
      image: wamo6,
      link: "/programmes#mentor",
    },
    {
      id: "wellness",
      title: "WELLNESS",
      tagline: "Supporting Vulnerable Communities to Thrive",
      target: "Vulnerable groups, girls & women",
      category: "community",
      desc: "Interventions addressing substance use, psychosocial wellbeing, GBV, and human rights.",
      points: ["Substance-use prevention", "GBV prevention & response", "Support groups & peer education", "Human-rights awareness"],
      image: wamo7,
      link: "/programmes#wellness",
    },
  ];

  const filteredProgrammes =
    activeTab === "all" ? programmes : programmes.filter((p) => p.category === activeTab);

  const services = {
    behavioural: {
      title: "Behavioural & Community Services",
      desc: "Community-based services promoting healthy behaviours and resilience.",
      items: [
        "Community mobilization & outreach",
        "Peer counselling & education",
        "Risk-reduction counselling",
        "Substance-use prevention forums",
        "Community advocacy & dialogue",
      ],
    },
    biomedical: {
      title: "Biomedical & Health Services",
      desc: "Supporting communities to access essential health pathways.",
      items: [
        "HIV testing, counselling & STI screening",
        "HIV care & treatment linkages",
        "Sexual & Reproductive Health (SRH) services",
        "Family planning, PEP & PrEP access",
        "Substance-use screening & referrals",
      ],
    },
    structural: {
      title: "Structural & Systems Services",
      desc: "Strengthening supportive environments across community levels.",
      items: [
        "Stakeholder sensitization & technical groups",
        "Sexual-violence prevention & response",
        "Psychosocial support groups",
        "Linkages to alternative livelihoods",
        "Community & institutional partnerships",
      ],
    },
  };

  const impactStats = [
    { number: "15,000+", label: "Youth & Children Reached" },
    { number: "4", label: "Counties of Operation" },
    { number: "1,200+", label: "Referrals & Health Linkages" },
    { number: "50+", label: "Community Support Groups" },
  ];

  const resources = [
    {
      type: "Publication",
      title: "Community Psychosocial Support Toolkit",
      date: "August 2026",
      desc: "A framework for strengthening mental health interventions among vulnerable youth.",
    },
    {
      type: "Health Resource",
      title: "SRHR & Disease Prevention Guide",
      date: "June 2026",
      desc: "Comprehensive health education materials covering reproductive health and HIV prevention.",
    },
    {
      type: "Policy Brief",
      title: "Child Protection & Human Rights Report",
      date: "March 2026",
      desc: "Key insights on strengthening community-based referral mechanisms for child rights.",
    },
  ];

  const faqs = [
    {
      q: "Where does WAM operate?",
      a: "WAM is registered to operate across Kenya, with active community-based programmes in Nairobi City, Machakos, Kitui, and Makueni Counties.",
    },
    {
      q: "How can an individual or organization partner with WAM?",
      a: "We welcome partnerships with youth groups, FBOs, government bodies, local NGOs, and academic institutions. You can connect with us through our Get Involved or Contact page.",
    },
    {
      q: "Who is eligible for WAM's programmes?",
      a: "Our MLINDE programme focuses on children (ages 8–17), MENTOR targets youth (ages 14–35), and WELLNESS supports vulnerable groups including women, girls, and individuals seeking psychosocial or substance-use support.",
    },
  ];

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  return (
    <div className="wam-page">
      {/* HERO SECTION WITH WAMO1 IMAGE */}
    {/* HERO SECTION WITH INTEGRATED WAMO1 IMAGE */}
      <section className="hero">
        <div className="hero-bg-overlay"></div>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-inner">
              <span className="eyebrow">Wellness Approach Mentors (WAM)</span>
              <h1 className="hero-title">
                Transforming Lives Through <span className="text-highlight">Wellness Services</span>
              </h1>
              <p className="hero-lead">
                WAM is a Kenyan non-governmental organization working with children, youth, and vulnerable
                communities to promote holistic wellbeing and improve access to health, psychosocial, and
                community support.
              </p>
              <div className="hero-actions">
                <Link to="/about" className="btn btn-primary">Learn About Us &rarr;</Link>
                <Link to="/programmes" className="btn btn-secondary">Our Programmes</Link>
              </div>
            </div>

            <div className="hero-media-container">
              <div className="hero-image-wrapper">
                <img
                  src={wamo1}
                  alt="WAM mentors conducting a community wellbeing workshop"
                  className="hero-image"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to prevent broken image icon if path or load fails
                    e.target.onerror = null;
                    e.target.style.display = "none";
                  }}
                />
                <div className="hero-image-overlay"></div>
              </div>

              {/* Floating feature badge attached to the image frame */}
              <div className="hero-stat-badge">
                <span className="badge-icon">🌱</span>
                <div className="badge-text">
                  <strong>SDG 3 Aligned</strong>
                  <small>Good Health & Wellbeing</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE WITH WAMO2 IMAGE */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-copy">
              <span className="eyebrow">Who We Are</span>
              <h2 className="section-heading">Building Healthier and More Resilient Communities</h2>
              <p>
                Registered in Kenya on 30 April 2020, WAM works to support individuals and communities in
                achieving greater wellbeing. Our work is anchored on <strong>SDG 3: Good Health and Well-being</strong>.
              </p>
              <div className="about-inline-image">
                <img 
                  src={wamo2} 
                  alt="WAM community outreach initiative" 
                  className="rounded-img"
                />
              </div>
              <p>
                We believe meaningful change happens when individuals, families, communities, institutions,
                and government work together.
              </p>
              <Link to="/about" className="link">Read More About WAM &rarr;</Link>
            </div>

            <div className="mission-vision">
              <div className="statement-card">
                <h3>OUR MISSION</h3>
                <p>&ldquo;Transforming lives through wellness services.&rdquo;</p>
              </div>
              <div className="statement-card statement-card--accent">
                <h3>OUR VISION</h3>
                <p>
                  &ldquo;To actively support in transforming human lives in achieving wellness of physical,
                  social, mental, psychological, emotional, economical and spiritual wellbeing.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR PILLARS WITH IMAGE THUMBNAILS */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-heading">Our Four Pillars</h2>
            <p className="section-intro">The foundation of our holistic approach to community wellbeing</p>
          </div>
          <div className="grid grid--min-md">
            {pillars.map((pillar) => (
              <div key={pillar.number} className="card card--raised pillar-card">
                <div className="pillar-image-container">
                  <img src={pillar.image} alt={pillar.title} className="pillar-img" />
                  <span className="pillar-number">{pillar.number}</span>
                </div>
                <div className="pillar-content">
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE PROGRAMMES WITH FEATURED IMAGES */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-heading">Our Core Programmes</h2>
            <p className="section-intro">Targeted initiatives designed for maximum social impact</p>

            <div className="tab-row" role="tablist" aria-label="Filter programmes">
              {["all", "children", "youth", "community"].map((tab) => (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pill-tab ${activeTab === tab ? "pill-tab--active" : ""}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid--min-xl grid--gap-lg">
            {filteredProgrammes.map((p) => (
              <div key={p.id} className="card programme-card">
                <div className="programme-image-wrapper">
                  <img src={p.image} alt={p.title} className="programme-img" />
                  <span className="programme-badge">{p.target}</span>
                </div>
                <div className="programme-body">
                  <h3 className="programme-title">{p.title}</h3>
                  <p className="programme-tagline">{p.tagline}</p>
                  <p className="programme-desc">{p.desc}</p>
                  <ul className="programme-points">
                    {p.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                  <Link to={p.link} className="link">Learn More &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-heading">Our Comprehensive Services</h2>
          </div>

          <div className="service-tab-row" role="tablist" aria-label="Service categories">
            {Object.keys(services).map((key) => (
              <button
                key={key}
                role="tab"
                aria-selected={activeServiceTab === key}
                onClick={() => setActiveServiceTab(key)}
                className={`tab-btn ${activeServiceTab === key ? "tab-btn--active" : ""}`}
              >
                {services[key].title}
              </button>
            ))}
          </div>

          <div className="card--raised service-panel">
            <h3>{services[activeServiceTab].title}</h3>
            <p>{services[activeServiceTab].desc}</p>
            <hr className="service-divider" />
            <div className="grid grid--min-sm service-items-grid">
              {services[activeServiceTab].items.map((item, idx) => (
                <div key={idx} className="service-item">
                  <span className="service-item-check">✓</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT METRICS */}
      <section className="section section--navy">
        <div className="container">
          <div className="section-header">
            <h2 className="section-heading section-heading--onDark">Measuring Our Impact</h2>
            <p className="section-intro">Creating meaningful, sustainable change across local communities</p>
          </div>
          <div className="grid grid--min-sm stats-grid">
            {impactStats.map((stat, idx) => (
              <div key={idx} className="stat-item">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORIES OF CHANGE WITH PORTRAIT AVATAR */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Stories of Change</span>
            <h2 className="section-heading">Every Life Has a Story</h2>
            <p className="section-intro">
              Behind every statistic is a person, family, or community experiencing positive transformation.
            </p>
          </div>

          <div className="story-quote story-quote--with-avatar">
            <div className="avatar-wrapper">
              <img 
                src={wamo3} 
                alt="Beneficiary portrait" 
                className="story-avatar"
              />
            </div>
            <div className="story-content">
              <h3>Empowering Hope Through Mentorship & Psychosocial Support</h3>
              <blockquote>
                &ldquo;Through WAM's community support groups and life-skills sessions, I gained the guidance
                and confidence needed to overcome personal challenges and access local health services.&rdquo;
              </blockquote>
              <p className="story-quote-attribution">— Beneficiary, MENTOR Programme (Anonymized)</p>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCE CENTRE */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-heading">Resource Centre & Publications</h2>
            <p className="section-intro">Access organizational reports, health education tools, and policy briefs</p>
          </div>

          <div className="grid grid--min-lg">
            {resources.map((res, i) => (
              <div key={i} className="card">
                <span className="resource-type">{res.type}</span>
                <h3 className="resource-title">{res.title}</h3>
                <p className="resource-date">{res.date}</p>
                <p className="resource-desc">{res.desc}</p>
                <Link to="/resources" className="link link--small">Read Resource &rarr;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container container--narrow">
          <div className="section-header">
            <h2 className="section-heading">Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  onClick={() => toggleFaq(index)}
                  className="faq-question"
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon">{openFaq === index ? "−" : "+"}</span>
                </button>
                {openFaq === index && <div className="faq-answer">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAFEGUARDING NOTICE */}
      <section className="section section--compact section--soft safeguard-notice">
        <div className="container safeguard-notice-inner">
          <h4>Safeguarding & Confidentiality Commitment</h4>
          <p>
            WAM is committed to treating every individual with dignity, empathy, confidentiality, and
            professionalism. We enforce strict safeguarding policies and reporting mechanisms to protect
            children, youth, and vulnerable populations.
          </p>
        </div>
      </section>

      {/* GET INVOLVED CTA */}
      <section className="section section--navy-dark">
        <div className="container cta-inner">
          <h2 className="cta-title">Be Part of the Change</h2>
          <p className="cta-lead">
            Whether you want to partner, volunteer, or support our community initiatives, your involvement
            makes a lasting difference.
          </p>
          <div className="hero-actions cta-actions">
            <Link to="/contact" className="btn btn-highlight">Partner With Us</Link>
            <Link to="/contact" className="btn btn-accent">Volunteer</Link>
          </div>
        </div>
      </section>
    </div>
  );
}