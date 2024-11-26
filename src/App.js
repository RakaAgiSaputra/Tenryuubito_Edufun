import React from "react";
import AboutContent from "./components/aboutContent";
import ContactUs from "./components/contactUs";
import LandingPage from "./pages/landing-page"
import LoginPage from "./pages/loginPage"
import RegisterPage from "./pages/registerPage";
import MainContent from "./pages/main/mainContent";
import BukuCerita from "./pages/main/buku_cerita";
import CeritaPembuka from "./pages/main/cerita_pembuka";
import Misi from "./pages/main/misi";
import VideoEdukasi from "./pages/main/video_edukasi";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function MyApp() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/registerpage" element={<RegisterPage />} />
          <Route path="/maincontent" element={<MainContent />} />
          <Route path="/contacs" element={<ContactUs />} />
          {/* <Route path="/bukucerita" element={<BukuCerita />} />
          <Route path="/ceritapembuka" element={<CeritaPembuka />} />
          <Route path="/misi" element={<Misi />} />
          <Route path="/videoedukasi" element={<VideoEdukasi/>} /> */}
        </Routes>
        <footer></footer>
      </Router>
    </>
  );
}

export default MyApp;
