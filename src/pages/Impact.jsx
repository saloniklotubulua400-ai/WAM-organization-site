import React from "react";
import { Link } from "react-router-dom";
import "./Impact.css";

export default function Impact() {
  const sections = [
    {
      number: "01",
      title: "Bridging the Gap Through Linkage to Care",
      body: [
        "At Wellness Approach Mentors (WAM), we believe that reaching a person is only the beginning. Through community outreach, our mentors identify individuals who need health and social services and support them to navigate available services.",
        "By using trusted community networks and follow-up approaches, we have helped strengthen linkages between communities and health facilities. Our approach reduces missed opportunities, encourages timely care-seeking, and ensures that people do not feel abandoned after referral.",
        "Through empathy, continuous engagement, and practical support, WAM helps transform referrals into meaningful connections to care.",
      ],
    },
    {
      number: "02",
      title: "Making Health Financing Understandable",
      body: [
        "Health financing can be complicated, especially for vulnerable families who struggle to understand available options. WAM works with communities to simplify information about health financing, insurance, and available healthcare resources.",
        "Through community education and mentorship, individuals are empowered to understand their rights, available financing mechanisms, and where to seek assistance. We believe financial barriers should not prevent people from accessing essential healthcare.",
        "By combining accurate information with empathy and practical guidance, WAM helps communities make informed decisions and take greater control of their health and wellbeing.",
      ],
    },
    {
      number: "03",
      title: "Psychosocial Support That Begins With Listening",
      body: [
        "Sometimes, the most powerful intervention is simply listening. WAM provides psychosocial support to individuals and communities experiencing emotional, social, and personal challenges. Our mentors create safe and respectful spaces where people can express themselves without fear of judgment.",
        "Through empathetic conversations, basic counselling support, referrals, and follow-up, we help individuals regain hope and identify practical ways forward.",
        "Our approach recognizes that health is more than the absence of disease. Emotional wellbeing, supportive relationships, dignity, and resilience are essential components of healthy and empowered communities.",
      ],
    },
    {
      number: "04",
      title: "Taking Services Closer to Communities",
      body: [
        "Distance, stigma, misinformation, and lack of awareness can prevent people from accessing essential services. WAM responds by taking information, mentorship, and community engagement closer to where people live and work.",
        "Through outreach activities, our teams engage community members, listen to their concerns, identify barriers, and connect them with appropriate services. Rather than waiting for people to come forward, we proactively create opportunities for engagement.",
        "This community-centered approach strengthens trust, improves awareness, and ensures that people who may otherwise remain invisible are reached, supported, and connected to care.",
      ],
    },
    {
      number: "05",
      title: "Empathy as a Tool for Transformation",
      body: [
        "At WAM, empathy is more than a principle — it is a practical tool for creating change. Our mentors approach every individual with respect, patience, and understanding, recognizing that each person has a unique story and lived experience.",
        "Instead of making assumptions, we listen first, understand the challenge, and work together to identify solutions. This approach has helped build trust between communities and service providers while encouraging people to seek support when they need it.",
        "By putting people at the center of our work, WAM demonstrates that compassion and professionalism can work together to achieve lasting impact.",
      ],
    },
    {
      number: "06",
      title: "Innovation for Better Community Engagement",
      body: [
        "WAM embraces innovation to improve how communities access information, support, and services. We continuously explore practical approaches that make community engagement more responsive and accessible.",
        "Through peer networks, digital communication, community feedback mechanisms, and creative outreach strategies, we create opportunities for people to participate in identifying and solving challenges affecting their wellbeing. Innovation for us is not simply about technology; it is about finding better ways of doing things.",
        "By combining community knowledge with new ideas, WAM strengthens service linkages, improves communication, and supports communities to become active partners in their own development.",
      ],
    },
    {
      number: "07",
      title: "Turning Referrals Into Real Connections",
      body: [
        "A referral should never be the end of an intervention. WAM focuses on what happens after a person is referred to a service. Our mentors help individuals understand where to go, what to expect, and how to overcome practical barriers that may prevent them from completing the referral.",
        "Where appropriate, follow-up helps identify challenges and reconnect individuals with services. This approach strengthens continuity of care and builds confidence among community members.",
        "By focusing on the entire linkage journey, WAM helps ensure that referrals translate into actual access, support, and improved wellbeing.",
      ],
    },
    {
      number: "08",
      title: "Community Voices Driving Solutions",
      body: [
        "WAM believes communities should not simply receive interventions — they should help shape them. During outreach and engagement activities, our teams listen to community members and document the barriers affecting access to health and social services.",
        "Their experiences provide valuable insights into what is working and what needs improvement. We use this feedback to strengthen our approaches, improve referrals, and advocate for responsive services.",
        "By creating channels for community voices to influence decisions, WAM promotes participation, accountability, and ownership. The result is a model of development where solutions are informed by the people they are intended to serve.",
      ],
    },
    {
      number: "09",
      title: "Supporting People Beyond the Health Facility",
      body: [
        "Many factors affecting health occur outside the health facility. Family relationships, financial difficulties, stigma, emotional distress, and lack of information can all influence whether someone seeks or continues care.",
        "WAM therefore takes a holistic approach to support. Through mentorship, psychosocial support, community outreach, health financing information, and referrals, we address barriers from multiple angles. Our mentors work alongside individuals to understand their circumstances and identify realistic solutions.",
        "This approach recognizes the whole person — not just the health condition — and strengthens the social support systems necessary for sustainable wellbeing.",
      ],
    },
    {
      number: "10",
      title: "Empowering Communities Through Health Information",
      body: [
        "This section is still being written — drop in the rest of the copy here when it's ready.",
      ],
      incomplete: true,
    },
  ];

  return (
    <div className="impact-page">
      {/* HERO */}
      <section className="impact-hero">
        <div className="impact-container">
          <p className="hero-kicker">Wellness Approach Mentors</p>
          <h1 className="hero-title">
            Reaching people is only the beginning.
          </h1>
          <p className="hero-lead">
            What follows a referral, a conversation, or a first point of
            contact is where WAM's work really lives — in the follow-up,
            the listening, and the everyday support that keeps people
            connected to care.
          </p>
        </div>
      </section>

      {/* NARRATIVE SECTIONS */}
      <section className="story-list">
        <div className="impact-container">
          {sections.map((s) => (
            <article
              key={s.number}
              className={`story-item${s.incomplete ? " story-item--incomplete" : ""}`}
            >
              <div className="story-number">{s.number}</div>
              <div className="story-copy">
                <h2 className="story-title">{s.title}</h2>
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

      {/* CTA */}
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