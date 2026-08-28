import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Resources.css";

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFaq, setOpenFaq] = useState(null);

  // Resource Knowledge Base Data
  const resourcesList = [
    {
      id: 1,
      title: "WAM Annual Impact & Performance Report 2025",
      category: "reports",
      categoryLabel: "Annual Report",
      badgeColor: "#123c69",
      type: "PDF",
      size: "2.8 MB",
      date: "Jan 2026",
      description: "Comprehensive review of WAM programmatic reach, clinical referrals, financial audits, and multi-county indicators.",
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
      description: "Standard operating procedures and ethical guidelines for implementing child safety and health clubs in primary schools.",
    },
    {
      id: 3,
      title: "MENTOR Youth SRH Peer Facilitator Toolkit",
      category: "toolkits",
      categoryLabel: "Training Manual",
      badgeColor: "#62b6cb",
      type: "PDF",
      size: "4.2 MB",
      date: "Aug 2025",
      description: "A step-by-step facilitation guide for peer educators covering reproductive health, HIV prevention, and referral mapping.",
    },
    {
      id: 4,
      title: "WELLNESS Community Psychosocial Framework",
      category: "publications",
      categoryLabel: "Research Paper",
      badgeColor: "#d97706",
      type: "PDF",
      size: "1.1 MB",
      date: "May 2025",
      description: "An operational model for setting up trauma-informed Psychosocial Support Groups (PSSG) for vulnerable women and GBV survivors.",
    },
    {
      id: 5,
      title: "Substance Use Early Screening (SBIRT) Tool",
      category: "toolkits",
      categoryLabel: "Clinical Tool",
      badgeColor: "#62b6cb",
      type: "PDF",
      size: "850 KB",
      date: "Feb 2025",
      description: "Screening, Brief Intervention, and Referral to Treatment (SBIRT) field cards designed for Community Health Volunteers.",
    },
    {
      id: 6,
      title: "WAM Strategic Plan 2024 - 2028 Overview",
      category: "reports",
      categoryLabel: "Strategic Document",
      badgeColor: "#123c69",
      type: "PDF",
      size: "3.4 MB",
      date: "Jan 2024",
      description: "Five-year roadmap outlining organizational goals, geographic expansion plans, and strategic partner frameworks.",
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
      {/* 1. HERO HEADER WITH SEARCH BAR */}
      <section className="resources-hero">
        <div className="resources-container">
          <div className="hero-content">
            <span className="hero-subtitle">Knowledge Hub</span>
            <h1>Publications & Resources</h1>
            <p className="hero-description">
              Access operational toolkits, policy guides, research publications, and annual performance reports.
            </p>

            <div className="search-container">
              <input
                type="text"
                placeholder="Search publications, reports, or toolkits..."
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
              { id: "publications", label: "Publications" },
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

      {/* 3. RESOURCE CARDS GRID */}
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
                  <div>
                    <div className="card-header">
                      <span
                        className="category-badge"
                        style={{ backgroundColor: item.badgeColor }}
                      >
                        {item.categoryLabel}
                      </span>
                      <span className="resource-date">{item.date}</span>
                    </div>

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