import React from 'react';
import "../componentsCss/Layers.css";
import Footer from './Footer';

function About() {
  return (
    <div className="main-container bg-gray-100 text-white">

      <div id="about-me" className="flex-grow flex items-center px-6 pt-36 pb-28 bg-gray-800">
        <div className="w-full max-w-4xl mx-auto">
          <section className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-black">ABOUT ME : </h3>
            <p className="text-lg leading-relaxed mb-6">
              I am a passionate Software Engineer with a drive to create impactful software solutions that foster growth and efficiency across various industries. With a strong foundation in software design, development, and implementation, I excel at solving complex problems and delivering scalable, reliable systems.
            </p>
            <h4 className="text-xl font-semibold mb-4">Key strengths include:</h4>
            <ul className="list-disc space-y-3 text-left max-w-3xl mx-auto">
              <li>Proficiency in multiple programming languages and a solid understanding of software architecture.</li>
              <li>In-depth knowledge of database management, system integration, and cloud technologies.</li>
              <li>A keen problem-solver, with a passion for continuous learning and keeping up-to-date with technological advancements.</li>
              <li>Skilled in delivering solutions that exceed business goals while promoting collaboration and professional growth.</li>
            </ul>
            <p className="text-lg text-center mt-6">Let’s innovate together! 🚀</p>
          </section>

          {/* Education Section */}
          <section className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-black">EDUCATION : </h3>
            <ul className="list-disc text-left max-w-3xl mx-auto space-y-3">
              <li>Diploma in Computer Science, Shri Datta Meghe Polytechnic (2017 - 2020)</li>
              <li>Bachelor’s in Information Technology, Wainganga College of Engineering and Management (2021 - 2023)</li>
            </ul>
          </section>

          {/* Skills Section */}
          <section>
            <h3 className="text-2xl font-bold mb-6 text-black">SKILLS : </h3>
            <ul className="list-disc text-left max-w-3xl mx-auto space-y-3">
              <li>Proficient in JavaScript, Python, Java, and SQL</li>
              <li>Experienced with frameworks like React, Node.js, Flask, and Django</li>
              <li>Strong knowledge of database management (PostgreSQL, MongoDB)</li>
              <li>Familiar with cloud technologies (AWS, Azure)</li>
              <li>Version control using Git/GitHub, and CI/CD practices</li>
            </ul>
          </section>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default About