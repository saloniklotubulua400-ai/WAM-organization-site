import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Resources.css";

// Relative path: src/pages to src/assets
import wamo1 from "../assets/wamo1.png";
import wamo2 from "../assets/wamo2.png";
import wamo9 from "../assets/wamo9.png";
import wamo12 from "../assets/wamo12.png";
import wamo14 from "../assets/wamo14.png";

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFaq, setOpenFaq] = useState(null);

  // Streamlined and Balanced Resource Knowledge Base Data
  const resourcesList = [
    {
      id: 1,
      title: "WAM Annual Impact & Performance Report",
      category: "reports",
      categoryLabel: "Annual Report",
      badgeColor: "#123c69",
      type: "PDF",
      size: "2.8 MB",
      date: "Jan 2026",
      image: wamo1,
      description: "Comprehensive review of WAM programmatic reach, clinical referrals, and multi-county health indicators.",
    },
    {
      id: 2,
      title: "MLINDE Child Safeguarding & Protection Manual",
      category: "guides",
      categoryLabel: "Policy Guide",
      badgeColor: "#04724d",
      type: "PDF",
      size: "1.5 MB",
      date: "Nov 2025",
      image: wamo2,
      description: "Standard operating procedures and ethical guidelines for implementing child safety and health clubs.",
    },
    {
      id: 3,
      title: "MENTOR Youth SRH Peer Facilitator Toolkit",
      category: "toolkits",
      categoryLabel: "Training Manual",
      badgeColor: "#0284c7",
      type: "PDF",
      size: "4.2 MB",
      date: "Aug 2025",
      image: wamo9,
      description: "A step-by-step facilitation guide for peer educators covering reproductive health and disease prevention.",
    },
    {
      id: 4,
      title: "WELLNESS Community Psychosocial Framework",
      category: "guides",
      categoryLabel: "Framework Guide",
      badgeColor: "#d97706",
      type: "PDF",
      size: "1.1 MB",
      date: "May 2025",
      image: wamo14,
      description: "An operational guide for setting up trauma-informed Psychosocial Support Groups (PSSG) for vulnerable populations.",
    },
  ];

  // FAQs
  const faqs = [
    {
      q: "Can other organizations adapt or use WAM's toolkits?",
      a: "Yes. Our toolkits and community manuals are open-access under Creative Commons attribution for non-commercial civil-society and public health implementations.",
    },
    {
      q: "How can I request official institutional data or M&E reports?",
      a: "For programmatic research, academic collaborations, or customized data inquiries, please use our document request contact form below.",
    },
    {
      q: "Are hard copies of training materials available for community groups?",
      a: "Hard copies of the MLINDE and MENTOR toolkits are distributed during formal capacity-building workshops. PDF versions are freely accessible here.",
    },
  ];

  // Filtering Logic
  const filteredResources = resourcesList.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="resources-page">
      {/* 1. HERO HEADER WITH WAMO12 BACKGROUND FRAME */}
      <section
        className="resources-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.75), rgba(10, 25, 47, 0.75)), url(${wamo12})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="resources-container">
          <div className="hero-content">
            <span className="hero-subtitle">Knowledge Hub</span>
            <h1>Publications & Resources</h1>
            <p className="hero-description">
              Access operational toolkits, policy guides, and programmatic reports. WAM promotes innovative thinking, creativity, and continuous learning in addressing community challenges. We encourage individuals, communities, staff, and partners to develop new ideas, technologies, and locally appropriate solutions that improve the effectiveness and sustainability of our programmes.
            </p>

            <div className="search-container">
              <input
                type="text"
                placeholder="Search toolkits, reports, or guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER TABS */}
      <section className="filter-section">
        <div className="resources-container filter-wrapper">
          <span className="filter-label">Filter Category:</span>
          <div className="filter-tabs">
            {[
              { id: "all", label: "All Resources" },
              { id: "reports", label: "Reports" },
              { id: "guides", label: "Policy Guides" },
              { id: "toolkits", label: "Toolkits" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`tab-btn ${activeCategory === cat.id ? "active" : ""}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RESOURCE CARDS GRID WITH THUMBNAIL IMAGES */}
      <section className="resources-grid-section">
        <div className="resources-container">
          {filteredResources.length === 0 ? (
            <div className="no-results">
              <h3>No resources found matching your search.</h3>
              <p>Try clearing your search query or switching categories.</p>
            </div>
          ) : (
            <div className="resources-grid">
              {filteredResources.map((item) => (
                <div key={item.id} className="resource-card">
                  <div className="resource-thumb-wrapper">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="resource-thumb"
                      loading="lazy"
                    />
                    <span
                      className="category-badge"
                      style={{ backgroundColor: item.badgeColor }}
                    >
                      {item.categoryLabel}
                    </span>
                  </div>

                  <div className="card-body">
                    <span className="resource-date">{item.date}</span>
                    <h3>{item.title}</h3>
                    <p className="resource-description">{item.description}</p>
                  </div>

                  <div className="card-footer">
                    <span className="meta-info">
                      {item.type} • {item.size}
                    </span>
                    <a
                      href={`#download-${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        alert(`Downloading ${item.title}`);
                      }}
                      className="download-btn"
                    >
                      Download &#8595;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      <section className="faq-section">
        <div className="resources-container-narrow">
          <div className="faq-header">
            <h2>Resource Access FAQs</h2>
          </div>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="faq-toggle-btn"
                >
                  {faq.q}
                  <span>{openFaq === index ? "−" : "+"}</span>
                </button>
                {openFaq === index && (
                  <div className="faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CUSTOM DOCUMENT REQUEST CTA */}
      <section className="request-cta-section">
        <div className="resources-container-cta">
          <h2>Need Custom Data or Specific Reports?</h2>
          <p>
            If you are a partner institution, researcher, or donor seeking specific project evaluations or data, contact our Monitoring & Evaluation team.
          </p>
          <div className="cta-btn-group">
            <Link to="/contact" className="cta-link-btn">
              Request Specific Document
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}