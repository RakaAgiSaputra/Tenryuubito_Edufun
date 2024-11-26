import React from "react";
import Navbar from "../components/navbar";
import HomeContent from "../components/homeContent";
import AboutContent from "../components/aboutContent";
import ContactUs from "../components/contactUs";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HomeContent />
      <AboutContent />
      <ContactUs />
    </div>
  );
};

export default LandingPage;
