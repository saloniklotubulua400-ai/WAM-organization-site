import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const impactMetrics = [
    { value: "15,000+", label: "Youth & Children Reached" },
    { value: "4 Counties", label: "Active Regional Footprint" },
    { value: "3 Core", label: "Structured Initiatives" },
    { value: "98%", label: "Clinical Referral Rate" },
  ];

  const quickPrograms = [
    {
      code: "MLINDE",
      title: "Child Safeguarding",
      desc: "Rights protection & school health clubs across primary institutions.",
      link: "/programmes#mlinde",
      color: "#04724d",
    },
    {
      code: "MENTOR",
      title: "Youth SRH & Skills",
      desc: "Peer facilitation, reproductive health & career guidance.",
      link: "/programmes#mentor",
      color: "#62b6cb",
    },
    {
      code: "WELLNESS",
      title: "Community Health",
      desc: "Psychosocial support groups & substance use screening (SBIRT).",
      link: "/programmes#wellness",
      color: "#d97706",
    },
  ];

  return (
    <section style={{ backgroundColor: "#102a43", color: "#ffffff", padding: "80px 0 60px", overflow: "hidden" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        
        {/* HERO MAIN HEADER & CTA BLOCK */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", alignItems: "center" }}>
          
          {/* Left Text Column */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(98, 182, 203, 0.15)", padding: "6px 14px", borderRadius: "20px", marginBottom: "20px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#62b6cb" }}></span>
              <span style={{ color: "#62b6cb", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px" }}>
                Civil Society & Community Impact
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(38px, 5vw, 56px)", fontWeight: "800", lineHeight: "1.15", margin: "0 0 20px 0", letterSpacing: "-0.5px" }}>
              Building Stronger, Resilient Communities Across Kenya
            </h1>

            <p style={{ fontSize: "18px", color: "#d9e2ec", lineHeight: "1.6", margin: "0 0 32px 0", maxWidth: "540px" }}>
              WAM drives rights advocacy, youth reproductive health literacy, child protection, and community psychosocial support through actionable field interventions.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
              <Link
                to="/get-involved"
                style={{
                  padding: "14px 28px",
                  backgroundColor: "#62b6cb",
                  color: "#102a43",
                  borderRadius: "6px",
                  fontWeight: "700",
                  textDecoration: "none",
                  fontSize: "15px",
                  boxShadow: "0 4px 14px rgba(98, 182, 203, 0.3)",
                }}
              >
                Get Involved &rarr;
              </Link>

              <Link
                to="/programmes"
                style={{
                  padding: "14px 28px",
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  border: "1px solid #334e68",
                  borderRadius: "6px",
                  fontWeight: "600",
                  textDecoration: "none",
                  fontSize: "15px",
                }}
              >
                Explore Programmes
              </Link>
            </div>
          </div>

          {/* Right Column: Quick Initiative Launch Cards */}
          <div style={{ display: "grid", gap: "16px" }}>
            <span style={{ color: "#829ab1", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px" }}>
              Core Action Pathways
            </span>

            {quickPrograms.map((prog) => (
              <a
                key={prog.code}
                href={prog.link}
                style={{
                  display: "block",
                  backgroundColor: "#123c69",
                  padding: "20px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  borderLeft: `4px solid ${prog.color}`,
                  transition: "transform 0.2s ease",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "800", color: prog.color, letterSpacing: "0.5px" }}>
                    {prog.code}
                  </span>
                  <span style={{ color: "#829ab1", fontSize: "14px" }}>&rarr;</span>
                </div>
                <h3 style={{ fontSize: "16px", color: "#ffffff", margin: "0 0 4px 0" }}>{prog.title}</h3>
                <p style={{ fontSize: "13px", color: "#bcccdc", margin: 0 }}>{prog.desc}</p>
              </a>
            ))}
          </div>

        </div>

        {/* METRICS STRIP */}
        <div style={{ marginTop: "70px", paddingTop: "40px", borderTop: "1px solid rgba(255, 255, 255, 0.1)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "24px" }}>
          {impactMetrics.map((metric, idx) => (
            <div key={idx}>
              <span style={{ display: "block", fontSize: "32px", fontWeight: "800", color: "#62b6cb", lineHeight: "1" }}>
                {metric.value}
              </span>
              <span style={{ fontSize: "13px", color: "#bcccdc", marginTop: "6px", display: "block" }}>
                {metric.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}