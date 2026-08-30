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
      {/* 1. TOP NGO CTA BANNER */}
      <div className="footer-cta-banner">
        <div className="container cta-banner-container">
          <div className="cta-banner-text">
            <h3>Support Our Community Work</h3>
            <p>Your contribution directly powers local health initiatives, youth empowerment, and advocacy.</p>
          </div>
          <div className="cta-banner-actions">
            <Link to="/get-involved" className="btn-footer-donate">Donate Now</Link>
            <Link to="/get-involved" className="btn-footer-volunteer">Volunteer</Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTENT */}
      <div className="container footer-grid">
        {/* NGO Brand & Identity Column */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            WAM<span className="logo-dot">.</span>
          </Link>
          <p className="brand-description">
            A registered Non-Governmental Organization dedicated to advancing community health, social justice, human rights advocacy, and youth development across Kenya.
          </p>

          <div className="ngo-reg-info">
            <span><strong>Reg No:</strong> NGO/REG/2021/0492</span>
            <span><strong>Status:</strong> Tax-Exempt Non-Profit</span>
          </div>

          {/* Social Media Links */}
          <div className="social-links-wrapper">
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>
              <a href="https://wa.me/254720914797" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 0 0 1.333 4.993L2 22l5.233-1.237a9.982 9.982 0 0 0 4.779 1.221h.004c5.505 0 9.988-4.478 9.989-9.985A9.983 9.983 0 0 0 12.012 2zm5.838 14.51c-.244.686-1.437 1.309-1.986 1.365-.512.053-1.18.077-3.415-.845-2.858-1.178-4.697-4.086-4.84-4.276-.142-.191-1.162-1.547-1.162-2.95 0-1.403.734-2.093.994-2.38.261-.285.568-.356.757-.356.19 0 .38.002.546.01.177.008.415-.067.649.494.244.584.83 2.025.902 2.17.072.144.119.313.024.503-.095.191-.143.31-.285.476-.143.167-.3.373-.428.502-.143.143-.292.3-.125.586.167.285.74 1.22 1.587 1.974 1.088.97 2.006 1.272 2.292 1.415.285.143.452.119.618-.072.167-.19.713-.832.903-1.117.19-.285.38-.238.641-.143.261.095 1.662.784 1.947.927.285.143.475.214.546.333.072.12.072.69-.172 1.376z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Focus Areas Column */}
        <div className="footer-column">
          <h4>Key Focus Areas</h4>
          <ul>
            <li><Link to="/programmes">Community Health Outreach</Link></li>
            <li><Link to="/programmes">Youth Rights & Advocacy</Link></li>
            <li><Link to="/programmes">Mental Health Support</Link></li>
            <li><Link to="/programmes">Gender-Based Violence Prevention</Link></li>
            <li><Link to="/programmes">Biomedical & Referral Links</Link></li>
          </ul>
        </div>

        {/* Quick Links Column */}
        <div className="footer-column">
          <h4>About & Governance</h4>
          <ul>
            <li><Link to="/about">Our Mission & Vision</Link></li>
            <li><Link to="/about">Board & Leadership</Link></li>
            <li><Link to="/impact">Annual Reports & Audits</Link></li>
            <li><Link to="/partnerships">Partner With Us</Link></li>
            <li><Link to="/contact">Careers & Volunteering</Link></li>
          </ul>
        </div>

        {/* Contact & Emergency Support Column */}
        <div className="footer-column">
          <h4>Contact & Helplines</h4>
          <p className="contact-detail"><strong>Main Office:</strong> Nairobi, Kenya</p>
          <p className="contact-detail"><strong>General Enquiries:</strong> info@wam.or.ke</p>
          <p className="contact-detail"><strong>Support Line:</strong> +254 (0) 720 914 797</p>
          
          <div className="emergency-callout">
            <span className="emergency-title">24/7 Crisis Support:</span>
            <p>If you or someone you know requires urgent assistance, call our toll-free support helpline.</p>
          </div>
        </div>
      </div>

      {/* 3. NEWSLETTER INLINE SECTION */}
      <div className="footer-newsletter-row">
        <div className="container newsletter-row-container">
          <div className="newsletter-info">
            <h5>Subscribe to Our Newsletter</h5>
            <p>Get quarterly updates on field impact, policy advocacy, and community stories.</p>
          </div>
          <div className="newsletter-form-container">
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

      {/* 4. LEGAL & COPYRIGHT BOTTOM BAR */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="copyright-text">
            © {new Date().getFullYear()} WAM Organization. All rights reserved.
          </p>
          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="divider">•</span>
            <Link to="/terms">Terms of Service</Link>
            <span className="divider">•</span>
            <Link to="/safeguarding">Safeguarding & Ethics</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}