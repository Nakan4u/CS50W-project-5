import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/NavBarStyles.css'

function NavBar() {
  // TODO: move this into its own file
  const routes = {
    Home: "/",
    Bio: "/bio",
    Blog: "/blog",
    Resume: "/resume",
    Contact: "/contact",
  }

  return (
    <nav>
      {Object.keys(routes).map((key, i) => (
        <NavLink key={i} to={routes[key]} >{key}</NavLink>
      ))}
    </nav>
  );
}

export default NavBar;