import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/Home.css";

export default function Home() {
  const [navbarHeight, setNavbarHeight] = React.useState(0);
  
  React.useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  const skills = [
    "React.js", 
    ".NET Core", 
    "Spring Boot", 
    "REST APIs",
    "MySQL",
    "Java",
    "C#",
    "JavaScript",
    "TypeScript",
    "Docker"
  ];

  const socialLinks = [
    {
      icon: "bi bi-linkedin",
      url: "https://www.linkedin.com/in/gaurav-shimpi-61b210193",
      name: "LinkedIn"
    },
    {
      icon: "bi bi-github",
      url: "https://github.com/D1-89321-Gaurav",
      name: "GitHub"
    },
    {
      icon: "bi bi-envelope-fill",
      url: "mailto:gauravshimpi22@gmail.com",
      name: "Email"
    }
  ];

  return (
    <section 
      id="home" 
      className="home-section"
      style={{ paddingTop: `${navbarHeight}px` }}
    >
      <div className="background-overlay"></div>
      <Container className="position-relative">
        <Row className="align-items-center justify-content-center min-vh-100 py-5">
          <Col lg={6} className="text-center text-lg-start order-lg-1 order-2 pe-lg-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h6 className="text-accent mb-4">
                <i className="bi bi-pc-display-horizontal me-2"></i>
                Full-Stack Developer | PG-DAC Graduate
              </h6>
              
              <h1 className="display-3 fw-bold mb-4 text-white">
                Hi, I'm <span className="text-gradient">Gaurav Shimpi</span>
              </h1>
              
              <p className="lead mb-5 text-light">
                Crafting elegant digital solutions with cutting-edge technologies.
                Specializing in building performant, scalable applications with
                exceptional user experiences.
              </p>
              
              <div className="skills-container mb-5">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="skill-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + (index * 0.05) }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
              
              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="btn btn-primary btn-lg px-4 py-3 rounded-pill fw-semibold"
                  >
                    <i className="bi bi-stack me-2"></i>
                    View Projects
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill fw-semibold"
                  >
                    <i className="bi bi-chat-dots me-2"></i>
                    Contact Me
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </Col>

          <Col lg={6} className="text-center order-lg-2 order-1 mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", delay: 0.3 }}
            >
              <div className="profile-avatar mx-auto">
                <div className="avatar-glow"></div>
                <i className="bi bi-code-slash avatar-icon"></i>
              </div>
              
              <div className="mt-5">
                <div className="d-flex justify-content-center gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
                      aria-label={social.name}
                    >
                      <i className={social.icon}></i>
                    </motion.a>
                  ))}
                </div>
                
                <motion.p 
                  className="location-text mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  Jalgaon, Maharashtra, India
                </motion.p>
              </div>
            </motion.div>
          </Col>
        </Row>

        <motion.div 
          className="scroll-down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="scroll-icon"
          >
            <i className="bi bi-chevron-down"></i>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}