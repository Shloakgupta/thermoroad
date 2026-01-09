import React from 'react';
import teamPhoto from './newteamphoto.png';
import "./OurStory.css";

const OurStory = () => {
  console.log('teamPhoto imported:', teamPhoto);
  
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
            <li><a href="/">Home</a></li>
            <li><a href="/our-story" className="active">Our Story</a></li>
            <li><a href="/#problem">Problem</a></li>
            <li><a href="/#solution">Solution</a></li>
            <li><a href="/#innovation">Innovation</a></li>
            <li><a href="/#team">Team</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="story-hero">
        <div className="hero-content">
          <h1>Our Story</h1>
          <p className="hero-subtitle">The journey to transform roads into sustainable energy sources</p>
        </div>
      </section>

      {/* Story Content */}
      <section className="story-main">
        <div className="container">
          <div className="story-content">
            <div className="story-image">
              <img 
                src={teamPhoto} 
                alt="Thermoroad Team" 
                className="team-photo"
                onError={(e) => {
                  console.error('Image failed to load:', e);
                  console.error('Current src:', e.target.src);
                  e.target.src = '/logo.png'; // fallback to logo
                }}
                onLoad={() => console.log('Team photo loaded successfully')}
              />
            </div>
            <div className="story-text">
              <h2>How Thermoroad Started</h2>
              <p>
                Thermoroad began as a simple observation during our engineering studies - we noticed how incredibly hot asphalt roads would get during summer months, radiating heat and creating uncomfortable urban environments. What started as curiosity quickly evolved into a mission when we discovered this wasn't just about comfort; it was about environmental impact.
              </p>
              <p>
                We learned that extreme heat causes asphalt to release Volatile Organic Compounds (VOCs) - harmful chemicals that contribute to air pollution and pose health risks to communities. At the same time, all that thermal energy was literally going to waste, heating our cities instead of being put to productive use.
              </p>
              <p>
                That's when the idea struck: What if we could capture that heat? What if we could turn roads from part of the problem into part of the solution? After months of research, prototyping, and countless iterations, Thermoroad was born - a system that not only cools roads and reduces emissions but actually generates clean, renewable energy from the heat that would otherwise be wasted.
              </p>
              <p>
                Today, we're a team of passionate engineers and innovators working with cities to transform their infrastructure into sustainable energy generators, one road at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Thermoroad. All rights reserved.</p>
          <p>Building sustainable roads for a better future.</p>
        </div>
      </footer>
    </div>
  );
};

export default OurStory;
