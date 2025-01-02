import React from 'react';
import "../componentsCss/Layers.css";
import Footer from './Footer';

function Contact() {
  return (
    <div className="main-container bg-gray-100 text-white">

      <div id="about-me" className="flex-grow flex items-center px-6 pt-36 pb-28 bg-gray-800">
        <div className="w-full max-w-4xl mx-auto">
          <div className="spaceMaker h-[80svh] flex items-center justify-center">

            <h3 className="text-2xl font-bold mb-6 text-black">This page will be available soon...</h3>
          
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default Contact