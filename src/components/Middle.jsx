import React from "react";
import useStore from "../zustand/store";

const Middle = () => {
  const activeSection = useStore((state) => state.activeSection); 

  return (
    <section className="relative text-white h-[80vh] overflow-hidden">
      {/* Layer 1: Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-500"></div>

      {/* Layer 2: Subtle Texture */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/white-diamond.png')",
        }}
      ></div>

      {/* Layer 3: Overlapping Decorative Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
        }}
      ></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 text-center mt-20">
        {/* Section: About */}
        {activeSection === "about" && (
          <div id="about" className="mb-10">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg leading-relaxed">
              Hello! I'm a passionate web developer with a love for creating beautiful and functional web applications.
              I specialize in React, JavaScript, and Tailwind CSS.
            </p>
          </div>
        )}

        {/* Section: Projects */}
        {activeSection === "projects" && (
          <div id="projects" className="mb-10">
            <h2 className="text-4xl font-bold mb-4">My Projects</h2>
            <p className="text-lg leading-relaxed">
              Check out some of my latest projects that showcase my skills in full-stack development.
            </p>
            {/* Example Projects List */}
            <ul className="list-disc list-inside mt-4">
              <li>Project 1: E-Commerce Website</li>
              <li>Project 2: Social Media App</li>
              <li>Project 3: Blogging Platform</li>
            </ul>
          </div>
        )}

        {/* Section: Skills */}
        {activeSection === "skills" && (
          <div id="skills" className="mb-10">
            <h2 className="text-4xl font-bold mb-4">My Skills</h2>
            <p className="text-lg leading-relaxed">
              I have experience in several technologies and frameworks. Some of my key skills include:
            </p>
            {/* Skills List */}
            <ul className="list-disc list-inside mt-4">
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        )}

        {/* Section: Contact */}
        {activeSection === "contact" && (
          <div id="contact" className="mb-10">
            <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
            <p className="text-lg leading-relaxed">
              Feel free to reach out to me via email or connect on LinkedIn. I'd love to hear from you!
            </p>
            <p className="mt-4">Email: example@example.com</p>
            <p>LinkedIn: linkedin.com/in/example</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Middle;
