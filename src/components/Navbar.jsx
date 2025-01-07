import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom
import devIcon from "../img/Icons/developer.png";

function Navbar() {
  return (
    <div className='navbar'>
      {/* <h2>
        <Link className='font-bold text-4xl text-black ml-10' to="/">
          <img src={devIcon} alt="Developer at work." className='devIcon'/> 
        </Link>
      </h2> */}
      <ul>
        <Link className='font-bold text-4xl text-black ml-10' to="/">
          <img src={devIcon} alt="Developer at work." className='devIcon bg-white p-2' style={{width:"50px", borderRadius: "15px"}}/> 
        </Link> {/* Use Link instead of anchor */}
        <li><Link className='text-base' to="/01-portfolio">Home</Link></li> {/* Use Link here as well */}
        <li><Link className='text-base' to="/01-portfolio/about">About</Link></li>
        <li><Link className='text-base' to="/01-portfolio/projects">Projects</Link></li>
        <li><Link className='text-base' to="/01-portfolio/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
