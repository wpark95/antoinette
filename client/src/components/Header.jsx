import React from 'react';
// import axios from 'axios';
import {
  NavLink,
} from 'react-router-dom';
import './Header.css';

const header = () => (
  <div className="header-container">
    <nav className="nav-list">
      <li className="header-btn-home">
        <NavLink to="/">
          <img id="logo" src="/anlogo.png" alt="" />
        </NavLink>
      </li>
      <li className="header-btn-mode">
        <NavLink to="/imagemode">
          Image Mode
        </NavLink>
      </li>
      <li className="header-btn-mode">
        <NavLink to="/textmode">
          Text Mode
        </NavLink>
      </li>
    </nav>
  </div>
);

export default header;
