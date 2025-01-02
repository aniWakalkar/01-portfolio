import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About"; // Import About component
import Contact from "./components/Contact"; // Import Contact component
import Layers from "./components/Layers"; // Assuming Layers is the Home page
import Navbar from "./components/Navbar";
import Projects from "./components/Projects"; // Import Projects component

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<Layers />} /> {/* Home page */}
        <Route path="/about" element={<About />} /> {/* About page */}
        <Route path="/projects" element={<Projects />} /> {/* Projects page */}
        <Route path="/contact" element={<Contact />} /> {/* Contact page */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
