import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        <h2><a className='font-bold text-4xl text-black ml-10' href="/">LOGO</a></h2>
        <ul>
        <li><a className='text-lg' href="/home">Home</a></li>
        <li><a className='text-lg' href="/about">About</a></li>
        <li><a className='text-lg' href="/projects">Projects</a></li>
        <li><a className='text-lg' href="/contact">Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar