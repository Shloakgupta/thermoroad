import "./App.css";
import logo from "./logo.png";
import saharshPhoto from "./saharshmanne.jpeg";
import tanishPhoto from "./tanishdasari.jpeg";
import shloakPhoto from "./shloak.jpeg";
import ashuPhoto from "./ashu.jpeg";
import { useState } from "react";

const HomePage = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: "shloak",
      name: "Shloak Gupta",
      role: "CMO 📱",
      fullRole: "Chief Marketing Officer",
      avatar: "SG",
      photo: shloakPhoto,
      description:
        "As the Chief Marketing Officer, Shloak leads Thermoroad's marketing strategy and brand development. With a passion for sustainable innovation, Shloak works to communicate the environmental and economic benefits of our technology to cities and communities across the country.",
    },
    {
      id: "saharsh",
      name: "Saharsh Manne",
      role: "CTO 🔧",
      fullRole: "Chief Technology Officer",
      avatar: "SM",
      photo: saharshPhoto,
      description:
        "Saharsh serves as the Chief Technology Officer, overseeing the technical development and innovation of Thermoroad's system. With expertise in thermoelectric technology and infrastructure engineering, Saharsh ensures our solution is both effective and sustainable.",
    },
    {
      id: "ashvith",
      name: "Ashvith Gurram",
      role: "COO 📝",
      fullRole: "Chief Operating Officer",
      avatar: "AG",
      photo: ashuPhoto,
      description:
        "As the Chief Operating Officer, Ashvith manages the day-to-day operations and implementation of Thermoroad's projects. Ashvith coordinates with city governments and ensures smooth deployment of our road substrate systems in urban areas.",
    },
    {
      id: "tanish",
      name: "Tanish Dasari",
      role: "CFO 💰",
      fullRole: "Chief Financial Officer",
      avatar: "TD",
      photo: tanishPhoto,
      description:
        "Tanish is the Chief Financial Officer, responsible for managing Thermoroad's financial strategy and business model. With a focus on B2G partnerships, Tanish works to make sustainable infrastructure accessible to cities nationwide.",
    },
  ];

  const handleMemberClick = (memberId) => {
    if (selectedMember === memberId) {
      setSelectedMember(null);
    } else {
      setSelectedMember(memberId);
    }
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <a href="#" className="logo-link">
              <img src={logo} alt="Thermoroad Logo" className="logo-img" />
              <h1>Thermoroad</h1>
            </a>
          </div>
          <ul className="nav-menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="/our-story">Our Story</a>
            </li>
            <li>
              <a href="#problem">Problem</a>
            </li>
            <li>
              <a href="#solution">Solution</a>
            </li>
            <li>
              <a href="#innovation">Innovation</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <img src={logo} alt="Thermoroad Logo" className="hero-logo" />
          <h1 className="hero-title">Thermoroad</h1>
          <p className="hero-subtitle">
            Transforming Roads into Sustainable Energy Sources
          </p>
          <p className="hero-description">
            A revolutionary system that goes underneath street asphalt to
            increase heat transfer into the ground while generating clean
            energy, reducing harmful emissions and extending road lifespan.
          </p>
          <div className="hero-buttons">
            <a href="#innovation" className="btn btn-primary">
              Learn More
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="section problem-section">
        <div className="container">
          <h2 className="section-title">The Problem</h2>
          <div className="problem-content">
            <div className="problem-text">
              <p>
                Asphalt roads make up roughly{" "}
                <strong>90% of paved roads</strong> in the world, but their
                issues with extreme heat remain a critical issue. Exposure to
                heat causes the release of{" "}
                <strong>Volatile Organic Compounds (VOCs)</strong> into the
                surrounding environment and creates many additional problems for
                cities, health, and infrastructure. Very common in cities that
                are experiencing the urban heat island effect.
              </p>
              <div className="problem-points-horizontal">
                <div className="problem-point">
                  <h3>Health Impacts</h3>
                  <p>
                    Increased exposure to VOCs leads to higher risk of
                    respiratory diseases like asthma and exposure to some can
                    even cause cancer. Public health departments across the
                    United States receive thousands of complaints every year
                    about the smell of certain roads.
                  </p>
                </div>
                <div className="problem-point">
                  <h3>Environmental Damage</h3>
                  <p>
                    VOC emissions heighten the chances of creating Secondary
                    Organic Aerosols (SOAs) which have devastating impacts on
                    climate and air quality, and are a major factor in the
                    creation of haze and smog in urban areas.
                  </p>
                </div>
                <div className="problem-point">
                  <h3>Maintenance Costs</h3>
                  <p>
                    Asphalt roads break down due to extremely hot weather
                    conditions. Cities and private landowners need to regularly
                    maintain asphalt roads to prevent the creation of cracks and
                    potholes, leading to significant ongoing costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="section solution-section">
        <div className="container">
          <h2 className="section-title">Our Solution</h2>
          <div className="solution-content">
            <p className="solution-intro">
              Thermoroad has developed a multi-layer substrate system that
              gradually dissipates excess heat into the soil below while
              harvesting otherwise wasted thermal energy. Our innovation
              combines thermoelectric generator (TEG) modules with a passive
              heat dissipation structure to achieve this, all while keeping the
              environment at the top of our priorities.
            </p>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">🌡️</div>
                <h3>Cool Asphalt</h3>
                <p>
                  Reduces asphalt temperature, decreasing VOC emissions and
                  preventing cracks
                </p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">⚡</div>
                <h3>Generate Energy</h3>
                <p>
                  Converts heat flow into usable electrical energy through
                  thermoelectric generators
                </p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🌱</div>
                <h3>Environmentally Safe</h3>
                <p>
                  Gradual heat transfer protects the environment from rapid
                  temperature changes
                </p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">💰</div>
                <h3>Reduce Costs</h3>
                <p>
                  Extends road lifespan, reducing maintenance and replacement
                  costs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section id="innovation" className="section innovation-section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="innovation-content">
            <div className="innovation-description">
              <p>
                Our innovation is a sustainable, eco-friendly, and
                energy-efficient structure that will revolutionize how roads are
                built. Each component is carefully designed to increase the heat
                transfer of the overall system.
              </p>
            </div>
            <div className="layers">
              <div className="layer-item">
                <div className="layer-number">1</div>
                <div className="layer-content">
                  <h3>Copper Tube Supports</h3>
                  <p>
                    Tall vertical supports made of copper provide stability for
                    our innovation while inducing heat transfer.
                  </p>
                </div>
              </div>
              <div className="layer-item">
                <div className="layer-number">2</div>
                <div className="layer-content">
                  <h3>Gravel Layer</h3>
                  <p>
                    A 4-inch layer of aggregate (crushed rocks) with extremely
                    high heat conductivity fills the bottom. This insulator
                    slows down heat transfer, making it safe for the environment
                    as rapid flow negatively affects it.
                  </p>
                </div>
              </div>
              <div className="layer-item">
                <div className="layer-number">3</div>
                <div className="layer-content">
                  <h3>Aluminum Heat Sink</h3>
                  <p>
                    An aluminum plate with holes cut out acts as a heat sink,
                    drawing heat rapidly from the layers above and facilitating
                    efficient heat transfer.
                  </p>
                </div>
              </div>
              <div className="layer-item">
                <div className="layer-number">4</div>
                <div className="layer-content">
                  <h3>Thermoelectric Generators</h3>
                  <p>
                    A grid of TEG modules placed directly under the asphalt.
                    Since the asphalt above is much hotter than the layers
                    below, the Seebeck effect occurs, converting heat energy to
                    electricity that can be stored and used. 5
                  </p>
                </div>
              </div>
              <div className="layer-item">
                <div className="layer-number">5</div>
                <div className="layer-content">
                  <h3>Asphalt Road</h3>
                  <p>
                    The final layer, the actual asphalt road, sits on top,
                    maximizing the temperature difference and power generated
                    while staying cooler and more durable.
                  </p>
                </div>
              </div>

              <div className="layer-item">
                <div className="layer-number">5</div>
                <div className="layer-content">
                  <h3>Reducing Stress</h3>
                  <p>
                    Roads experience high stress throughout the day, especially
                    city roads. To ensure this system doesn’t break, we will be
                    adding elastomeric layers that are meant to spread load.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section team-section">
        <div className="container">
          <div
            className={`team-container ${
              selectedMember ? "member-selected" : ""
            }`}
          >
            {selectedMember ? (
              <>
                {teamMembers
                  .filter((member) => member.id === selectedMember)
                  .map((member) => (
                    <div key={member.id} className="team-detail-view">
                      <div
                        className="team-member-expanded"
                        onClick={() => handleMemberClick(member.id)}
                      >
                        <div className="member-avatar-large">
                          {member.photo ? (
                            <img
                              src={member.photo}
                              alt={member.name}
                              className="member-photo-large"
                            />
                          ) : (
                            member.avatar
                          )}
                        </div>
                        <h3>{member.name}</h3>
                        <p className="member-role">{member.role}</p>
                      </div>
                      <div className="member-description">
                        <button
                          className="close-btn"
                          onClick={() => setSelectedMember(null)}
                        >
                          ×
                        </button>
                        <h3>{member.name}</h3>
                        <p className="member-role-detail">{member.fullRole}</p>
                        <p className="member-description-text">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  ))}
              </>
            ) : (
              <div className="team-grid">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="team-member"
                    onClick={() => handleMemberClick(member.id)}
                  >
                    <div className="member-avatar">
                      {member.photo ? (
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="member-photo"
                        />
                      ) : (
                        member.avatar
                      )}
                    </div>
                    <h3>{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <p className="click-hint">Click to learn more</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="section business-section">
        <div className="container">
          <h2 className="section-title">Business Model</h2>
          <div className="business-content">
            <p>
              Thermoroad operates on a{" "}
              <strong>Business-to-Government (B2G)</strong> model, selling our
              innovative road substrate system to urban areas and cities. We
              work directly with municipal governments and transportation
              departments to get our product installed in roads throughout their
              jurisdictions.
            </p>
            <div className="business-points">
              <div className="business-point">
                <h3>Target Market</h3>
                <p>
                  Urban areas and cities looking to reduce environmental impact,
                  improve public health, and generate clean energy from existing
                  infrastructure.
                </p>
              </div>
              <div className="business-point">
                <h3>Value Proposition</h3>
                <p>
                  Reduce VOC emissions, extend road lifespan, generate renewable
                  energy, and create healthier communities while reducing
                  long-term maintenance costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Section */}
      <section className="section competition-section">
        <div className="container">
          <h2 className="section-title">Competitive Advantage</h2>
          <div className="competition-content">
            <div className="competition-item">
              <h3>Current Solutions</h3>
              <p>
                Some competing solutions include reflective coating on road
                layers. These reflect solar radiation and reduce heat, however
                they:
              </p>
              <ul>
                <li>
                  Radiate heat out so humans can feel it by an extra 7 degrees
                  Fahrenheit
                </li>
                <li>Create pollution after wearing off</li>
                <li>Add glare spots for drivers</li>
                <li>Have a variety of maintenance costs when damaged</li>
              </ul>
            </div>
            <div className="competition-item">
              <h3>Why Thermoroad?</h3>
              <p>
                Other solutions only worry about the short-term effects of
                asphalt and reducing those problems, but then lead to a lot of
                long-term dangers. Thermoroad, on the other hand:
              </p>
              <ul>
                <li>
                  Takes excess heat and converts it to energy for long-term
                  progress
                </li>
                <li>Gradually transfers heat safely into the soil</li>
                <li>Reduces VOC emissions and improves air quality</li>
                <li>Extends road lifespan, reducing replacement costs</li>
                <li>Generates renewable energy from existing infrastructure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <div className="contact-content">
            <p>
              Interested in learning more about Thermoroad? Contact us to
              discuss how we can help make your city's roads safer, more
              sustainable, and energy-efficient.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <h3>Email</h3>
                <p>info@thermoroad.com</p>
              </div>
            </div>
            <div className="video-link">
              <p>Watch our innovation video to learn more about Thermoroad</p>
              <a href="#" className="btn btn-primary">
                Watch Video
              </a>
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

export default HomePage;
