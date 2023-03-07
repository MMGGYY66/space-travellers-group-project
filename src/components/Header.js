import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="navbar bg-white py-4 px-5 nav-style">
        <img src="/planet.png" alt="Logo" width={50} />
        <h1><Link to="/" className="nav-brand">Space Travelers Hub</Link></h1>
        <ul className="nav nav-titles">
          <li><Link to="/Rockets" className="nav-link navbar-text">Rockets</Link></li>
          <li><Link to="/Missions" className="nav-link navbar-text">Missions</Link></li>
          <li><Link to="/" className="nav-link navbar-text">My Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
