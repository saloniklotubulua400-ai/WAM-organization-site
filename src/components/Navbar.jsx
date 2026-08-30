import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

// Import your logo image
import wamLogo from "../assets/wam-logo.png";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Auth Modal States
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login"); // 'login' or 'signup'
  
  // Form Input States
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/programmes?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (authMode === "signup" && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log(`Submitting ${authMode} data:`, formData);
    alert(`${authMode === "login" ? "Logged in" : "Signed up"} successfully!`);
    closeAuthModal();
  };

  return (
    <header className="wam-header">
      {/* 1. TOP UTILITY / SOCIAL NAVBAR */}
      <div className="top-utility-bar">
        <div className="container top-bar-container">
          
          {/* Left: Social Media Links */}
          <div className="top-social-links">
            <span className="top-bar-label">Connect:</span>
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

          {/* Middle: Integrated Search Bar */}
          <div className="top-search-wrapper">
            <form onSubmit={handleSearchSubmit} className="top-search-form">
              <input
                type="text"
                placeholder="Search programmes, resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" aria-label="Search">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              </button>
            </form>
          </div>

          {/* Right: Auth Action Buttons */}
          <div className="top-auth-actions">
            <button className="btn-login" onClick={() => openAuthModal("login")}>
              Log In
            </button>
            <button className="btn-signup" onClick={() => openAuthModal("signup")}>
              Sign Up
            </button>
          </div>

        </div>
      </div>

      {/* 2. MAIN NAVIGATION NAVBAR */}
      <nav className="main-navbar">
        <div className="container main-nav-container">
          
          {/* BRAND LOGO WITH TEXT BELOW */}
          <Link to="/" className="nav-brand-wrapper" aria-label="WAM Organization Homepage">
            <img 
              src={wamLogo} 
              alt="WAM Organization Official Crest" 
              className="brand-logo-img" 
            />
            <span className="brand-text">
              WAM<span className="brand-dot">.</span>
            </span>
          </Link>

          <button 
            className="mobile-toggle" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span className={isMobileMenuOpen ? "bar open" : "bar"}></span>
            <span className={isMobileMenuOpen ? "bar open" : "bar"}></span>
            <span className={isMobileMenuOpen ? "bar open" : "bar"}></span>
          </button>

          <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
            <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/programmes" onClick={() => setIsMobileMenuOpen(false)}>Programmes</Link></li>
            <li><Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link></li>
            <li><Link to="/impact" onClick={() => setIsMobileMenuOpen(false)}>Impact</Link></li>
            <li><Link to="/partnerships" onClick={() => setIsMobileMenuOpen(false)}>Partnerships</Link></li>
            <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
            
            <li className="nav-cta-item">
              <Link to="/get-involved" className="btn-get-involved" onClick={() => setIsMobileMenuOpen(false)}>
                Get Involved
              </Link>
            </li>

            {/* Mobile Auth Links */}
            <li className="mobile-auth-item">
              <button className="mobile-btn-login" onClick={() => openAuthModal("login")}>Log In</button>
              <button className="mobile-btn-signup" onClick={() => openAuthModal("signup")}>Sign Up</button>
            </li>
          </ul>
        </div>
      </nav>

      {/* 3. AUTHENTICATION POPUP MODAL */}
      {isAuthModalOpen && (
        <div className="auth-overlay" onClick={closeAuthModal}>
          <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
            <button className="auth-close-btn" onClick={closeAuthModal} aria-label="Close modal">
              &times;
            </button>
            
            <div className="auth-header">
              <h2>{authMode === "login" ? "Welcome Back" : "Create an Account"}</h2>
              <p>{authMode === "login" ? "Access your WAM portal" : "Join the WAM community today"}</p>
            </div>

            <div className="auth-tabs">
              <button 
                className={`tab-btn ${authMode === "login" ? "active" : ""}`}
                onClick={() => setAuthMode("login")}
              >
                Log In
              </button>
              <button 
                className={`tab-btn ${authMode === "signup" ? "active" : ""}`}
                onClick={() => setAuthMode("signup")}
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={handleAuthSubmit} className="auth-form">
              {authMode === "signup" && (
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {authMode === "signup" && (
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              )}

              <button type="submit" className="auth-submit-btn">
                {authMode === "login" ? "Log In" : "Sign Up"}
              </button>
            </form>

            <div className="auth-footer">
              {authMode === "login" ? (
                <p>
                  Don't have an account?{" "}
                  <span className="auth-switch-link" onClick={() => setAuthMode("signup")}>
                    Sign Up
                  </span>
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <span className="auth-switch-link" onClick={() => setAuthMode("login")}>
                    Log In
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}