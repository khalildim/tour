import React from "react";
import Navbar from "../components/Navbar";
import heroImg from "../assets/night.jpg";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={heroImg} title="About" cP="hide" />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
