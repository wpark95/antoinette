import React from 'react';
// import axios from 'axios';
import {
  Link,
} from 'react-router-dom';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <nav>
          <ul className="nav-list">
            <Link to="/">
              <img id="logo" src="anlogo.png" alt="" />
            </Link>
            <Link to="/imagemode">
              <li>Image Mode</li>
            </Link>
            <Link to="/textmode">
              <li>Text Mode</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}

export default LandingPage;
