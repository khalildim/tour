import React from "react";
import Navbar from "../components/Navbar";
import heroImg from "../assets/1.jpg";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={heroImg} title="Service" cP="hide" />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
