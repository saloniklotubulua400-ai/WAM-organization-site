import React, { useState } from "react";
import "./Contact.css";

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
    <div className="wam-contact-page">
      {/* 1. HERO HEADER */}
      <section className="contact-hero">
        <div className="contact-container">
          <div className="contact-hero-content">
            <span className="contact-eyebrow">Reach Out To Us</span>
            <h1 className="contact-hero-title">Contact WAM Headquarters & Field Desk</h1>
            <p className="contact-hero-lead">
              Whether you are seeking personal health support, referring a beneficiary, or exploring institutional partnerships, our team is ready to respond. WAM promotes openness, transparency, active listening, and constructive engagement.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION */}
      <section className="contact-main-section">
        <div className="contact-container">
          <div className="contact-grid">
            
            {/* Left Column */}
            <div>
              <span className="section-subtitle">Direct Communication</span>
              <h2 className="section-title">Connect With Our Specific Desks</h2>

              <div className="contact-channels-list">
                {contactChannels.map((channel, idx) => (
                  <div key={idx} className="channel-card">
                    <h3 className="channel-card-title">{channel.title}</h3>
                    <p className="channel-card-desc">{channel.details}</p>
                    <div className="channel-detail">
                      <strong>Email:</strong> <a href={`mailto:${channel.email}`}>{channel.email}</a>
                    </div>
                    <div className="channel-detail">
                      <strong>Phone:</strong> {channel.phone}
                    </div>
                  </div>
                ))}
              </div>

              <div className="footprint-card">
                <h4 className="footprint-title">Regional Operational Footprint</h4>
                <p className="footprint-desc">WAM conducts active community outreach across four main Kenyan counties:</p>
                <div className="footprint-grid">
                  {operatingCounties.map((c, i) => (
                    <div key={i} className="footprint-item">
                      <span className="check-mark">✓</span> {c.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="contact-form-wrapper">
              <h2 className="form-title">Send Us a Message</h2>
              <p className="form-subtitle">Complete the inquiry form below and our team will get back to you within 24 to 48 hours.</p>

              {isSubmitted ? (
                <div className="success-alert">
                  <h3 className="success-alert-title">Message Sent Successfully!</h3>
                  <p className="success-alert-body">
                    Thank you for reaching out to WAM. A team member from our <strong>{formData.inquiryType}</strong> team will review your inquiry.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row form-row--two-col">
                    <div className="form-group">
                      <label className="form-label">Inquiry Category *</label>
                      <select name="inquiryType" value={formData.inquiryType} onChange={handleChange} className="form-select">
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Programme Referral">Client / Beneficiary Referral</option>
                        <option value="Institutional Partnership">Institutional Partnership / Donor</option>
                        <option value="Volunteer Application">Volunteer / Peer Educator</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Location / County *</label>
                      <select name="county" value={formData.county} onChange={handleChange} className="form-select">
                        <option value="Nairobi">Nairobi County</option>
                        <option value="Machakos">Machakos County</option>
                        <option value="Kitui">Kitui County</option>
                        <option value="Makueni">Makueni County</option>
                        <option value="Other">Other Region</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row form-row--two-col">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required placeholder="e.g. Jane Doe" className="form-input" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+254 700 000 000" className="form-input" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="e.g. jane@organization.org" className="form-input" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">Subject *</label>
                      <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} required placeholder="e.g. Inquiry regarding MLINDE partnership" className="form-input" />
                    </div>
                  </div>

                  <div className="form-group form-group--full">
                    <label htmlFor="message" className="form-label">Message / Inquiry Details *</label>
                    <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required placeholder="Please provide details about your inquiry..." className="form-textarea" />
                  </div>

                  <button type="submit" className="btn-submit">Submit Message &rarr;</button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 3. CONFIDENTIALITY BANNER */}
      <section className="confidentiality-banner">
        <div className="confidentiality-content">
          <h4 className="confidentiality-title">Confidentiality & Safeguarding Notice</h4>
          <p className="confidentiality-desc">
            WAM strictly protects personal beneficiary information. All health and psychosocial referral requests sent through our communications channels are held in full clinical confidence.
          </p>
        </div>
      </section>
    </div>
  );
}