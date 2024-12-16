import React from 'react';
import "../componentsCss/Layers.css";
import img from "../img/Home-bg-1.jpg";
import Footer from './Footer';
import Navbar from './Navbar';

const Layers = () => {
  return (
    <div className="main-container">
      <Navbar/>
      <header>
        <img src={img} alt="Five developers at work." />
        <section class="hero-header-text">
          <h1>Aniket Wakalkar</h1>
          <p className='text-lg'>Experienced Software Engineer skilled in software design, development, system integration, and
          problem-solving, aiming to drive technological advancements in a dynamic organization.</p>
          <button className='mt-3'>Read more.</button>
        </section>
      </header>
      <Footer/>
    </div>
  );
};



export default Layers;
