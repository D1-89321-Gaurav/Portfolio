import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Education from "./components/Education";
import 'bootstrap-icons/font/bootstrap-icons.css';

// Inside App return:


export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education/>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
