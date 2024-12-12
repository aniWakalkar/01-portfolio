import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold tracking-wide">
          MyPortfolio
        </div>
        {/* Navigation */}
        <nav className="space-x-6">
          <a
            href="#about"
            className="text-lg font-medium hover:text-gray-300 transition duration-200"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-lg font-medium hover:text-gray-300 transition duration-200"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-lg font-medium hover:text-gray-300 transition duration-200"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-lg font-medium hover:text-gray-300 transition duration-200"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
