import React from 'react';
import "../componentsCss/Layers.css";
import Footer from './Footer';
import MyImage from "../img/iron-man.webp"; // Replace with the actual path to your image

const Layers = () => {
  return (
    <div className="main-container bg-gray-100">
      <header className="h-[130svh] w-full relative flex items-center justify-center bg-gray-800">
        {/* Hero Content */}
        <section className="relative z-10 text-center text-white px-6 w-full max-w-4xl flex flex-col items-center">
          {/* Image Section */}
          <div className="w-full mb-6">
            <img
              src={MyImage} // Replace with the actual path to your image
              alt="My Portrait"
              className="rounded-lg shadow-lg w-full max-w-sm mx-auto"
            />
          </div>

          {/* Text Section */}
          <div className="w-full mt-10">
            <h3 className="md:text-3xl font-bold mb-4">
              Building Solutions for a Better Tomorrow
            </h3>
            <p className="text-md text-white md:text-xl mb-4 leading-relaxed">
              As a dedicated Software Engineer, I specialize in building innovative solutions that meet the unique challenges of each project.
            </p>
            {/* <p className="text-md text-white md:text-xl mb-6 leading-relaxed">
              My goal is to create systems that not only solve problems but also enhance user experience and drive business growth. Let's bring your ideas to life with cutting-edge technology and thoughtful design.
            </p> */}
          </div>
        </section>
      </header>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Layers;
