import React from 'react';
import {
  Link,
} from 'react-router-dom';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMode: '',
    };
  }

  render() {
    return (
      <div>
        <Link to="/imagemode">
          <img src="./imageMode.png" alt="" />
        </Link>
        <Link to="/textmode">
          <img src="./textMode.png" alt="" />
        </Link>
      </div>
    );
  }
}

export default LandingPage;
