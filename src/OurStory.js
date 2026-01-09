import React from "react";
import "./OurStory.css";

const OurStory = () => {
  return (
    <div className="our-story">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <a href="/" className="logo-link">
              <img src="/logo.png" alt="Thermoroad Logo" className="logo-img" />
              <h1>Thermoroad</h1>
            </a>
          </div>
          <ul className="nav-menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/#problem">Problem</a>
            </li>
            <li>
              <a href="/#solution">Solution</a>
            </li>
            <li>
              <a href="/#innovation">Innovation</a>
            </li>
            <li>
              <a href="/#team">Team</a>
            </li>
            <li>
              <a href="/our-story" className="active">
                Our Story
              </a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="story-hero">
        <div className="hero-content">
          <h1>Our Story</h1>
          <p className="hero-subtitle">
            The journey to transform roads into sustainable energy sources
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="story-content">
        <div className="container">
          <div className="story-timeline">
            <div className="timeline-item">
              <div className="timeline-date">2020</div>
              <div className="timeline-content">
                <h3>The Spark of Innovation</h3>
                <p>
                  Our journey began when our founders, while studying civil
                  engineering, noticed the excessive heat radiating from asphalt
                  roads during summer months. They discovered that this wasn't
                  just uncomfortable— it was releasing harmful VOCs and
                  contributing to urban heat islands.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2021</div>
              <div className="timeline-content">
                <h3>Research & Development</h3>
                <p>
                  Months of intensive research led to breakthrough discoveries
                  in thermoelectric technology and heat transfer systems. We
                  began prototyping our multi-layer substrate system in
                  university labs, testing various materials and configurations
                  for optimal performance.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2022</div>
              <div className="timeline-content">
                <h3>First Prototype Success</h3>
                <p>
                  Our first full-scale prototype demonstrated a 40% reduction in
                  asphalt temperature and successfully generated measurable
                  electricity from heat flow. This validation attracted our
                  first seed funding and allowed us to expand our team.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2023</div>
              <div className="timeline-content">
                <h3>Pilot Programs</h3>
                <p>
                  We partnered with three municipalities to install pilot
                  sections of Thermoroad systems. The results exceeded
                  expectations: reduced maintenance costs, improved air quality,
                  and consistent energy generation even in varying weather
                  conditions.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2024</div>
              <div className="timeline-content">
                <h3>Scaling & Growth</h3>
                <p>
                  With proven technology and growing demand, Thermoroad is now
                  expanding operations nationwide. We're working with cities
                  across the country to transform their infrastructure into
                  sustainable energy generators while creating safer, more
                  durable roads for communities.
                </p>
              </div>
            </div>
          </div>

          <div className="mission-section">
            <h2>Our Mission</h2>
            <p>
              Thermoroad exists to revolutionize urban infrastructure by turning
              everyday roads into sources of clean, renewable energy. We believe
              that sustainable solutions should be practical, economical, and
              beneficial for both communities and the environment.
            </p>
          </div>

          <div className="values-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Innovation</h3>
                <p>
                  We push the boundaries of what's possible in sustainable
                  infrastructure.
                </p>
              </div>
              <div className="value-card">
                <h3>Sustainability</h3>
                <p>
                  Every decision we make prioritizes environmental impact and
                  long-term viability.
                </p>
              </div>
              <div className="value-card">
                <h3>Community</h3>
                <p>
                  We're dedicated to creating healthier, more sustainable
                  communities for future generations.
                </p>
              </div>
              <div className="value-card">
                <h3>Integrity</h3>
                <p>
                  We operate with transparency and honesty in all our
                  partnerships and operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Thermoroad. All rights reserved.</p>
          <p>Building sustainable roads for a better future.</p>
        </div>
      </footer>
    </div>
  );
};

export default OurStory;
