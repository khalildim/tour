import React from "react";
import Navbar from "../components/Navbar";
import heroImg from "../assets/2.jpg";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={heroImg} title="Contact" cP="hide" />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
