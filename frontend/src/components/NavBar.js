import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/bio">Bio</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}

export default NavBar;