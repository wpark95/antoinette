import React from 'react';
// import axios from 'axios';
import {
  NavLink,
} from 'react-router-dom';

const header = () => (
  <div>
    <nav>
      <ul className="nav-list">
        <li>
          <NavLink to="/">
            <img id="logo" src="/anlogo.png" alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/imagemode">
            Image Mode
          </NavLink>
        </li>
        <li>
          <NavLink to="/textmode">
            Text Mode
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default header;
