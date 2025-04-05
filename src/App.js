import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import DailySeva from "./components/DailySeva";
import MonthlySeva from "./components/MonthlySeva";
import OtherSeva from "./components/OtherSeva";
import Photos from "./components/Photos";
import Donations from "./components/Donations";
import SevaDetail from "./components/SevaDetail";
import PaymentPage from "./components/Payment"; 
import Receipt from "./components/Receipt";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      <Route path="/daily-seva" element={<DailySeva />} />
      <Route path="/monthly-seva" element={<MonthlySeva />} />
      <Route path="/other-seva/:id" element={<SevaDetail />} />
        <Route path="/other-seva" element={<OtherSeva />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/donations" element={<Donations />} />
        {/* 👉 New Routes for Seva Detail and Payment */}
        <Route path="/seva/:id" element={<SevaDetail />} />
        <Route path="/payment/:id" element={<PaymentPage />} />
        <Route path="/receipt" element={<Receipt />} />
      </Routes>
    </Router>
  );
}

export default App;
