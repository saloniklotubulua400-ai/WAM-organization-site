import React, { useState } from 'react';
import './SubstancePrevention.css';

function SubstancePrevention() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showHelpModal, setShowHelpModal] = useState(false);

  const preventionPillars = [
    {
      icon: "📚",
      title: "Education & Literacy",
      description: "Providing schools, parents, and youth with evidence-based prevention workshops, evidence briefs, and clear factual information."
    },
    {
      icon: "💡",
      title: "Awareness Campaigns",
      description: "Promoting informed community conversations to reduce stigma, recognize early warning signs, and address systemic risk factors."
    },
    {
      icon: "🤝",
      title: "Community Action",
      description: "Partnering with local health organizations, schools, mentors, and advocates to build sustained, long-term support networks."
    }
  ];

  const resourceDownloads = [
    {
      category: "Parent & Educator Guide",
      title: "Youth Substance Risk & Prevention Toolkit",
      size: "2.4 MB PDF",
      link: "#"
    },
    {
      category: "Community Health",
      title: "Recognizing Early Warning Signs & Intervention",
      size: "1.8 MB PDF",
      link: "#"
    },
    {
      category: "Action Plan",
      title: "Establishing Local Community Recovery Networks",
      size: "3.1 MB PDF",
      link: "#"
    }
  ];

  const faqs = [
    {
      question: "What are the early signs of substance misuse?",
      answer: "Common warning signs include sudden changes in behavior, shifts in academic or work performance, social isolation, uncharacteristic mood swings, and changes in sleeping or eating patterns."
    },
    {
      question: "How can parents initiate prevention conversations?",
      answer: "Start early with open, non-judgmental dialogue. Focus on active listening, establishing clear family expectations, discussing healthy coping mechanisms, and providing factual information rather than scare tactics."
    },
    {
      question: "Where can someone seek confidential help?",
      answer: "Helplines, community health centers, and certified addiction specialists offer confidential guidance. Click the 'Get Immediate Help' button to access direct, 24/7 hotline numbers."
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="substance-prevention-page">
      {/* 1. HERO SECTION */}
      <section className="prevention-hero">
        <div className="container hero-container">
          <span className="badge-pill">Community Health & Wellness</span>
          <h1>Substance Misuse Prevention</h1>
          <p>
            Building resilient, informed communities through proactive education, early intervention strategies, and compassionate support networks.
          </p>
          <div className="hero-cta-group">
            <a href="#resources" className="cta-primary-btn">Explore Toolkits</a>
            <button className="cta-secondary-btn" onClick={() => setShowHelpModal(true)}>
              Get Immediate Help
            </button>
          </div>
        </div>
      </section>

      {/* 2. CORE PILLARS SECTION */}
      <section className="section pillars-section">
        <div className="container">
          <div className="section-title text-center">
            <h2>Our Prevention Pillars</h2>
            <p>
              We take a holistic, multi-tiered approach to empower individuals and strengthen family and community resilience.
            </p>
          </div>

          <div className="cards-grid">
            {preventionPillars.map((pillar, index) => (
              <div key={index} className="prevention-card">
                <div className="card-icon">{pillar.icon}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DOWNLOADABLE RESOURCES SECTION */}
      <section id="resources" className="section resources-section">
        <div className="container">
          <div className="section-title text-center">
            <h2>Prevention Toolkits & Resources</h2>
            <p>Download free, evidence-based guides and actionable resources for families, schools, and local organizers.</p>
          </div>

          <div className="resources-grid">
            {resourceDownloads.map((res, index) => (
              <div key={index} className="resource-card">
                <span className="resource-badge">{res.category}</span>
                <h3>{res.title}</h3>
                <div className="resource-footer">
                  <span className="file-size">{res.size}</span>
                  <a href={res.link} className="download-link">Download PDF →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <section className="section faq-section">
        <div className="container narrow-container">
          <div className="section-title text-center">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions regarding prevention, early signs, and community action.</p>
          </div>

          <div className="faq-accordion">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${activeFaq === index ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => toggleFaq(index)}>
                  <span>{faq.question}</span>
                  <span className="faq-icon">{activeFaq === index ? '−' : '+'}</span>
                </button>
                {activeFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. URGENT HELPLINE BANNER */}
      <section className="helpline-banner">
        <div className="container banner-container">
          <div className="banner-text">
            <h2>Need Urgent Support or Guidance?</h2>
            <p>Confidential help and immediate advice are available 24/7 for individuals and families in need.</p>
          </div>
          <button className="banner-btn" onClick={() => setShowHelpModal(true)}>
            Access Help Directory
          </button>
        </div>
      </section>

      {/* 6. CONFIDENTIAL HELP MODAL */}
      {showHelpModal && (
        <div className="modal-overlay" onClick={() => setShowHelpModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowHelpModal(false)}>×</button>
            <div className="modal-header">
              <h3>24/7 Support & Emergency Helplines</h3>
              <p>Reach out to trained professionals for free, confidential guidance at any time.</p>
            </div>
            <div className="helpline-list">
              <div className="helpline-card">
                <h4>National Substance Support Line</h4>
                <p>Available 24/7 • Toll-Free & Confidential</p>
                <a href="tel:18006624357" className="phone-btn">📞 Call 1-800-662-4357</a>
              </div>
              <div className="helpline-card">
                <h4>Crisis Text Line</h4>
                <p>Free 24/7 Text Support</p>
                <a href="sms:741741" className="phone-btn text-btn">💬 Text HOME to 741741</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SubstancePrevention;