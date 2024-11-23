import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Location from "../components/Location";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <Location />
      <Footer />
    </>
  );
};

export default Home;
