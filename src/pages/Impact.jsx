import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Impact.css";

export default function Impact() {
  // 1. TYPEWRITER EFFECT SETUP
  const phrases = [
    "Sustaining Care is Our Mission.",
    "Bridging Gaps to Healthcare.",
    "Empowering Communities Daily.",
    "Transforming Referrals into Real Care."
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = phrases[phraseIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === currentFullText) {
      // Pause at the end of the phrase before deleting
      typingSpeed = 2000;
    } else if (isDeleting && displayedText === "") {
      // Move to the next phrase after deleting
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      typingSpeed = 500;
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? currentFullText.substring(0, prev.length - 1)
          : currentFullText.substring(0, prev.length + 1)
      );

      if (displayedText === currentFullText && !isDeleting) {
        setIsDeleting(true);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIndex]);

  // 2. SHORTENED CARDS DATA
  const sections = [
    {
      number: "01",
      title: "Bridging the Gap Through Linkage to Care",
      body: [
        "At Wellness Approach Mentors (WAM), reaching a person is only the beginning. Through targeted outreach, our mentors bridge critical gaps, connecting individuals to vital health and social services.",
        "By maintaining trusted community networks and consistent follow-ups, we reduce missed opportunities, encourage timely care-seeking, and ensure no one feels abandoned after a referral.",
      ],
    },
    {
      number: "02",
      title: "Making Health Financing Understandable",
      body: [
        "Health financing can be overwhelming for vulnerable families. WAM simplifies complex information regarding insurance, healthcare options, and available resources.",
        "Through mentorship and education, we empower individuals to understand their rights and access financial assistance, ensuring monetary barriers never block essential care.",
      ],
    },
    {
      number: "03",
      title: "Psychosocial Support That Begins With Listening",
      body: [
        "Sometimes, the most powerful intervention is simply listening. WAM provides safe, non-judgmental spaces for individuals facing emotional and personal challenges.",
        "Through empathetic conversations, basic counselling, and targeted referrals, we help people regain hope, dignity, and resilience as core pillars of wellbeing.",
      ],
    },
    {
      number: "04",
      title: "Taking Services Closer to Communities",
      body: [
        "Distance, stigma, and lack of awareness often block essential services. WAM takes information and mentorship directly to where people live and work.",
        "Rather than waiting for individuals to seek help, proactive outreach builds trust, breaks down barriers, and connects vulnerable populations to the care they deserve.",
      ],
    },
    {
      number: "05",
      title: "Empathy as a Tool for Transformation",
      body: [
        "At WAM, empathy is a practical tool for transformation. We approach every individual with respect and patience, honoring their unique lived experiences.",
        "By listening first and avoiding assumptions, we build strong trust between communities and service providers, encouraging people to seek support without fear.",
      ],
    },
    {
      number: "06",
      title: "Innovation for Better Community Engagement",
      body: [
        "WAM embraces practical innovation to improve how communities access support. From peer networks to digital tools, we make engagement more responsive.",
        "By combining community knowledge with creative strategies, we strengthen service linkages and help communities become active partners in their own growth.",
      ],
    },
    {
      number: "07",
      title: "Turning Referrals Into Real Connections",
      body: [
        "A referral is never the end of an intervention. Our mentors guide individuals through the entire journey, helping them navigate practical barriers to complete their care.",
        "Active follow-ups ensure that referrals translate into actual access, continuity of care, and sustained community wellbeing.",
      ],
    },
    {
      number: "08",
      title: "Community Voices Driving Solutions",
      body: [
        "Communities should not just receive interventions—they should help shape them. Our teams listen closely to local barriers and insights during outreach.",
        "We use this feedback to refine our approaches and advocate for responsive services, ensuring our development model is truly community-driven.",
      ],
    },
    {
      number: "09",
      title: "Supporting People Beyond the Health Facility",
      body: [
        "Health is influenced by factors far beyond the clinic walls—from family dynamics to financial stress. WAM takes a holistic approach to address these overlapping barriers.",
        "By working alongside individuals through mentorship and psychosocial support, we address the whole person to foster sustainable wellbeing.",
      ],
    },
    {
      number: "10",
      title: "Empowering Communities Through Health Information",
      body: [
        "Access to accurate health information drives health equity. WAM delivers clear, community-focused education to demystify medical pathways and preventive care.",
        "By translating guidelines into practical knowledge, we equip individuals to advocate for their health and take early action against preventable conditions.",
      ],
    },
  ];

  return (
    <div className="impact-page">
      {/* HERO WITH TYPEWRITER */}
      <section className="impact-hero">
        <div className="impact-container">
          <span className="hero-kicker">Our Measurable Real-World Footprint</span>
          
          <h1 className="hero-title">
            Reaching People is Just the Beginning —{" "}
            <span className="typewriter-text">
              {displayedText}
              <span className="typewriter-cursor">|</span>
            </span>
          </h1>

          <p className="hero-lead">
            At Wellness Approach Mentors (WAM), true impact lives beyond initial contact. We bridge systemic gaps between communities and healthcare institutions through persistent follow-ups, empathetic psychosocial mentorship, and accessible health financing literacy.
          </p>
        </div>
      </section>

      {/* STORY CARDS GRID */}
      <section className="story-list">
        <div className="impact-container story-grid">
          {sections.map((s) => (
            <article key={s.number} className="story-card" tabIndex="0">
              <div className="story-card-header">
                <span className="story-number">{s.number}</span>
                <h2 className="story-title">{s.title}</h2>
              </div>
              <div className="story-copy">
                {s.body.map((para, i) => (
                  <p className="story-paragraph" key={i}>
                    {para}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="impact-cta-section">
        <div className="impact-container">
          <h2 className="cta-title">Help us reach further.</h2>
          <p className="cta-lead">
            Partner with WAM to strengthen linkages to care, health
            financing literacy, and psychosocial support in the
            communities that need it most.
          </p>
          <div className="cta-btn-group">
            <Link to="/contact" className="btn-cta-primary">
              Partner with us
            </Link>
            <Link to="/programmes" className="btn-cta-secondary">
              Explore programmes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}