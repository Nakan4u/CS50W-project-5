import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './styles/NavBarStyles.css'

function NavBar() {
  const [expandLinks, setExpandLinks] = useState(false);

  // Perhaps this array could be moved to its own file and passed as props?
  const routes = {
    Bio: "/bio",
    Blog: "/blog",
    Resume: "/resume",
    Contact: "/contact",
  }

  return (
    <nav>
      <div className="navLeftSide">
        <NavLink to={"/"}>Calum Bell</NavLink>
      </div>
      <div className="navRightSide">
        <div className="linkList" id={expandLinks ? "navPopupMenu" : ""}>
          {Object.keys(routes).map((key, i) => (
            <NavLink key={i} to={routes[key]}
              onClick={() => setExpandLinks(false)}
            > {key} </NavLink>
          ))}
        </div>
        <button onClick={() => setExpandLinks(!expandLinks)}>Navigation</button>
      </div>
    </nav>
  );
}

export default NavBar; 