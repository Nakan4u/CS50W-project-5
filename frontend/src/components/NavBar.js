import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './styles/NavBarStyles.css' 
import hamburger_icon from '../images/icons/hamburger_icon.svg';

function NavBar() {
  const [expandLinks, setExpandLinks] = useState(false);

  // Perhaps this array could be moved to its own file and passed as props?
  const routes = {
    Projects: "/projects",
    Resume: "/resume",
    Blog: "/blog",
    Contact: "/contact",
  }

  return (
    <nav className="nav">
      <div className="navbar-whitespace"/>
      <div className="navLeftSide">
        <NavLink exact={true} to={"/"}>Calum Bell</NavLink>
      </div>
      <div className="navRightSide">
        <div className="linkList" id={expandLinks ? "navPopupMenu" : ""}>
          {Object.keys(routes).map((key, i) => (
            <NavLink 
              key={i} 
              to={routes[key]}
              onClick={() =>  setExpandLinks(false)}
            > {key} </NavLink>
          ))}
          
        </div>
        <img className="navbar-expand-menu-btn" 
             src={hamburger_icon}
             onClick={() => setExpandLinks(!expandLinks)} 
             alt="expand navigation menu"/>
      </div>
      <div className="navbar-whitespace" />
    </nav>
  );
}
// <button onClick={() => setExpandLinks(!expandLinks)}>Navigation</button>
export default NavBar; 