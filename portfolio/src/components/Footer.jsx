// Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/Footer.css";

export default function Footer() {
  const footerLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" }
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
    },
    { 
      icon: "bi bi-file-earmark-person", 
      url: "/resume.pdf",
      name: "Resume"
    }
  ];

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center py-4">
          {/* Copyright Section */}
          <Col lg={4} className="text-center text-lg-start mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="copyright-text mb-0">
                © {new Date().getFullYear()} <span className="highlight">Gaurav Shimpi</span>. All rights reserved.
              </p>
            </motion.div>
          </Col>

          {/* Navigation Links */}
          <Col lg={4} className="text-center mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="footer-nav">
                {footerLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="footer-link"
                  >
                    {link.name}
                    <span className="link-underline"></span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </Col>

          {/* Social Links */}
          <Col lg={4} className="text-center text-lg-end">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    aria-label={social.name}
                  >
                    <i className={social.icon}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Credit */}
        <Row>
          <Col className="text-center">
            <motion.p
              className="credit-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Crafted with <i className="bi bi-heart-fill text-danger"></i> by Gaurav Shimpi
            </motion.p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}