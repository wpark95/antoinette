import React from 'react';
import {
  Link,
} from 'react-router-dom';

const landingPage = () => (
  <div>
    <Link to="/imagemode">
      <img src="./landingPage.png" alt="" />
    </Link>
    <Link to="/imagemode">
      <img src="./imageMode.png" alt="" />
    </Link>
    <Link to="/textmode">
      <img src="./textMode.png" alt="" />
    </Link>
  </div>
);

export default landingPage;
