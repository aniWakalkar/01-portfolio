import React from "react";
import useStore from "../zustand/store";

const Navbar = () => {
  // Accessing the setter function from the store
  const setActiveSection = useStore((state) => state.setActiveSection);

  // Handle section change (avoid page reload)
  const handleSectionChange = (section, e) => {
    e.preventDefault();  // Prevent page reload
    setActiveSection(section);  // Set active section using the store function
  };

  return (
    <header className="px-5 relative bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-500 text-white shadow-lg">
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
      <div className="relative container mx-auto px-8 py-4 flex justify-between items-center pt-10">
        {/* Logo Section */}
        <div className="text-2xl font-bold tracking-wide">
          MyPortfolio
        </div>
        {/* Navigation */}
        <nav className="space-x-6">
          <a
            href="/"
            onClick={(e) => handleSectionChange("about", e)}
            className="text-lg font-medium hover:text-indigo-200 transition duration-200"
          >
            About
          </a>
          <a
            href="/"
            onClick={(e) => handleSectionChange("projects", e)}
            className="text-lg font-medium hover:text-indigo-200 transition duration-200"
          >
            Projects
          </a>
          <a
            href="/"
            onClick={(e) => handleSectionChange("skills", e)}
            className="text-lg font-medium hover:text-indigo-200 transition duration-200"
          >
            Skills
          </a>
          <a
            href="/"
            onClick={(e) => handleSectionChange("contact", e)}
            className="text-lg font-medium hover:text-indigo-200 transition duration-200"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
