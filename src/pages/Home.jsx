import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// Assets
import wamo1 from "../assets/wamo1.png";
import wamo2 from "../assets/wamo2.png";
import wamo3 from "../assets/wamo3.png";
import wamo4 from "../assets/wamo4.png";
import wamo5 from "../assets/wamo5.png";
import wamo6 from "../assets/wamo6.png";
import wamo7 from "../assets/wamo7.png";
import wamo14 from "../assets/wamo14.png";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const [activeServiceTab, setActiveServiceTab] = useState("behavioural");
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedProgramme, setSelectedProgramme] = useState(null);

  const coreValues = [
    {
      title: "Professionalism",
      desc: "We uphold high standards of excellence, competence, and accountability in everything we do.",
    },
    {
      title: "Loyalty",
      desc: "We remain committed to the people, communities, partners, and purpose we serve.",
    },
    {
      title: "Integrity",
      desc: "We act with honesty, transparency, responsibility, and ethical conduct.",
    },
    {
      title: "Service to Humanity",
      desc: "We place people and communities at the heart of our work.",
    },
    {
      title: "Empathy",
      desc: "We listen, understand, respect, and respond to people's experiences with compassion.",
    },
    {
      title: "Confidentiality",
      desc: "We protect the dignity, privacy, and trust of the people we serve.",
    },
  ];

  const guidingPrinciples = [
    {
      number: "A",
      title: "Encouraging Innovation and Creativity",
      desc: "WAM promotes innovative thinking, creativity, and continuous learning in addressing community challenges. We encourage individuals, communities, staff, and partners to develop new ideas, technologies, approaches, and locally appropriate solutions that improve effectiveness, sustainability, and impact.",
      image: wamo1,
    },
    {
      number: "B",
      title: "Prioritizing Equity, Equality and Quality",
      desc: "WAM is committed to ensuring that all people have fair and meaningful opportunities to access wellness services and participate in development initiatives, regardless of their circumstances. We promote equality, reduce barriers to inclusion, and uphold high standards of quality, safety, and accountability.",
      image: wamo2,
    },
    {
      number: "C",
      title: "Enhancing Coordination and Networking",
      desc: "WAM recognizes that sustainable community transformation requires collaboration. We build and strengthen partnerships with communities, government institutions, development partners, civil society, private sector actors, and academic institutions to share knowledge, resources, and expertise while maximizing collective impact.",
      image: wamo3,
    },
    {
      number: "D",
      title: "Openness and Accepting Feedback",
      desc: "WAM promotes openness, transparency, active listening, and constructive engagement. We value feedback from communities, beneficiaries, staff, partners, and other stakeholders to improve our programmes, strengthen accountability, and ensure our interventions remain relevant and responsive.",
      image: wamo4,
    },
    {
      number: "E",
      title: "Supporting Community Initiatives",
      desc: "WAM believes communities are key drivers of their own development. We support community-led initiatives by strengthening local capacity, mobilizing resources, providing mentorship and technical support, and prioritizing community ownership, participation, and locally driven change.",
      image: wamo14,
    },
  ];

  const programmes = [
    {
      id: "mlinde",
      title: "MLINDE",
      tagline: "Protecting Children. Building Healthier Futures.",
      target: "Children aged 8–17 years",
      category: "children",
      desc: "Focuses on child rights, protection, health, life skills, and psychosocial wellbeing.",
      points: [
        "Child-rights awareness",
        "Prevention of child abuse",
        "Children's health clubs",
        "Mental health & mentorship",
      ],
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
      points: [
        "Life-skills training",
        "Sexual & Reproductive Health",
        "HIV testing & counselling",
        "Community mobilization",
      ],
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
      points: [
        "Substance-use prevention",
        "GBV prevention & response",
        "Support groups & peer education",
        "Human-rights awareness",
      ],
      image: wamo7,
      link: "/programmes#wellness",
    },
  ];

  const filteredProgrammes =
    activeTab === "all"
      ? programmes
      : programmes.filter((p) => p.category === activeTab);

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
    { number: "2,500+", label: "Youth & Children Reached" },
    { number: "4", label: "Counties of Operation" },
    { number: "120+", label: "Referrals & Health Linkages" },
    { number: "24+", label: "Community Support Groups" },
  ];

  const faqs = [
    {
      q: "Where does WAM operate?",
      a: "WAM is registered to operate across Kenya, with active community-based programmes in Nairobi City, Machakos, Kitui, and Makueni Counties.",
    },
    {
      q: "How can an individual or organization partner with WAM?",
      a: "We welcome partnerships with donors, development partners, government agencies, private sector organizations, foundations, researchers, and volunteers. Connect with us through our Get Involved or Contact page.",
    },
    {
      q: "Who is eligible for WAM's programmes?",
      a: "Our MLINDE programme focuses on children (ages 8–17), MENTOR targets youth (ages 14–35), and WELLNESS supports vulnerable groups including women, girls, and individuals seeking psychosocial or substance-use support.",
    },
  ];

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  return (
    <div className="wam-page">
      {/* HERO SECTION */}
      <section className="hero hero--split">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="eyebrow">Wellness Approach Mentors (WAM)</span>
              <h1 className="hero-title">
                Building Healthier People &amp;{" "}
                <span className="text-highlight">Empowered Communities</span>
              </h1>
              <p className="hero-lead">
                At Wellness Approach Mentors (WAM), we believe that lasting development begins with healthy, empowered, and resilient people. We work alongside individuals, families, young people, and communities to unlock local potential and build sustainable futures.
              </p>
              <div className="hero-actions">
                <Link to="/contact" className="btn btn-primary">
                  Partner With Us &rarr;
                </Link>
                <Link to="/programmes" className="btn btn-secondary">
                  Our Programmes
                </Link>
              </div>
            </div>

            <div className="hero-media-wrapper">
              <div className="hero-image-card">
                <img
                  src={wamo14}
                  alt="WAM Mentorship in action"
                  className="hero-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOMEPAGE MESSAGE & PARTNERSHIP CALL */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-copy">
              <span className="eyebrow">Welcome to WAM</span>
              <h2 className="section-heading">
                Working Alongside Our Communities
              </h2>
              <p>
                WAM works alongside individuals, families, young people, and communities to identify challenges, unlock local potential, strengthen resilience, and develop practical solutions that create lasting impact. We recognize that communities possess valuable knowledge, resources, creativity, and experience. Our role is to listen, mentor, empower, connect, and support communities to lead meaningful change and build sustainable futures.
              </p>
              <div className="about-inline-image">
                <img
                  src={wamo2}
                  alt="WAM community outreach initiative"
                  className="rounded-img"
                />
              </div>
              <p>
                We welcome donors, development partners, government agencies, private sector organizations, foundations, researchers, volunteers, and other stakeholders to partner with us in advancing this vision. Your support and investment can expand access to wellness services, strengthen community-led initiatives, promote sustainable livelihoods, support vulnerable populations, and foster innovative solutions to emerging community needs.
              </p>
              <p>
                At WAM, we believe meaningful impact is achieved not by doing things for communities, but by working with them. Together, we can transform challenges into opportunities, local strengths into lasting solutions, and individual potential into community-wide transformation.
              </p>
              <Link to="/about" className="link">
                Read More About WAM &rarr;
              </Link>
            </div>

            <div className="mission-vision">
              <div className="statement-card interactive-card">
                <h3>WAM VISION</h3>
                <p>&ldquo;Transformed, Healthy and Resilient Communities.&rdquo;</p>
              </div>
              <div className="statement-card statement-card--accent interactive-card">
                <h3>WAM MISSION</h3>
                <p>
                  &ldquo;To Enhance Equitable Access to Quality Wellness Services for All, Contributing to Sustainable Health Outcomes and Healthier Communities.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Foundation</span>
            <h2 className="section-heading">WAM Core Values</h2>
            <p className="section-intro">
              Our work is guided by six core values that shape every interaction and project.
            </p>
          </div>
          <div className="grid grid--min-sm grid--gap-sm">
            {coreValues.map((val, idx) => (
              <div key={idx} className="card value-card interactive-card">
                <h3 className="value-title">
                  {idx + 1}. {val.title}
                </h3>
                <p className="value-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDING PRINCIPLES */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Approach</span>
            <h2 className="section-heading">WAM Guiding Principles</h2>
            <p className="section-intro">
              WAM believes that sustainable change is strongest when communities are active partners in their own development.
            </p>
          </div>
          <div className="grid grid--min-md">
            {guidingPrinciples.map((principle) => (
              <div
                key={principle.number}
                className="card card--raised pillar-card interactive-card"
              >
                <div className="pillar-image-container">
                  <img
                    src={principle.image}
                    alt={principle.title}
                    className="pillar-img"
                  />
                  <span className="pillar-number">{principle.number}</span>
                </div>
                <div className="pillar-content">
                  <h3 className="pillar-title">{principle.title}</h3>
                  <p className="pillar-desc">{principle.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE PROGRAMMES */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-heading">Our Core Programmes</h2>
            <p className="section-intro">
              Targeted initiatives designed for maximum social impact
            </p>

            <div className="tab-row" role="tablist" aria-label="Filter programmes">
              {["all", "children", "youth", "community"].map((tab) => (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pill-tab ${
                    activeTab === tab ? "pill-tab--active" : ""
                  }`}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid--min-xl grid--gap-lg">
            {filteredProgrammes.map((p) => (
              <div key={p.id} className="card programme-card interactive-card">
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
                  <div className="programme-actions">
                    <button
                      onClick={() => setSelectedProgramme(p)}
                      className="btn btn-secondary btn-sm"
                    >
                      Quick Preview
                    </button>
                    <Link to={p.link} className="link link-self-center">
                      Details &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK PREVIEW MODAL */}
      {selectedProgramme && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProgramme(null)}
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => setSelectedProgramme(null)}
            >
              &times;
            </button>
            <h3 className="modal-title">{selectedProgramme.title}</h3>
            <p className="eyebrow">{selectedProgramme.target}</p>
            <p>{selectedProgramme.desc}</p>
            <ul className="programme-points">
              {selectedProgramme.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
            <div className="modal-footer">
              <Link
                to={selectedProgramme.link}
                className="btn btn-primary"
                onClick={() => setSelectedProgramme(null)}
              >
                Full Programme Page &rarr;
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* SERVICE TABS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-heading">Our Comprehensive Services</h2>
          </div>

          <div
            className="service-tab-row"
            role="tablist"
            aria-label="Service categories"
          >
            {Object.keys(services).map((key) => (
              <button
                key={key}
                role="tab"
                aria-selected={activeServiceTab === key}
                onClick={() => setActiveServiceTab(key)}
                className={`tab-btn ${
                  activeServiceTab === key ? "tab-btn--active" : ""
                }`}
              >
                {services[key].title}
              </button>
            ))}
          </div>

          <div className="card--raised service-panel transition-panel">
            <h3>{services[activeServiceTab].title}</h3>
            <p>{services[activeServiceTab].desc}</p>
            <hr className="service-divider" />
            <div className="grid grid--min-sm service-items-grid">
              {services[activeServiceTab].items.map((item, idx) => (
                <div key={idx} className="service-item animated-item">
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
            <h2 className="section-heading section-heading--onDark">
              Measuring Our Impact
            </h2>
            <p className="section-intro">
              Creating meaningful, sustainable change across local communities
            </p>
          </div>
          <div className="grid grid--min-sm stats-grid">
            {impactStats.map((stat, idx) => (
              <div key={idx} className="stat-item interactive-card">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORIES OF CHANGE */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Stories of Change</span>
            <h2 className="section-heading">Every Life Has a Story</h2>
            <p className="section-intro">
              Behind every statistic is a person, family, or community experiencing positive transformation.
            </p>
          </div>

          <div className="story-quote story-quote--with-avatar interactive-card">
            <div className="avatar-wrapper">
              <img
                src={wamo3}
                alt="Beneficiary portrait"
                className="story-avatar"
              />
            </div>
            <div className="story-content">
              <h3>Empowering Hope Through Mentorship &amp; Psychosocial Support</h3>
              <blockquote>
                &ldquo;Through WAM's community support groups and life-skills sessions, I gained the guidance and confidence needed to overcome personal challenges and access local health services.&rdquo;
              </blockquote>
              <p className="story-quote-attribution">
                — Beneficiary, MENTOR Programme (Anonymized)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="section section--alt">
        <div className="container container--narrow">
          <div className="section-header">
            <h2 className="section-heading">Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${
                  openFaq === index ? "faq-item--open" : ""
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="faq-question"
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAFEGUARDING NOTICE */}
      <section className="section section--compact section--soft safeguard-notice">
        <div className="container safeguard-notice-inner">
          <h4>Safeguarding &amp; Confidentiality Commitment</h4>
          <p>
            WAM is committed to treating every individual with dignity, empathy, confidentiality, and professionalism. Our work is guided by integrity and service to humanity, and we enforce strict safeguarding policies to protect children, youth, and vulnerable populations.
          </p>
        </div>
      </section>

      {/* GET INVOLVED CTA */}
      <section className="section section--navy-dark">
        <div className="container cta-inner">
          <h2 className="cta-title">Together, We Can Create Change That Lasts</h2>
          <p className="cta-lead">
            Join WAM in building healthier people, empowered communities, sustainable livelihoods, and a stronger society.
          </p>
          <div className="hero-actions cta-actions">
            <Link to="/contact" className="btn btn-highlight">
              Partner With Us
            </Link>
            <Link to="/contact" className="btn btn-accent">
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}