// Projects.jsx
import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "IndiSky: Seamless Air Travel Solution",
      description: "Developed a full-stack Travel Management System using React, Spring Boot, and MySQL to facilitate flight search, booking, and user management.",
      technologies: ["React", "Spring Boot", "MySQL", "JWT Auth", "REST APIs", "Hibernate"],
      features: [
        "Role-based authentication (Admin/User)",
        "Flight search and booking system",
        "Admin dashboard for flight management",
        "Responsive React frontend"
      ],
      github: "https://github.com/IndiSky-Flight-booking-System/IndiSky",
      demo: "#",
      icon: "bi bi-airplane",
      color: "#1a0a74ff"
    },
    {
      title: "Real-time Sugar Level Prediction",
      description: "IoT healthcare project integrating Arduino, sensors, React, Node.js, and Firebase for non-invasive glucose monitoring.",
      technologies: ["IoT", "Arduino", "React", "Node.js", "Firebase"],
      features: [
        "Real-time glucose monitoring via sweat",
        "Wi-Fi data transmission to Firebase",
        "Web-based visualization dashboard",
        "Continuous monitoring solution"
      ],
      github: "https://github.com/D1-89321-Gaurav/College-Major-Project",
      demo: "#",
      icon: "bi bi-heart-pulse",
      color: "#4d0529ff"
    },
    {
      title: "ShopEase – E-Commerce App",
      description: "ASP.NET Core + React full-stack e-commerce app with product management and order tracking capabilities.",
      technologies: [".NET Core", "React", "SQL Server", "EF Core", "REST APIs"],
      features: [
        "Product browsing and cart management",
        "Admin product management",
        "Order history tracking",
        "Secure authentication"
      ],
      github: "https://github.com/D1-89321-Gaurav/MS-DOT-NET-Project",
      demo: "#",
      icon: "bi bi-cart",
      color: "#5a0a72ff"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-background"></div>
      <Container>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-center">
            <span className="projects-title">
              My <span className="text-gradient">Projects</span>
            </span>
          </h2>
          <p className="section-subtitle">Showcasing my technical expertise through innovative solutions</p>
        </motion.div>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col lg={4} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -15 }}
              >
                <Card className="project-card" style={{ '--project-color': project.color }}>
                  <Card.Body className="p-4">
                    <div className="project-icon-container">
                      <div className="project-icon-glow" style={{ backgroundColor: `${project.color}20` }}></div>
                      <div className="project-icon" style={{ backgroundColor: `${project.color}10`, color: project.color }}>
                        <i className={project.icon}></i>
                      </div>
                    </div>
                    
                    <Card.Title className="project-title">
                      {project.title}
                    </Card.Title>
                    
                    <Card.Text className="project-description">
                      {project.description}
                    </Card.Text>
                    
                    <div className="project-features-container">
                      <h6 className="features-title">Key Features:</h6>
                      <ul className="project-features">
                        {project.features.map((feature, i) => (
                          <li key={i}>
                            <i className="bi bi-check-circle-fill" style={{ color: project.color }}></i>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="project-technologies-container">
                      <h6 className="technologies-title">Technologies:</h6>
                      <div className="project-technologies">
                        {project.technologies.map((tech, i) => (
                          <Badge 
                            key={i} 
                            pill 
                            className="technology-badge"
                            style={{ backgroundColor: `${project.color}15`, color: project.color }}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="project-links">
                      <Button
                        variant="primary"
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                        style={{ backgroundColor: project.color }}
                      >
                        <i className="bi bi-github me-2"></i>
                        View Code
                      </Button>
                      {/* <Button
                        variant="outline-primary"
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                        style={{ color: project.color, borderColor: project.color }}
                      >
                        <i className="bi bi-eye me-2"></i>
                        Live Demo
                      </Button> */}
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}