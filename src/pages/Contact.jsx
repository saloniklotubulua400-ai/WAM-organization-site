import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  // --------------------------------------------------
  // FORM STATE
  // --------------------------------------------------
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    inquiryType: "General Enquiry",
    county: "Nairobi",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // --------------------------------------------------
  // HANDLE INPUT CHANGES
  // --------------------------------------------------
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    // Remove error message when user starts editing again
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  // --------------------------------------------------
  // HANDLE FORM SUBMISSION
  // --------------------------------------------------
  const handleSubmit = (event) => {
    event.preventDefault();

    // Prevent multiple submissions
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    // Simulate sending the message
    setTimeout(() => {
      try {
        // Mark submission as successful
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Clear the form
        setFormData(initialFormData);

        // Hide success message after 4 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 4000);
      } catch (error) {
        console.error("Contact form error:", error);

        setIsSubmitting(false);
        setErrorMessage(
          "We could not process your message. Please try again."
        );
      }
    }, 1000);
  };

  // --------------------------------------------------
  // CONTACT CHANNELS
  // --------------------------------------------------
  const contactChannels = [
    {
      title: "Main Office & General Enquiries",
      email: "wamo2021@gmail.com",
      phone: "+254 (0) 720 914 797",
      details:
        "For general organizational inquiries, public relations, and administrative support.",
    },
    {
      title: "Programme & Referral Desk",
      email: "wamo2021@gmail.com",
      phone: "+254 (0) 720 914 797",
      details:
        "Direct contact line for MLINDE, MENTOR, and WELLNESS clinical and psychosocial referrals.",
    },
    {
      title: "Partnerships & Institutional Support",
      email: "wamo2021@gmail.com",
      phone: "+254 (0) 720 914 797",
      details:
        "For donor agencies, county health departments, and NGO consortium discussions.",
    },
  ];

  // --------------------------------------------------
  // OPERATING COUNTIES
  // --------------------------------------------------
  const operatingCounties = [
    {
      name: "Nairobi County",
      hub: "Nairobi Central Hub",
    },
    {
      name: "Machakos County",
      hub: "Machakos Town Office",
    },
    {
      name: "Kitui County",
      hub: "Kitui Field Desk",
    },
    {
      name: "Makueni County",
      hub: "Makueni Community Desk",
    },
  ];

  return (
    <div className="contact-page">

      {/* ================================================
          HERO SECTION
      ================================================= */}
      <section className="contact-hero">
        <div className="contact-container">
          <span className="contact-eyebrow">
            Reach Out To Us
          </span>

          <h1 className="contact-hero-title">
            Contact WAM Headquarters & Field Desk
          </h1>

          <p className="contact-hero-lead">
            Whether you are seeking health support, referring a beneficiary,
            or exploring partnerships, our team is ready to respond with
            openness, active listening, and dedicated care.
          </p>
        </div>
      </section>

      {/* ================================================
          MAIN CONTACT SECTION
      ================================================= */}
      <section className="contact-main-section">
        <div className="contact-container">

          <div className="contact-grid">

            {/* ==========================================
                LEFT COLUMN
            =========================================== */}
            <div className="contact-info-col">

              <span className="section-subtitle">
                Direct Communication
              </span>

              <h2 className="section-title">
                Connect With Our Specific Desks
              </h2>

              {/* Contact Channels */}
              <div className="channels-list">

                {contactChannels.map((channel, index) => (
                  <div
                    key={index}
                    className="channel-card"
                  >
                    <h3 className="channel-card-title">
                      {channel.title}
                    </h3>

                    <p className="channel-card-desc">
                      {channel.details}
                    </p>

                    <div className="channel-meta">

                      {/* Email */}
                      <div className="channel-meta-item">
                        <svg
                          className="meta-icon"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>

                        <a
                          href={`mailto:${channel.email}`}
                        >
                          {channel.email}
                        </a>
                      </div>

                      {/* Phone */}
                      <div className="channel-meta-item">
                        <svg
                          className="meta-icon"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>

                        <a
                          href={`tel:${channel.phone.replace(
                            /[^+\d]/g,
                            ""
                          )}`}
                        >
                          {channel.phone}
                        </a>
                      </div>

                    </div>
                  </div>
                ))}

              </div>

              {/* Regional Footprint */}
              <div className="footprint-card">

                <h4 className="footprint-title">
                  Regional Operational Footprint
                </h4>

                <p className="footprint-desc">
                  Active community outreach across strategic Kenyan hubs:
                </p>

                <div className="footprint-grid">

                  {operatingCounties.map((county, index) => (
                    <div
                      key={index}
                      className="footprint-item"
                    >
                      <span
                        className="footprint-badge"
                        aria-hidden="true"
                      >
                        ✓
                      </span>

                      <div>
                        <strong>{county.name}</strong>

                        <span className="hub-tag">
                          {county.hub}
                        </span>
                      </div>
                    </div>
                  ))}

                </div>
              </div>

            </div>

            {/* ==========================================
                RIGHT COLUMN - CONTACT FORM
            =========================================== */}
            <div className="contact-form-wrapper">

              <h2 className="form-title">
                Send Us a Message
              </h2>

              <p className="form-subtitle">
                Complete the inquiry form below and our team will get
                back to you within 24 to 48 hours.
              </p>

              {/* Error Message */}
              {errorMessage && (
                <div
                  className="error-alert"
                  role="alert"
                  aria-live="assertive"
                >
                  {errorMessage}
                </div>
              )}

              {/* Success Message */}
              {isSubmitted ? (
                <div
                  className="success-alert"
                  role="status"
                  aria-live="polite"
                >
                  <div className="success-icon">
                    ✓
                  </div>

                  <h3 className="success-alert-title">
                    Message Sent Successfully!
                  </h3>

                  <p className="success-alert-body">
                    Thank you for reaching out. A representative from
                    our{" "}
                    <strong>
                      {formData.inquiryType}
                    </strong>{" "}
                    team will review your inquiry shortly.
                  </p>
                </div>
              ) : (

                /* Contact Form */
                <form
                  onSubmit={handleSubmit}
                  className="contact-form"
                >

                  {/* Inquiry + County */}
                  <div className="form-row">

                    <div className="form-group">
                      <label
                        className="form-label"
                        htmlFor="inquiryType"
                      >
                        Inquiry Category *
                      </label>

                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="form-select"
                        required
                      >
                        <option value="General Enquiry">
                          General Enquiry
                        </option>

                        <option value="Programme Referral">
                          Client / Beneficiary Referral
                        </option>

                        <option value="Institutional Partnership">
                          Institutional Partnership / Donor
                        </option>

                        <option value="Volunteer Application">
                          Volunteer / Peer Educator
                        </option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label
                        className="form-label"
                        htmlFor="county"
                      >
                        Location / County *
                      </label>

                      <select
                        id="county"
                        name="county"
                        value={formData.county}
                        onChange={handleChange}
                        className="form-select"
                        required
                      >
                        <option value="Nairobi">
                          Nairobi County
                        </option>

                        <option value="Machakos">
                          Machakos County
                        </option>

                        <option value="Kitui">
                          Kitui County
                        </option>

                        <option value="Makueni">
                          Makueni County
                        </option>

                        <option value="Other">
                          Other Region
                        </option>
                      </select>
                    </div>

                  </div>

                  {/* Name + Phone */}
                  <div className="form-row">

                    <div className="form-group">
                      <label
                        htmlFor="name"
                        className="form-label"
                      >
                        Full Name *
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        minLength="2"
                        placeholder="Jane Doe"
                        className="form-input"
                        autoComplete="name"
                      />
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="phone"
                        className="form-label"
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+254 700 000 000"
                        className="form-input"
                        autoComplete="tel"
                      />
                    </div>

                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label
                      htmlFor="email"
                      className="form-label"
                    >
                      Email Address *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@organization.org"
                      className="form-input"
                      autoComplete="email"
                    />
                  </div>

                  {/* Subject */}
                  <div className="form-group">
                    <label
                      htmlFor="subject"
                      className="form-label"
                    >
                      Subject *
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      minLength="3"
                      placeholder="e.g. Partnership inquiry regarding MLINDE"
                      className="form-input"
                    />
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label
                      htmlFor="message"
                      className="form-label"
                    >
                      Message Details *
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      minLength="10"
                      placeholder="Write your message here..."
                      className="form-textarea"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn-submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting
                      ? "Sending..."
                      : "Send Message"}

                    {!isSubmitting && (
                      <svg
                        className="btn-icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    )}
                  </button>

                </form>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* ================================================
          CONFIDENTIALITY BANNER
      ================================================= */}
      <section className="confidentiality-banner">

        <div className="contact-container">

          <div className="confidentiality-content">

            <div className="shield-icon">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>

            <div>
              <h4 className="confidentiality-title">
                Confidentiality & Safeguarding Notice
              </h4>

              <p className="confidentiality-desc">
                WAM strictly protects personal beneficiary information.
                All health and psychosocial referral requests sent through
                our communication channels are handled under strict
                clinical confidentiality.
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}