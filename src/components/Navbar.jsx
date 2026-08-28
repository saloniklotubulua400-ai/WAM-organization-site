import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
// IMPORT YOUR IMAGE LOGO FROM ASSETS
import logoImg from "../assets/wam-logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  // Handle shrink & shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programmes", path: "/programmes" },
    { name: "Services", path: "/services" },
    { name: "Partnerships", path: "/partnerships" },
    { name: "Impact", path: "/impact" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-container">
        {/* LOGO BRAND SECTION */}
        <Link to="/" className="navbar-logo" aria-label="WAM Homepage">
          <img src={logoImg} alt="WAM Logo" className="logo-image" />
          <div className="logo-text-group">
            <span className="logo-title">
              WAM<span className="logo-dot">.</span>
            </span>
            <span className="logo-subtext">WELLNESS APPROACH MENTORS</span>
          </div>
        </Link>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          className={`menu-toggle ${isMobileOpen ? "is-open" : ""}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-expanded={isMobileOpen}
          aria-label="Toggle Navigation"
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>

        {/* NAVIGATION LINKS */}
        <nav className={`nav-menu ${isMobileOpen ? "active" : ""}`}>
          <div className="nav-links">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="nav-cta-wrapper">
            <Link to="/get-involved" className="nav-button">
              Get Involved
            </Link>
          </div>
        </nav>

        {/* MOBILE OVERLAY BACKDROP */}
        {isMobileOpen && (
          <div
            className="nav-overlay"
            onClick={() => setIsMobileOpen(false)}
            aria-hidden="true"
          />
        )}
      </div>
    </header>
  );
}