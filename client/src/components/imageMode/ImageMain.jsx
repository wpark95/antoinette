import React from 'react';
import {
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
      </div>

    );
  }
}

export default ImageMain;
