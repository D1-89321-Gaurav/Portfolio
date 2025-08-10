// About.jsx
import React from "react";
import { Container, Row, Col, Card, Badge, ProgressBar } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/About.css";

export default function About() {
  const skills = [
    { name: "React.js", level: 90, icon: "bi bi-filetype-jsx", color: "#61DAFB" },
    { name: ".NET Core", level: 85, icon: "bi bi-record-btn", color: "#da1aaaff" },
    { name: "Spring Boot", level: 80, icon: "bi bi-filetype-java", color: "#6ee023ff" },
    { name: "REST APIs", level: 88, icon: "bi bi-plug", color: "#FF6B6B" },
    { name: "MySQL", level: 82, icon: "bi bi-database", color: "#6ab1e7ff" },
    { name: "Java", level: 85, icon: "bi bi-filetype-java", color: "#299feeff" },
    { name: "JavaScript", level: 90, icon: "bi bi-filetype-js", color: "#F7DF1E" },
    { name: "C#", level: 80, icon: "bi bi-filetype-cs", color: "#1adf13ff" }
  ];

  const languages = [
    { name: "Hindi", level: "Native", icon: "bi bi-translate" },
    { name: "Marathi", level: "Fluent", icon: "bi bi-translate" },
    { name: "English", level: "Professional", icon: "bi bi-translate" }
  ];

  const hobbies = [
    { name: "Singing", icon: "bi bi-music-note-beamed" },
    { name: "Gaming", icon: "bi bi-controller" },
    { name: "Traveling", icon: "bi bi-globe2" },
    { name: "Photography", icon: "bi bi-camera" },
    { name: "Coding", icon: "bi bi-code-slash" },
    { name: "Reading", icon: "bi bi-book" }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-background"></div>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-header"
        >
          <h2 className="text-center">
            <span className="section-title">
              About <span className="text-gradient">Me</span>
            </span>
          </h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <Row className="align-items-center justify-content-center g-5">
          <Col lg={5} className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="profile-avatar-container">
                <div className="profile-avatar">
                  <div className="avatar-glow"></div>
                  <div className="avatar-particles">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="particle" style={{ '--i': i }}></div>
                    ))}
                  </div>
                  <i className="bi bi-code-slash avatar-icon"></i>
                </div>
                <div className="avatar-decoration"></div>
              </div>
              
              <motion.div 
                className="social-icons-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {[
                  { icon: "bi bi-linkedin", url: "https://www.linkedin.com/in/gaurav-shimpi-61b210193" },
                  { icon: "bi bi-github", url: "https://github.com/D1-89321-Gaurav" },
                  { icon: "bi bi-envelope-fill", url: "mailto:gauravshimpi22@gmail.com" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon"
                    whileHover={{ y: -8, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i className={social.icon}></i>
                  </motion.a>
                ))}
              </motion.div>

              <Card className="profile-card">
                <Card.Body>
                  <h5 className="card-title">
                    <i className="bi bi-person-vcard-fill"></i>
                    Personal Info
                  </h5>
                  <ul className="info-list">
                    <li>
                      <div className="info-item">
                        <i className="bi bi-calendar-event"></i>
                        <div>
                          <span className="info-label">Date of Birth</span>
                          <span className="info-value">02 Feb 2000</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="info-item">
                        <i className="bi bi-geo-alt"></i>
                        <div>
                          <span className="info-label">Location</span>
                          <span className="info-value">Jalgaon, Maharashtra</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="info-item">
                        <i className="bi bi-mortarboard"></i>
                        <div>
                          <span className="info-label">Education</span>
                          <span className="info-value">PG-DAC (Feb 2025)</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="about-card">
                <Card.Body>
                  <h3 className="name-title">Gaurav Shimpi</h3>
                  <div className="position-badge">
                    <i className="bi bi-stack"></i>
                    Full-Stack Developer
                  </div>
                  <p className="bio-text">
                    Passionate developer with expertise in building modern web applications 
                    using React, .NET Core, and Spring Boot. Recently completed PG-DAC from 
                    CDAC with strong foundations in computer engineering and practical 
                    experience in full-stack development.
                  </p>
                  <div className="quote-container">
                    <i className="bi bi-quote"></i>
                    <p className="quote-text">
                      "Turning complex problems into elegant solutions through code"
                    </p>
                  </div>
                </Card.Body>
              </Card>

              <Card className="skills-card">
                <Card.Body>
                  <h5 className="card-title">
                    <i className="bi bi-tools"></i>
                    Technical Skills
                  </h5>
                  <div className="skills-container">
                    {skills.map((skill, index) => (
                      <div key={index} className="skill-item">
                        <div className="skill-header">
                          <div className="skill-icon" style={{ color: skill.color }}>
                            <i className={skill.icon}></i>
                          </div>
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-level">{skill.level}%</span>
                        </div>
                        <ProgressBar 
                          now={skill.level} 
                          className="skill-progress"
                          style={{ '--skill-color': skill.color }}
                        />
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>

              <Row>
                <Col md={6}>
                  <Card className="languages-card">
                    <Card.Body>
                      <h5 className="card-title">
                        <i className="bi bi-translate"></i>
                        Languages
                      </h5>
                      <div className="languages-container">
                        {languages.map((lang, index) => (
                          <div key={index} className="language-item">
                            <i className={lang.icon}></i>
                            <div>
                              <div className="language-name">{lang.name}</div>
                              <Badge className="language-level">
                                {lang.level}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="hobbies-card">
                    <Card.Body>
                      <h5 className="card-title">
                        <i className="bi bi-emoji-smile"></i>
                        Hobbies & Interests
                      </h5>
                      <div className="hobbies-container">
                        {hobbies.map((hobby, index) => (
                          <Badge 
                            key={index} 
                            pill 
                            className="hobby-badge"
                          >
                            <i className={hobby.icon}></i>
                            {hobby.name}
                          </Badge>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}