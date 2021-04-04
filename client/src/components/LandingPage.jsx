import React from 'react';
import {
  Link,
} from 'react-router-dom';
import './LandingPage.css';

const landingPage = () => (
  <div className="landing-container">
    <div className="landing-mainlogo-container">
      <Link to="/imagemode">
        <img className="landing-logo main" src="./landingPage.png" alt="" />
      </Link>
    </div>
    <div className="landing-option-container">
      <Link to="/imagemode">
        <img className="landing-logo image" src="./imageMode.png" alt="" />
      </Link>
      <Link to="/textmode">
        <img className="landing-logo text" src="./textMode.png" alt="" />
      </Link>
    </div>

  </div>
);

export default landingPage;
