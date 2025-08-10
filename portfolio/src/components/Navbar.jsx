// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "../css/Navbar.css";

function PortfolioNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "home", icon: "bi bi-house-door" },
    { name: "About", to: "about", icon: "bi bi-person" },
    { name: "Education", to: "education", icon: "bi bi-mortarboard" },
    { name: "Projects", to: "projects", icon: "bi bi-code-square" },
    { name: "Contact", to: "contact", icon: "bi bi-envelope" }
  ];

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`${scrolled ? "scrolled" : ""} ${expanded ? "expanded" : ""}`}
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="brand-logo me-2"
            >
              <i className="bi bi-code-slash"></i>
            </motion.div>
            <span className="brand-name">
              <span className="text-gradient">Gaurav</span> Shimpi
            </span>
          </Navbar.Brand>
        </motion.div>

        <Navbar.Toggle aria-controls="navbar-nav" className="border-0">
          <motion.div
            className={`hamburger ${expanded ? "open" : ""}`}
            animate={expanded ? "open" : "closed"}
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 }
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.div>
        </Navbar.Toggle>

        <Navbar.Collapse id="navbar-nav">
          <div className="navbar-content-wrapper">
            <Nav className="mx-auto align-items-center">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className={`nav-item ${activeSection === item.to ? "active" : ""}`}
                    onClick={() => setExpanded(false)}
                    spy={true}
                  >
                    <i className={`${item.icon} nav-icon`}></i>
                    {/* <span className="nav-number">0{index + 1}.</span> */}
                    {item.name}
                    <span className="nav-underline"></span>
                    <span className="nav-dot"></span>
                  </Link>
                </motion.div>
              ))}
            </Nav>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
              className="resume-btn-container"
              whileHover={{ scale: 1.05 }}
            >
              <Button
                variant="outline-light"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn"
              >
                <i className="bi bi-file-earmark-text me-2"></i>
                Resume
                <span className="btn-arrow">→</span>
              </Button>
            </motion.div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PortfolioNavbar;