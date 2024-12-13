import React from "react";
import useStore from "../zustand/store";
import Projects from "./Projects";
import Skills from "./Skills";
const Middle = () => {
  const activeSection = useStore((state) => state.activeSection);

  return (
    <section className="relative text-white overflow-hidden h-full">
      {/* Layer 1: Gradient Background */}
      <div className="absolute inset-0"></div>

      {/* Layer 2: Subtle Texture */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/white-diamond.png')",
        }}
      ></div>

      {/* Layer 3: Overlapping Decorative Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
        }}
      ></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 text-center">
        {/* Section: About */}
        {activeSection === "about" && (
          <div id="about" className="mb-10">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg leading-relaxed break-words">
              I am a passionate Software Engineer with a knack for solving
              complex problems and building scalable, user-friendly
              applications. With experience in both frontend and backend
              development, I specialize in creating solutions that are
              efficient, robust, and tailored to user needs.
              <br />
              <br />
              Over the course of my career, I have worked with a variety of
              technologies, including Python, Flask, React, PostgreSQL, and AWS,
              to name a few. I have successfully implemented automated testing
              processes, optimized application performance, and contributed to
              projects that enhance user engagement.
            </p>
          </div>
        )}

        {/* Section: Projects */}
        {activeSection === "projects" && (
          <div id="projects" className="mb-10">
            <h2 className="text-4xl font-bold mb-4">My Projects</h2>
            <Projects />
          </div>
        )}

        {/* Section: Skills */}
        {activeSection === "skills" && (
          <div id="skills" className="mb-10">
            <h2 className="text-4xl font-bold mb-4">My Skills</h2>
            <Skills/>
          </div>
        )}

        {/* Section: Contact */}
        {activeSection === "contact" && (
          <div id="contact" className="mb-10">
            <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
            <p className="text-lg leading-relaxed">
              Feel free to reach out to me via email or connect on LinkedIn.
              I'd love to hear from you!
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
