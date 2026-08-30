import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./GetInvolved.css";

export default function GetInvolved() {
  const [selectedRole, setSelectedRole] = useState("all");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    county: "Nairobi",
    pathway: "Volunteer / Peer Educator",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.fullName}! Your interest in joining WAM as a ${formData.pathway} has been received.`);
  };

  const handlePathwaySelect = (pathwayTitle) => {
    setFormData((prev) => ({ ...prev, pathway: pathwayTitle }));
    const formElement = document.getElementById("application-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Strategic Engagement Pathways
  const engagementPathways = [
    {
      id: "volunteer",
      title: "Volunteer & Peer Educator",
      formValue: "Volunteer / Peer Educator",
      badge: "Community Level",
      badgeColor: "#04724d",
      description: "Join our network of community facilitators driving peer education, health screening outreach, and rights advocacy.",
      roles: [
        "MLINDE School Health Club Facilitators (Ages 18+)",
        "MENTOR Youth Peer Educators (SRH & Life Skills)",
        "Community Health Volunteers (CHVs) & Mobilizers",
        "Event Coordination & Psychosocial Support Assistants",
      ],
      ctaText: "Apply as a Volunteer",
    },
    {
      id: "partner",
      title: "Institutional Partnerships",
      formValue: "Institutional Partner / NGO",
      badge: "Strategic & Donor",
      badgeColor: "#123c69",
      description: "Collaborate with WAM on co-funded community initiatives, public health research, or clinical referral networks.",
      roles: [
        "Healthcare Facility Referral Integration",
        "County Government & Public Health Collaborations",
        "CSR & Corporate Social Impact Programs",
        "Consortium & Grant Partnership Models",
      ],
      ctaText: "Explore Partnership",
    },
    {
      id: "mentor",
      title: "Youth Mentorship & Training",
      formValue: "Youth Mentor",
      badge: "Skills & Capacity",
      badgeColor: "#0284c7",
      description: "Share professional expertise, career guidance, and life-skills training with young people in our MENTOR initiative.",
      roles: [
        "Career & Entrepreneurship Mentors",
        "Mental Health & Psychosocial Guidance",
        "Digital Literacy & Technical Skills Trainers",
        "Adolescent Health Advocacy Champions",
      ],
      ctaText: "Become a Mentor",
    },
  ];

  // Specific Areas of Impact
  const impactAreas = [
    { number: "01", title: "School Health Clubs", desc: "Empowering children with rights literacy and safety protocols in primary schools." },
    { number: "02", title: "Youth SRH Outreach", desc: "Providing confidential HIV testing, STI screening, and reproductive health education." },
    { number: "03", title: "Psychosocial Support", desc: "Facilitating community support groups for GBV survivors and vulnerable women." },
    { number: "04", title: "Substance Use Prevention", desc: "Conducting community psychoeducation and early screening across urban informal settlements." },
  ];

  return (
    <div className="get-involved-page">
      
      {/* 1. HERO HEADER */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">Join Our Movement</span>
            <h1 className="hero-title">Partner With WAM to Transform Lives</h1>
            <p className="hero-description">
              Whether you are an individual volunteer, a health professional, a corporate sponsor, or an institutional donor, your contribution creates sustainable community impact. WAM believes communities are key drivers of their own development. We support community-led initiatives by strengthening local capacity, mobilizing resources, providing mentorship, and creating opportunities for communities to design solutions to their own challenges.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ENGAGEMENT PATHWAY SELECTOR */}
      <section className="engagement-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Ways You Can Get Involved</h2>
            <p className="section-subtitle">Select an engagement model that matches your goals and expertise</p>

            {/* Filter Buttons */}
            <div className="filter-container">
              <button
                onClick={() => setSelectedRole("all")}
                className={`filter-btn ${selectedRole === "all" ? "active" : ""}`}
              >
                All Opportunities
              </button>
              {engagementPathways.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedRole(p.id)}
                  className={`filter-btn ${selectedRole === p.id ? "active" : ""}`}
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Cards Grid */}
          <div className="pathway-grid">
            {engagementPathways
              .filter((p) => selectedRole === "all" || p.id === selectedRole)
              .map((path) => (
                <div
                  key={path.id}
                  className="pathway-card"
                  style={{ borderTop: `5px solid ${path.badgeColor}` }}
                >
                  <div className="pathway-card-header">
                    <h3 className="pathway-card-title">{path.title}</h3>
                    <span className="pathway-badge" style={{ backgroundColor: path.badgeColor }}>
                      {path.badge}
                    </span>
                  </div>

                  <p className="pathway-description">{path.description}</p>

                  <div className="pathway-roles-box">
                    <h4 className="pathway-roles-title">Available Opportunities:</h4>
                    <ul className="pathway-roles-list">
                      {path.roles.map((r, idx) => (
                        <li key={idx}>{r}</li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#application-form"
                    onClick={() => handlePathwaySelect(path.formValue)}
                    className="pathway-cta-btn"
                  >
                    {path.ctaText} &rarr;
                  </a>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* 3. WHERE YOUR CONTRIBUTION GOES */}
      <section className="impact-section">
        <div className="container">
          <div className="section-header">
            <span className="impact-badge">Direct Impact</span>
            <h2 className="section-title">Where Your Time & Support Go</h2>
            <p className="section-subtitle">Supporting direct health and social protection interventions in local communities</p>
          </div>

          <div className="impact-grid">
            {impactAreas.map((item) => (
              <div key={item.number} className="impact-card">
                <span className="impact-number">{item.number}</span>
                <h4 className="impact-title">{item.title}</h4>
                <p className="impact-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTEGRATED APPLICATION & INTEREST FORM */}
      <section id="application-form" className="form-section">
        <div className="container form-wrapper">
          <div className="section-header">
            <h2 className="section-title">Express Your Interest</h2>
            <p className="section-subtitle">Fill out the form below and our coordination team will contact you</p>
          </div>

          <form onSubmit={handleSubmit} className="application-form">
            <div className="form-row">
              <div>
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g. Jane Doe"
                  className="form-input"
                />
              </div>

              <div>
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. jane@example.com"
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div>
                <label className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g. +254 700 000 000"
                  className="form-input"
                />
              </div>

              <div>
                <label className="form-label">Engagement Pathway *</label>
                <select
                  name="pathway"
                  value={formData.pathway}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="Volunteer / Peer Educator">Volunteer / Peer Educator</option>
                  <option value="Institutional Partner / NGO">Institutional Partner / NGO</option>
                  <option value="Youth Mentor">Youth Mentor</option>
                  <option value="Corporate / CSR Partner">Corporate / CSR Partner</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">County / Location</label>
              <select
                name="county"
                value={formData.county}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="Nairobi">Nairobi County</option>
                <option value="Machakos">Machakos County</option>
                <option value="Kitui">Kitui County</option>
                <option value="Makueni">Makueni County</option>
                <option value="Other">Other Region</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Brief Note or Background</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your background, skills, or proposed partnership area..."
                className="form-textarea"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* 5. DIRECT CONTACT PATHWAY */}
      <section className="contact-section">
        <div className="container contact-wrapper">
          <h3 className="contact-title">Prefer Direct Communication?</h3>
          <p className="contact-text">
            Reach out directly to our Partnership & Engagement Directorate.
          </p>
          <Link to="/contact" className="contact-btn">
            Contact Directorate
          </Link>
        </div>
      </section>

    </div>
  );
}