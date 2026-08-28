import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setNewsletterEmail("");
      }, 4000);
    }
  };

  return (
    <footer className="footer">
      {/* Top Newsletter CTA Banner */}
      <div className="footer-newsletter-section">
        <div className="container newsletter-container">
          <div className="newsletter-text">
            <h3>Stay Updated on Our Impact</h3>
            <p>Subscribe to receive quarterly community reports and initiative updates.</p>
          </div>
          
          <div className="newsletter-form-wrapper">
            {isSubscribed ? (
              <p className="newsletter-success">✓ Thank you for subscribing to WAM updates!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="container footer-grid">
        {/* Brand Column */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            WAM<span className="logo-dot">.</span>
          </Link>
          <p className="brand-description">
            Building healthier, safer, and resilient communities through rights advocacy, health linkages, and psychosocial support across Kenya.
          </p>
          <div className="operating-counties">
            <span className="county-title">Operating In:</span>
            <div className="county-badges">
              <span>Nairobi</span>
              <span>Machakos</span>
              <span>Kitui</span>
              <span>Makueni</span>
            </div>
          </div>
        </div>

        {/* Quick Navigation Column */}
        <div className="footer-column">
          <h4>Organization</h4>
          <Link to="/about">About Us</Link>
          <Link to="/programmes">Core Programmes</Link>
          <Link to="/services">Services Matrix</Link>
          <Link to="/impact">Measurable Impact</Link>
          <Link to="/get-involved">Get Involved</Link>
        </div>

        {/* Core Initiatives Column */}
        <div className="footer-column">
          <h4>Key Initiatives</h4>
          <Link to="/programmes#mlinde">MLINDE (Child Protection)</Link>
          <Link to="/programmes#mentor">MENTOR (Youth SRH)</Link>
          <Link to="/programmes#wellness">WELLNESS (Community Support)</Link>
          <Link to="/resources">Publications & Toolkits</Link>
        </div>

        {/* Contact & Desk Info */}
        <div className="footer-column">
          <h4>Direct Contacts</h4>
          <p className="contact-item">
            <strong>General:</strong> info@wam.or.ke
          </p>
          <p className="contact-item">
            <strong>Referrals:</strong> wamo2021@gmail.com
          </p>
          <p className="contact-item">
            <strong>Phone:</strong> +254 (0) 720914797
          </p>
          <p className="contact-item">
            <strong>Location:</strong> Kenya
          </p>
        </div>
      </div>

      {/* Bottom Bar & Safeguarding Notice */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="copyright-text">
            © {new Date().getFullYear()} WAM. All rights reserved.
          </p>
          <p className="safeguarding-text">
            WAM is committed to child protection, data privacy, and confidential health referral standards.
          </p>
        </div>
      </div>
    </footer>
  );
}