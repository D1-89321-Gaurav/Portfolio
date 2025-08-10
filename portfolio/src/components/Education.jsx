// Education.jsx
import React from "react";
import { Container, Card, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/Education.css";

export default function Education() {
  const educationData = [
    {
      degree: "Post Graduate Diploma in Advanced Computing (PG-DAC)",
      institution: "Sunbeam Infotech Hinjewadi Phase-2, Pune",
      year: "Feb 2025",
      score: "Pursuing",
      description: "Specialization in Java Full Stack Development, Spring Boot, ReactJS, REST APIs, MySQL, and Cloud Integration.",
      icon: "bi bi-code-slash",
      color: "#29043aff"
    },
    {
      degree: "Bachelor of Technology (B.Tech) - Computer Engineering",
      institution: "S.V.K.M's Institute Of Technology, Dhule, Maharashtra",
      year: "2018-2022",
      score: "9.20 CGPA (87 %)",
      description: "Focused on software development, data structures, algorithms, and IoT-based projects.",
      icon: "bi bi-cpu",
      color: "#6d083cff"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Maharashtra State Board",
      year: "2018",
      score: "60.46%",
      description: "Studied Science with specialization in Mathematics, Physics, and Chemistry.",
      icon: "bi bi-book",
      color: "#162030ff"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Maharashtra State Board",
      year: "2016",
      score: "84.80%",
      description: "Completed secondary education with strong academic performance in core subjects.",
      icon: "bi bi-pencil",
      color: "#02412cff"
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-background"></div>
      <Container>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-center">
            <span className="education-title">
              Education <span className="text-gradient">Journey</span>
            </span>
          </h2>
          <p className="section-subtitle">My academic achievements and qualifications</p>
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="timeline-dot" style={{ backgroundColor: edu.color }}></div>
              <div className="timeline-connector" style={{ backgroundColor: edu.color }}></div>
              
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Card className="education-card">
                  <Card.Body>
                    <div className="education-header">
                      <div className="education-icon" style={{ color: edu.color }}>
                        <i className={edu.icon}></i>
                      </div>
                      <div>
                        <h3 className="education-degree">{edu.degree}</h3>
                        <h4 className="education-institution">{edu.institution}</h4>
                      </div>
                    </div>
                    
                    <div className="education-meta">
                      <Badge pill className="education-year" style={{ backgroundColor: `${edu.color}20`, color: edu.color }}>
                        <i className="bi bi-calendar3 me-1"></i>
                        {edu.year}
                      </Badge>
                      <Badge pill className="education-score" style={{ backgroundColor: `${edu.color}20`, color: edu.color }}>
                        <i className="bi bi-award me-1"></i>
                        {edu.score}
                      </Badge>
                    </div>
                    
                    <p className="education-description">{edu.description}</p>
                    
                    <div className="education-decoration" style={{ backgroundColor: `${edu.color}10` }}></div>
                  </Card.Body>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}