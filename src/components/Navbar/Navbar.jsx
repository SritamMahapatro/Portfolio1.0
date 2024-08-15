import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-name'>
        <h1>Sritam Mahapatro</h1>
      </div>
      <ul className='nav-menu'>
        <li><NavLink to="/Home">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/education">Education</NavLink></li>
        <li><NavLink to="/certification">Certification</NavLink></li>
        <li><NavLink to="/skills">Skills</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/contact">Contact me</NavLink></li>
      </ul>
    </div>
  );
}

export default Navbar;