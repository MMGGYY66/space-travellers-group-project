import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <button type="button"><img src="/planet.png" alt="Logo" width={30} /></button>
          <h1><Link to="/">Space Travelers Hub</Link></h1>
          <li><Link to="/Rockets">Rockets</Link></li>
          <li><Link to="/Missions">Missions</Link></li>
          <li><Link to="/">My Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
