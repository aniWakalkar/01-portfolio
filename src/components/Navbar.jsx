import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        <h2><a className='font-bold text-4xl' href="/"><b className='text-[#f04e23]'>L</b><b className='text-blue-400'>O</b><b className='text-green-400'>G</b><b className='text-white'>O</b></a></h2>
        <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar