import React, { useState } from "react";
import "./Partnerships.css";

export default function Partnerships() {
  const [activeTab, setActiveTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    orgName: "",
    orgType: "Local NGO",
    contactName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const stakeholderCategories = [
    {
      id: "community",
      category: "Grassroots & Community",
      tag: "Direct Impact",
      description: "Building frontline capacity and direct community-driven initiatives.",
      partners: [
        { name: "Youth Groups", role: "Peer mentorship, SRH outreach, and youth-led advocacy." },
        { name: "Faith-Based Organizations", role: "Values-aligned health awareness and psychosocial support." },
        { name: "Local Communities", role: "Community dialogue, child protection, and local ownership." },
      ],
    },
    {
      id: "institutions",
      category: "Education & Training",
      tag: "Capacity Building",
      description: "Integrating mental health, life-skills, and protection into learning spaces.",
      partners: [
        { name: "Vocational Training Institutions", role: "Technical skills training and adolescent wellbeing." },
        { name: "Colleges & Universities", role: "Campus mental health initiatives and peer counselor networks." },
      ],
    },
    {
      id: "government",
      category: "Government & Authorities",
      tag: "Policy Alignment",
      description: "Aligning strategies with public policy and county health frameworks.",
      partners: [
        { name: "National Government", role: "Policy alignment and health/education technical working groups." },
        { name: "County Governments", role: "Local health facility linkages, GBV response, and school clubs." },
        { name: "Local Authorities", role: "Community safety, administrative support, and referral networks." },
      ],
    },
    {
      id: "civil-society",
      category: "Civil Society & Development",
      tag: "Strategic Network",
      description: "Expanding service delivery, joint funding, and technical excellence.",
      partners: [
        { name: "Local & International NGOs", role: "Consortium project delivery, referrals, and joint advocacy." },
        { name: "Other Relevant Stakeholders", role: "Private sector, research entities, and philanthropic partners." },
      ],
    },
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowModal(false);
      setFormData({
        orgName: "",
        orgType: "Local NGO",
        contactName: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 2000);
  };

  const filteredCategories =
    activeTab === "all"
      ? stakeholderCategories
      : stakeholderCategories.filter((cat) => cat.id === activeTab);

  return (
    <div className="partnerships-page">
      {/* 1. HERO SECTION */}
      <section className="partnerships-hero">
        <div className="container hero-container text-center">
          <span className="badge-pill">Collaborative Impact</span>
          <h1>Working Together for Greater Impact</h1>
          <p>
            We welcome donors, development partners, government agencies, private sector organizations,
            foundations, researchers, volunteers, and other stakeholders to partner with us in advancing this
            vision. Your support and investment can expand access to wellness services, strengthen
            community-led initiatives, promote sustainable livelihoods, support vulnerable populations, and
            foster innovative solutions to emerging community needs.
          </p>
          <button className="cta-primary-btn" onClick={() => setShowModal(true)}>
            Become a Partner &rarr;
          </button>
        </div>
      </section>

      {/* 2. CORE PARTNERSHIP VALUES */}
      <section className="values-section">
        <div className="container">
          <div className="section-title text-center">
            <h2>Why Partner With WAM?</h2>
            <p>Our collaborative model ensures that resources and expertise translate directly into sustainable local outcomes.</p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Community-Led Ownership</h3>
              <p>We work directly with local leadership to ensure interventions are culturally grounded and sustained over time.</p>
            </div>

            <div className="value-card">
              <div className="value-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              </div>
              <h3>Measurable Outcomes</h3>
              <p>Every partnership leverages structured monitoring, evaluation, and reporting frameworks to track real impact.</p>
            </div>

            <div className="value-card">
              <div className="value-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h3>Holistic Service Integration</h3>
              <p>Connecting health promotion, child protection, and psychosocial support through established referral pathways.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STAKEHOLDER CATEGORIES & TABS */}
      <section className="stakeholders-section">
        <div className="container">
          <div className="section-title text-center">
            <h2>Our Stakeholders & Collaborative Network</h2>
            <p>Exploring the diverse sectors where WAM builds strategic relationships.</p>
          </div>

          {/* TAB CONTROLS */}
          <div className="stakeholder-tabs">
            <button
              className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              All Partners (10)
            </button>
            <button
              className={`tab-btn ${activeTab === "community" ? "active" : ""}`}
              onClick={() => setActiveTab("community")}
            >
              Grassroots & Community
            </button>
            <button
              className={`tab-btn ${activeTab === "institutions" ? "active" : ""}`}
              onClick={() => setActiveTab("institutions")}
            >
              Education & Training
            </button>
            <button
              className={`tab-btn ${activeTab === "government" ? "active" : ""}`}
              onClick={() => setActiveTab("government")}
            >
              Government Bodies
            </button>
            <button
              className={`tab-btn ${activeTab === "civil-society" ? "active" : ""}`}
              onClick={() => setActiveTab("civil-society")}
            >
              Civil Society
            </button>
          </div>

          {/* STAKEHOLDER CARDS DISPLAY */}
          <div className="categories-stack">
            {filteredCategories.map((cat) => (
              <div key={cat.id} className="category-group">
                <div className="category-header-clean">
                  <span className="category-tag-badge">{cat.tag}</span>
                  <h3>{cat.category}</h3>
                  <p>{cat.description}</p>
                </div>

                <div className="partners-grid">
                  {cat.partners.map((partner, idx) => (
                    <div key={idx} className="partner-card">
                      <div className="partner-card-header">
                        <span className="check-bullet">✓</span>
                        <h4>{partner.name}</h4>
                      </div>
                      <p>{partner.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PARTNERSHIP ROADMAP */}
      <section className="roadmap-section">
        <div className="container">
          <div className="section-title text-center">
            <h2>How We Build Partnerships</h2>
            <p>A simple four-step pathway to establishing meaningful collaboration with WAM.</p>
          </div>

          <div className="roadmap-grid">
            <div className="step-card">
              <span className="step-number">01</span>
              <h4>Initial Engagement</h4>
              <p>Identify shared goals, geographical coverage, and target population priorities.</p>
            </div>
            <div className="step-card">
              <span className="step-number">02</span>
              <h4>Co-Design</h4>
              <p>Align intervention scope, resource commitments, and operational timelines.</p>
            </div>
            <div className="step-card">
              <span className="step-number">03</span>
              <h4>Implementation</h4>
              <p>Execute joint activities with active participation from local community structures.</p>
            </div>
            <div className="step-card">
              <span className="step-number">04</span>
              <h4>Review & Scale</h4>
              <p>Evaluate impact metrics, share key learnings, and extend successful models.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM INVITATION BANNER */}
      <section className="partnership-cta-banner">
        <div className="container cta-banner-container text-center">
          <div className="banner-text">
            <h2>Ready to collaborate with WAM?</h2>
            <p>Let’s join hands to improve mental health, child safety, and community resilience.</p>
          </div>
          <button className="banner-btn" onClick={() => setShowModal(true)}>
            Start a Partnership Conversation
          </button>
        </div>
      </section>

      {/* 6. INQUIRY MODAL */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowModal(false)}>
              &times;
            </button>
            {submitted ? (
              <div className="submission-success">
                <span className="success-icon">✓</span>
                <h3>Inquiry Received!</h3>
                <p>Thank you for reaching out. A WAM team member will review your details and contact you shortly.</p>
              </div>
            ) : (
              <>
                <div className="modal-header">
                  <h3>Partner with WAM</h3>
                  <p>Fill out the details below to initiate a partnership discussion.</p>
                </div>
                <form className="partnership-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Organization / Entity Name *</label>
                    <input
                      type="text"
                      name="orgName"
                      required
                      value={formData.orgName}
                      onChange={handleInputChange}
                      placeholder="e.g. County Health Department / Youth CBO"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Organization Type *</label>
                      <select name="orgType" value={formData.orgType} onChange={handleInputChange}>
                        <option value="Youth Group">Youth Group</option>
                        <option value="Faith-Based Organization">Faith-Based Organization</option>
                        <option value="Local NGO">Local NGO</option>
                        <option value="County / National Government">Government Entity</option>
                        <option value="Educational Institution">Educational Institution</option>
                        <option value="Other">Other Stakeholder</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Contact Person *</label>
                      <input
                        type="text"
                        name="contactName"
                        required
                        value={formData.contactName}
                        onChange={handleInputChange}
                        placeholder="Full Name"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="name@organization.org"
                      />
                    </div>

                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+254 700 000000"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Partnership Scope / Proposal Notes</label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Briefly describe how you'd like to collaborate..."
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-form-btn">
                    Submit Partnership Inquiry
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}