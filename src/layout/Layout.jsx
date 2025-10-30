import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Hero from "../pages/Hero";
import Gallery from "../pages/Gallery";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Astro from "../pages/galleryComponents/Astro";


const Layout = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Layout;
