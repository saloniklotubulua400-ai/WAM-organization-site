import React, { useState, useMemo } from "react";
import "./Contact.css";

const MESSAGE_MAX_LENGTH = 600;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedKey, setCopiedKey] = useState(null);

  // --------------------------------------------------
  // FIELD-LEVEL VALIDATION
  // --------------------------------------------------
  const fieldErrors = useMemo(() => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Please enter your full name.";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name looks too short.";
    }

    if (!formData.email.trim()) {
      errors.email = "Please enter an email address.";
    } else if (!EMAIL_PATTERN.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      errors.subject = "Please add a short subject.";
    } else if (formData.subject.trim().length < 3) {
      errors.subject = "Subject looks too short.";
    }

    if (!formData.message.trim()) {
      errors.message = "Please add a message.";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Please add a bit more detail (at least 10 characters).";
    }

    return errors;
  }, [formData]);

  const isFormValid = Object.keys(fieldErrors).length === 0;

  // --------------------------------------------------
  // HANDLE INPUT CHANGES
  // --------------------------------------------------
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "message" && value.length > MESSAGE_MAX_LENGTH) {
      return;
    }

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const showFieldError = (field) => touched[field] && fieldErrors[field];

  // --------------------------------------------------
  // HANDLE FORM SUBMISSION
  // --------------------------------------------------
  const handleSubmit = (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    // Mark every field as touched so any remaining errors surface.
    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    });

    if (!isFormValid) {
      setErrorMessage("Please fix the highlighted fields before sending.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    // Simulate sending the message
    setTimeout(() => {
      try {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData(initialFormData);
        setTouched({});

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
  // COPY TO CLIPBOARD
  // --------------------------------------------------
  const copyToClipboard = async (value, key) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 1800);
    } catch {
      // Clipboard API unavailable — the link itself still works.
    }
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
    { name: "Nairobi County", hub: "Nairobi Central Hub" },
    { name: "Machakos County", hub: "Machakos Town Office" },
    { name: "Kitui County", hub: "Kitui Field Desk" },
    { name: "Makueni County", hub: "Makueni Community Desk" },
  ];

  // --------------------------------------------------
  // OFFICE HOURS
  // --------------------------------------------------
  const officeHours = [
    { day: "Monday – Friday", hours: "8:00 AM – 5:00 PM" },
    { day: "Saturday", hours: "9:00 AM – 1:00 PM" },
    { day: "Sunday & Public Holidays", hours: "Closed (Emergency GBV/PEP line remains active)" },
  ];

  const messageCharsLeft = MESSAGE_MAX_LENGTH - formData.message.length;

  return (
    <div className="contact-page">
      {/* ================================================
          HERO SECTION
      ================================================= */}
      <section className="contact-hero">
        <div className="contact-container">
          <span className="contact-eyebrow">Reach Out To Us</span>

          <h1 className="contact-hero-title">Contact WAM Headquarters & Field Desk</h1>

          <p className="contact-hero-lead">
            Whether you are seeking health support, referring a beneficiary, or exploring
            partnerships, our team is ready to respond with openness, active listening, and
            dedicated care.
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
              <span className="section-subtitle">Direct Communication</span>
              <h2 className="section-title">Connect With Our Specific Desks</h2>

              {/* Contact Channels */}
              <div className="channels-list">
                {contactChannels.map((channel, index) => {
                  const emailKey = `email-${index}`;
                  const phoneKey = `phone-${index}`;
                  return (
                    <div key={index} className="channel-card">
                      <h3 className="channel-card-title">{channel.title}</h3>
                      <p className="channel-card-desc">{channel.details}</p>

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
                          <a href={`mailto:${channel.email}`}>{channel.email}</a>
                          <button
                            type="button"
                            className="copy-btn"
                            onClick={() => copyToClipboard(channel.email, emailKey)}
                            aria-label={`Copy ${channel.title} email address`}
                          >
                            {copiedKey === emailKey ? "Copied" : "Copy"}
                          </button>
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
                          <a href={`tel:${channel.phone.replace(/[^+\d]/g, "")}`}>
                            {channel.phone}
                          </a>
                          <button
                            type="button"
                            className="copy-btn"
                            onClick={() => copyToClipboard(channel.phone, phoneKey)}
                            aria-label={`Copy ${channel.title} phone number`}
                          >
                            {copiedKey === phoneKey ? "Copied" : "Copy"}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Office Hours */}
              <div className="footprint-card office-hours-card">
                <h4 className="footprint-title">Office Hours</h4>
                <p className="footprint-desc">When our desks are staffed and ready to respond:</p>
                <ul className="office-hours-list">
                  {officeHours.map((entry) => (
                    <li key={entry.day} className="office-hours-item">
                      <span className="office-hours-day">{entry.day}</span>
                      <span className="office-hours-time">{entry.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Regional Footprint */}
              <div className="footprint-card">
                <h4 className="footprint-title">Regional Operational Footprint</h4>
                <p className="footprint-desc">Active community outreach across strategic Kenyan hubs:</p>

                <div className="footprint-grid">
                  {operatingCounties.map((county, index) => (
                    <div key={index} className="footprint-item">
                      <span className="footprint-badge" aria-hidden="true">
                        ✓
                      </span>
                      <div>
                        <strong>{county.name}</strong>
                        <span className="hub-tag">{county.hub}</span>
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
              <h2 className="form-title">Send Us a Message</h2>
              <p className="form-subtitle">
                Complete the inquiry form below and our team will get back to you within 24 to 48
                hours.
              </p>

              {/* Error Message */}
              {errorMessage && (
                <div className="error-alert" role="alert" aria-live="assertive">
                  {errorMessage}
                </div>
              )}

              {/* Success Message */}
              {isSubmitted ? (
                <div className="success-alert" role="status" aria-live="polite">
                  <div className="success-icon">✓</div>
                  <h3 className="success-alert-title">Message Sent Successfully!</h3>
                  <p className="success-alert-body">
                    Thank you for reaching out. A representative from our{" "}
                    <strong>{formData.inquiryType}</strong> team will review your inquiry
                    shortly.
                  </p>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  {/* Inquiry + County */}
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="inquiryType">
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
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Programme Referral">Client / Beneficiary Referral</option>
                        <option value="Institutional Partnership">
                          Institutional Partnership / Donor
                        </option>
                        <option value="Volunteer Application">Volunteer / Peer Educator</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="county">
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
                        <option value="Nairobi">Nairobi County</option>
                        <option value="Machakos">Machakos County</option>
                        <option value="Kitui">Kitui County</option>
                        <option value="Makueni">Makueni County</option>
                        <option value="Other">Other Region</option>
                      </select>
                    </div>
                  </div>

                  {/* Name + Phone */}
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        minLength="2"
                        placeholder="Jane Doe"
                        className={`form-input ${showFieldError("name") ? "form-input--error" : ""}`}
                        autoComplete="name"
                        aria-invalid={Boolean(showFieldError("name"))}
                        aria-describedby={showFieldError("name") ? "name-error" : undefined}
                      />
                      {showFieldError("name") && (
                        <span id="name-error" className="field-error">
                          {fieldErrors.name}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
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
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      placeholder="jane@organization.org"
                      className={`form-input ${showFieldError("email") ? "form-input--error" : ""}`}
                      autoComplete="email"
                      aria-invalid={Boolean(showFieldError("email"))}
                      aria-describedby={showFieldError("email") ? "email-error" : undefined}
                    />
                    {showFieldError("email") && (
                      <span id="email-error" className="field-error">
                        {fieldErrors.email}
                      </span>
                    )}
                  </div>

                  {/* Subject */}
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Subject *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      minLength="3"
                      placeholder="e.g. Partnership inquiry regarding MLINDE"
                      className={`form-input ${showFieldError("subject") ? "form-input--error" : ""}`}
                      aria-invalid={Boolean(showFieldError("subject"))}
                      aria-describedby={showFieldError("subject") ? "subject-error" : undefined}
                    />
                    {showFieldError("subject") && (
                      <span id="subject-error" className="field-error">
                        {fieldErrors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <div className="form-label-row">
                      <label htmlFor="message" className="form-label">
                        Message Details *
                      </label>
                      <span className="char-counter">{messageCharsLeft} characters left</span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      minLength="10"
                      maxLength={MESSAGE_MAX_LENGTH}
                      placeholder="Write your message here..."
                      className={`form-textarea ${showFieldError("message") ? "form-input--error" : ""}`}
                      aria-invalid={Boolean(showFieldError("message"))}
                      aria-describedby={showFieldError("message") ? "message-error" : undefined}
                    />
                    {showFieldError("message") && (
                      <span id="message-error" className="field-error">
                        {fieldErrors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn-submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
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
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>

            <div>
              <h4 className="confidentiality-title">Confidentiality & Safeguarding Notice</h4>
              <p className="confidentiality-desc">
                WAM strictly protects personal beneficiary information. All health and
                psychosocial referral requests sent through our communication channels are
                handled under strict clinical confidentiality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}