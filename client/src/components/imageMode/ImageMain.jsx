import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import Header from '../Header';

// import axios from 'axios';

class ImageMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedView: '',
    };
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Image Main</h1>
        <ul>
          <li>
            <button>Create Game</button>
          </li>
        </ul>
      </div>

    );
  }
}

export default ImageMain;
