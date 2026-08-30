import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function GetInvolved() {
  const [selectedRole, setSelectedRole] = useState("volunteer");
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

  // Strategic Engagement Pathways
  const engagementPathways = [
    {
      id: "volunteer",
      title: "Volunteer & Peer Educator",
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
      badge: "Skills & Capacity",
      badgeColor: "#62b6cb",
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
    <div style={{ fontFamily: "sans-serif", color: "#102a43", lineHeight: "1.6", backgroundColor: "#fff" }}>
      
      {/* 1. HERO HEADER */}
      <section style={{ background: "linear-gradient(135deg, #102a43 0%, #123c69 100%)", color: "#fff", padding: "90px 0 70px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ maxWidth: "780px" }}>
            <span style={{ color: "#62b6cb", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "13px" }}>
              Join Our Movement
            </span>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 54px)", fontWeight: "800", margin: "16px 0", color: "#ffffff" }}>
              Partner With WAM to Transform Lives
            </h1>
            <p style={{ fontSize: "18px", color: "#d9e2ec", margin: 0 }}>
              Whether you are an individual volunteer, a health professional, a corporate sponsor, or an institutional donor, your contribution creates sustainable community impact.WAM believes communities are key drivers of their own development. We support community-
led initiatives by strengthening local capacity, mobilizing resources, providing mentorship and
technical support, and creating opportunities for communities to design and implement solutions
to their own challenges. We prioritize community ownership, participation, sustainability, and
locally driven change.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ENGAGEMENT PATHWAY SELECTOR */}
      <section style={{ padding: "70px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 style={{ fontSize: "32px", color: "#102a43" }}>Ways You Can Get Involved</h2>
            <p style={{ color: "#627d98" }}>Select an engagement model that matches your goals and expertise</p>

            {/* Filter Buttons */}
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "24px", flexWrap: "wrap" }}>
              {engagementPathways.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedRole(p.id)}
                  style={{
                    padding: "10px 24px",
                    borderRadius: "20px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "700",
                    fontSize: "14px",
                    backgroundColor: selectedRole === p.id ? "#123c69" : "#f0f4f8",
                    color: selectedRole === p.id ? "#fff" : "#486581",
                  }}
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Cards Grid */}
          <div style={{ display: "grid", gap: "30px", maxWidth: "900px", margin: "0 auto" }}>
            {engagementPathways
              .filter((p) => selectedRole === "all" || p.id === selectedRole)
              .map((path) => (
                <div
                  key={path.id}
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid #e1e8ed",
                    borderRadius: "12px",
                    padding: "36px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
                    borderTop: `5px solid ${path.badgeColor}`,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", flexWrap: "wrap", gap: "10px" }}>
                    <h3 style={{ fontSize: "24px", color: "#102a43", margin: 0 }}>{path.title}</h3>
                    <span style={{ backgroundColor: path.badgeColor, color: "#fff", padding: "4px 12px", borderRadius: "12px", fontSize: "12px", fontWeight: "700" }}>
                      {path.badge}
                    </span>
                  </div>

                  <p style={{ color: "#486581", fontSize: "15px", marginBottom: "24px" }}>{path.description}</p>

                  <div style={{ backgroundColor: "#f7f9fc", padding: "20px", borderRadius: "8px", marginBottom: "24px" }}>
                    <h4 style={{ color: "#102a43", marginTop: 0, marginBottom: "12px", fontSize: "15px" }}>Available Opportunities:</h4>
                    <ul style={{ paddingLeft: "20px", margin: 0, color: "#334e68", fontSize: "14px" }}>
                      {path.roles.map((r, idx) => (
                        <li key={idx} style={{ marginBottom: "8px" }}>{r}</li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#application-form"
                    onClick={() => {
                      setFormData({ ...formData, pathway: path.title });
                    }}
                    style={{
                      display: "inline-block",
                      padding: "12px 28px",
                      backgroundColor: "#123c69",
                      color: "#fff",
                      textDecoration: "none",
                      borderRadius: "6px",
                      fontWeight: "700",
                      fontSize: "14px",
                    }}
                  >
                    {path.ctaText} &rarr;
                  </a>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* 3. WHERE YOUR CONTRIBUTION GOES */}
      <section style={{ padding: "80px 0", backgroundColor: "#f7f9fc", borderTop: "1px solid #e1e8ed", borderBottom: "1px solid #e1e8ed" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <span style={{ color: "#123c69", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", fontSize: "13px" }}>
              Direct Impact
            </span>
            <h2 style={{ fontSize: "32px", color: "#102a43", marginTop: "8px" }}>Where Your Time & Support Go</h2>
            <p style={{ color: "#627d98" }}>Supporting direct health and social protection interventions in local communities</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "24px" }}>
            {impactAreas.map((item) => (
              <div key={item.number} style={{ backgroundColor: "#fff", padding: "28px", borderRadius: "8px", border: "1px solid #e1e8ed" }}>
                <span style={{ fontSize: "28px", fontWeight: "800", color: "#62b6cb", display: "block", marginBottom: "10px" }}>
                  {item.number}
                </span>
                <h4 style={{ fontSize: "18px", color: "#102a43", margin: "0 0 8px 0" }}>{item.title}</h4>
                <p style={{ color: "#486581", fontSize: "13px", margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTEGRATED APPLICATION & INTEREST FORM */}
      <section id="application-form" style={{ padding: "80px 0", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 style={{ fontSize: "32px", color: "#102a43" }}>Express Your Interest</h2>
            <p style={{ color: "#627d98" }}>Fill out the form below and our coordination team will contact you</p>
          </div>

          <form onSubmit={handleSubmit} style={{ backgroundColor: "#f7f9fc", padding: "36px", borderRadius: "12px", border: "1px solid #e1e8ed" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginBottom: "20px" }}>
              <div>
                <label style={{ display: "block", fontSize: "14px", fontWeight: "700", color: "#102a43", marginBottom: "8px" }}>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g. Jane Doe"
                  style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #bcccdc", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "14px", fontWeight: "700", color: "#102a43", marginBottom: "8px" }}>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. jane@example.com"
                  style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #bcccdc", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginBottom: "20px" }}>
              <div>
                <label style={{ display: "block", fontSize: "14px", fontWeight: "700", color: "#102a43", marginBottom: "8px" }}>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g. +254 700 000 000"
                  style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #bcccdc", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "14px", fontWeight: "700", color: "#102a43", marginBottom: "8px" }}>Engagement Pathway *</label>
                <select
                  name="pathway"
                  value={formData.pathway}
                  onChange={handleInputChange}
                  style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #bcccdc", fontSize: "14px", outline: "none", backgroundColor: "#fff", boxSizing: "border-box" }}
                >
                  <option value="Volunteer / Peer Educator">Volunteer / Peer Educator</option>
                  <option value="Institutional Partner">Institutional Partner / NGO</option>
                  <option value="Youth Mentor">Youth Mentor</option>
                  <option value="Corporate / CSR Partner">Corporate / CSR Partner</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <label style={{ display: "block", fontSize: "14px", fontWeight: "700", color: "#102a43", marginBottom: "8px" }}>County / Location</label>
              <select
                name="county"
                value={formData.county}
                onChange={handleInputChange}
                style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #bcccdc", fontSize: "14px", outline: "none", backgroundColor: "#fff", boxSizing: "border-box" }}
              >
                <option value="Nairobi">Nairobi County</option>
                <option value="Machakos">Machakos County</option>
                <option value="Kitui">Kitui County</option>
                <option value="Makueni">Makueni County</option>
                <option value="Other">Other Region</option>
              </select>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <label style={{ display: "block", fontSize: "14px", fontWeight: "700", color: "#102a43", marginBottom: "8px" }}>Brief Note or Background</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your background, skills, or proposed partnership area..."
                style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #bcccdc", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
              ></textarea>
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px",
                backgroundColor: "#123c69",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontSize: "16px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* 5. DIRECT CONTACT PATHWAY */}
      <section style={{ padding: "60px 0", backgroundColor: "#102a43", color: "#fff", textAlign: "center" }}>
        <div style={{ maxWidth: "750px", margin: "0 auto", padding: "0 20px" }}>
          <h3 style={{ fontSize: "24px", color: "#fff", marginBottom: "12px" }}>Prefer Direct Communication?</h3>
          <p style={{ color: "#bcccdc", fontSize: "15px", marginBottom: "24px" }}>
            Reach out directly to our Partnership & Engagement Directorate.
          </p>
          <Link to="/contact" style={{ padding: "12px 28px", backgroundColor: "#62b6cb", color: "#102a43", textDecoration: "none", borderRadius: "6px", fontWeight: "700", fontSize: "14px" }}>
            Contact Directorate
          </Link>
        </div>
      </section>

    </div>
  );
}