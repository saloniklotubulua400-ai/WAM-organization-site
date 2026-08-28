import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "General Enquiry",
    county: "Nairobi",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted WAM Contact Form:", formData);
    setIsSubmitted(true);
    
    // Reset form after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "General Enquiry",
        county: "Nairobi",
        subject: "",
        message: "",
      });
    }, 4000);
  };

  const contactChannels = [
    {
      title: "Main Office & General Enquiries",
      email: "wamo2021@gmail.com",
      phone: "+254 (0) 720914797",
      details: "For general organizational information, public relations, and administrative support.",
    },
    {
      title: "Programme & Referral Desk",
      email: "wamo2021@gmail.com",
      phone: "+254 (0) 720914797",
      details: "Direct contact line for MLINDE, MENTOR, and WELLNESS clinical and psychosocial referrals.",
    },
    {
      title: "Partnerships & Institutional Support",
      email: "wamo2021@gmail.com",
      phone: "+254 (0) 720914797",
      details: "For donor agencies, county health departments, and NGO consortium discussions.",
    },
  ];

  const operatingCounties = [
    { name: "Nairobi County", hub: "Nairobi Central & Field Hubs" },
    { name: "Machakos County", hub: "Machakos Town Regional Office" },
    { name: "Kitui County", hub: "Kitui Field Coordination Center" },
    { name: "Makueni County", hub: "Makueni Community Desk" },
  ];

  return (
    <div style={{ fontFamily: "sans-serif", color: "#102a43", lineHeight: "1.6", backgroundColor: "#32cf0b" }}>
      
      {/* 1. HERO HEADER */}
      <section style={{ background: "linear-gradient(135deg, #102a43 0%, #123c69 100%)", color: "rgb(26, 212, 57)", padding: "90px 0 70px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ maxWidth: "780px" }}>
            <span style={{ color: "#62b6cb", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "13px" }}>
              Reach Out To Us
            </span>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 54px)", fontWeight: "800", margin: "16px 0", color: "#ffffff" }}>
              Contact WAM Headquarters & Field Desk
            </h1>
            <p style={{ fontSize: "18px", color: "#1031c4", margin: 0 }}>
              Whether you are seeking personal health support, referring a beneficiary, or exploring institutional partnerships, our team is ready to respond.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION */}
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "50px", alignItems: "start" }}>
            
            {/* Left Column: Direct Info Cards */}
            <div>
              <span style={{ color: "#123c69", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", fontSize: "13px" }}>
                Direct Communication
              </span>
              <h2 style={{ fontSize: "30px", color: "#102a43", margin: "8px 0 24px 0" }}>Connect With Our Specific Desks</h2>

              <div style={{ display: "grid", gap: "20px", marginBottom: "40px" }}>
                {contactChannels.map((channel, idx) => (
                  <div key={idx} style={{ backgroundColor: "#f7f9fc", padding: "24px", borderRadius: "8px", borderLeft: "4px solid #123c69" }}>
                    <h3 style={{ fontSize: "17px", color: "#1bdd1b", margin: "0 0 8px 0" }}>{channel.title}</h3>
                    <p style={{ color: "#627d98", fontSize: "13px", margin: "0 0 12px 0" }}>{channel.details}</p>
                    <div style={{ fontSize: "14px", color: "#334e68" }}>
                      <strong>Email:</strong> <a href={`mailto:${channel.email}`} style={{ color: "#123c69", textDecoration: "none" }}>{channel.email}</a>
                    </div>
                    <div style={{ fontSize: "14px", color: "#334e68", marginTop: "4px" }}>
                      <strong>Phone:</strong> {channel.phone}
                    </div>
                  </div>
                ))}
              </div>

              {/* Operating Areas Badge */}
              <div style={{ backgroundColor: "#102a43", color: "#280dc5", padding: "28px", borderRadius: "8px" }}>
                <h4 style={{ color: "#62b6cb", margin: "0 0 12px 0", fontSize: "16px", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Regional Operational Footprint
                </h4>
                <p style={{ fontSize: "14px", color: "#bcccdc", marginBottom: "16px" }}>
                  WAM conducts active community outreach across four main Kenyan counties:
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", fontSize: "13px" }}>
                  {operatingCounties.map((c, i) => (
                    <div key={i} style={{ color: "#d9e2ec" }}>
                      • <strong>{c.name}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Modern Contact Form */}
            <div style={{ backgroundColor: "#fff", padding: "36px", borderRadius: "12px", border: "1px solid #e1e8ed", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
              <h2 style={{ fontSize: "26px", color: "#102a43", marginTop: 0, marginBottom: "8px" }}>Send Us a Message</h2>
              <p style={{ color: "#627d98", fontSize: "14px", marginBottom: "28px" }}>
                Complete the inquiry form below and our team will get back to you within 24 to 48 hours.
              </p>

              {isSubmitted ? (
                <div style={{ backgroundColor: "#e6fffa", border: "1px solid #b2f5ea", color: "#234e52", padding: "24px", borderRadius: "8px", textAlign: "center" }}>
                  <h3 style={{ margin: "0 0 8px 0", fontSize: "20px" }}>Message Sent Successfully!</h3>
                  <p style={{ margin: 0, fontSize: "14px" }}>
                    Thank you for reaching out to WAM. A team member from our <strong>{formData.inquiryType}</strong> team will review your inquiry shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  
                  {/* Category & County Row */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "16px" }}>
                    <div>
                      <label style={labelStyle}>Inquiry Category *</label>
                      <select name="inquiryType" value={formData.inquiryType} onChange={handleChange} style={inputStyle}>
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Programme Referral">Client / Beneficiary Referral</option>
                        <option value="Institutional Partnership">Institutional Partnership / Donor</option>
                        <option value="Volunteer Application">Volunteer / Peer Educator</option>
                      </select>
                    </div>

                    <div>
                      <label style={labelStyle}>Location / County *</label>
                      <select name="county" value={formData.county} onChange={handleChange} style={inputStyle}>
                        <option value="Nairobi">Nairobi County</option>
                        <option value="Machakos">Machakos County</option>
                        <option value="Kitui">Kitui County</option>
                        <option value="Makueni">Makueni County</option>
                        <option value="Other">Other Region</option>
                      </select>
                    </div>
                  </div>

                  {/* Name & Phone Row */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "16px" }}>
                    <div>
                      <label htmlFor="name" style={labelStyle}>Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Jane Doe"
                        style={inputStyle}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" style={labelStyle}>Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+254 700 000 000"
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  {/* Email Row */}
                  <div style={{ marginBottom: "16px" }}>
                    <label htmlFor="email" style={labelStyle}>Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. jane@organization.org"
                      style={inputStyle}
                    />
                  </div>

                  {/* Subject Row */}
                  <div style={{ marginBottom: "16px" }}>
                    <label htmlFor="subject" style={labelStyle}>Subject *</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Inquiry regarding MLINDE partnership"
                      style={inputStyle}
                    />
                  </div>

                  {/* Message Row */}
                  <div style={{ marginBottom: "24px" }}>
                    <label htmlFor="message" style={labelStyle}>Message / Inquiry Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Please provide details about your inquiry or referral needs..."
                      style={inputStyle}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      padding: "14px 24px",
                      backgroundColor: "#123c69",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "6px",
                      fontWeight: "700",
                      fontSize: "15px",
                      cursor: "pointer",
                      transition: "background-color 0.2s ease-in-out",
                    }}
                  >
                    Submit Message &rarr;
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 3. CONFIDENTIALITY BANNER */}
      <section style={{ padding: "40px 0", backgroundColor: "#eaf2f8", borderTop: "1px solid #bcccdc" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 20px", textAlign: "center" }}>
          <h4 style={{ color: "#123c69", margin: "0 0 8px 0", fontSize: "16px" }}>Confidentiality & Safeguarding Notice</h4>
          <p style={{ color: "#486581", fontSize: "13px", margin: 0 }}>
            WAM strictly protects personal beneficiary information. All health and psychosocial referral requests sent through our communications channels are held in full clinical confidence.
          </p>
        </div>
      </section>

    </div>
  );
}

const labelStyle = {
  display: "block",
  fontSize: "13px",
  fontWeight: "700",
  color: "#102a43",
  marginBottom: "6px",
};

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  border: "1px solid #bcccdc",
  borderRadius: "6px",
  outline: "none",
  fontSize: "14px",
  boxSizing: "border-box",
  backgroundColor: "#fff",
};