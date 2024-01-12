import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import PartnersSection from "../components/PartnersSection";
import OpinionsSection from "../components/OpinionsSection";
import ServicesSection from "../components/ServicesSection";

const Sikomobilitycom = () => {
  return (
    <div className="relative bg-gray-100 w-screen text-left text-29xl text-white font-nunito-sans">
      <Nav />
      <ServicesSection />
      <OpinionsSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Sikomobilitycom;
