import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-gray-100 via-white to-gray-200 text-gray-700 py-8">
      {/* Layer 1: Gradient Background */}
      <div className="absolute inset-0"></div>

      {/* Layer 2: Subtle Texture */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/white-diamond.png')",
        }}
      ></div>

      {/* Layer 3: Decorative Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
        }}
      ></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        {/* Footer Links */}
        <div className="mb-6 space-x-6">
          <a
            href="#about"
            className="text-lg font-medium hover:text-gray-500 transition duration-200"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-lg font-medium hover:text-gray-500 transition duration-200"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-lg font-medium hover:text-gray-500 transition duration-200"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-lg font-medium hover:text-gray-500 transition duration-200"
          >
            Contact
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="mb-6 space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-500 transition duration-200"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-500 transition duration-200"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-500 transition duration-200"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-sm font-light">
          &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
