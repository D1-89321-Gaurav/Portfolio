// Contact.jsx
import React, { useRef, useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/Contact.css";

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setSubmitStatus("success");
          form.current.reset();
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        () => {
          setSubmitStatus("error");
          setTimeout(() => setSubmitStatus(null), 5000);
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  const contactMethods = [
    {
      icon: "bi bi-envelope-fill",
      title: "Email",
      content: "gauravshimpi22@gmail.com",
      color: "#8b5cf6"
    },
    {
      icon: "bi bi-telephone-fill",
      title: "Phone",
      content: "+91 9146908647",
      color: "#ec4899"
    },
    {
      icon: "bi bi-geo-alt-fill",
      title: "Location",
      content: "Jalgaon, Maharashtra",
      color: "#3b82f6"
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-background"></div>
      <Container>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-center">
            <span className="contact-title">
              Get In <span className="text-gradient">Touch</span>
            </span>
          </h2>
          <p className="section-subtitle">Let's collaborate on your next project</p>
        </motion.div>

        <Row className="justify-content-center g-5">
          <Col lg={4} className="mb-4">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="contact-info-card"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -10 }}
                style={{ '--method-color': method.color }}
              >
                <div className="contact-icon-container">
                  <div className="contact-icon-glow"></div>
                  <div className="contact-icon">
                    <i className={method.icon}></i>
                  </div>
                </div>
                <h5 className="contact-method-title">{method.title}</h5>
                <p className="contact-method-content">{method.content}</p>
                <div className="contact-decoration"></div>
              </motion.div>
            ))}
          </Col>

          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="contact-form-card">
                <Card.Body className="p-4">
                  <Form ref={form} onSubmit={sendEmail}>
                    <Form.Group className="mb-4">
                      <Form.Label className="form-label">Your Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="name" 
                        placeholder="Enter your name" 
                        required 
                        className="form-input"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="form-label">Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        className="form-input"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="form-label">Your Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        placeholder="Enter your message"
                        required
                        className="form-input"
                      />
                    </Form.Group>

                    <div className="d-flex align-items-center justify-content-between">
                      {submitStatus === "success" && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="submit-success"
                        >
                          <i className="bi bi-check-circle-fill me-2"></i>
                          Message sent successfully!
                        </motion.div>
                      )}
                      {submitStatus === "error" && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="submit-error"
                        >
                          <i className="bi bi-exclamation-circle-fill me-2"></i>
                          Failed to send message
                        </motion.div>
                      )}
                      <Button 
                        variant="primary" 
                        type="submit" 
                        className="submit-button"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-send-fill me-2"></i>
                            Send Message
                          </>
                        )}
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}