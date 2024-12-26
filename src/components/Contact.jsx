import React from 'react';
import "../componentsCss/Layers.css";
import Footer from './Footer';

function Contact() {
  return (
      <div className="main-container">
      <header>
        {/* <img src={img} alt="Five developers at work." /> */}
        <section class="hero-header-text w-[100%]">
          <h1>Lorem, ipsum dolor.r</h1>
          <p className='text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, quidem? Quibusdam alias blanditiis minus atque veritatis voluptas, corporis dolorem iste saepe odit incidunt?</p>
          <button className='mt-3'>Read more.</button>
        </section>
      </header>
      <Footer/>
    </div>
  )
}

export default Contact