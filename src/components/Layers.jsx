import React from 'react';
import Navbar from './Navbar';
import Middle from './Middle';

const Layers = () => {
  return (
    <div className="h-screen overflow-y-auto bg-gradient-to-r from-[#474249] via-[#748da1] to-[#0b0d1c] text-white shadow-lg">
      <Navbar />
      <Middle />
    </div>
  );
};

export default Layers;
