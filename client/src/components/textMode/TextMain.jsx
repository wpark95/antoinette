import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
// import axios from 'axios';
import Header from '../Header';

class TextMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Text Main</h1>
      </div>
    );
  }
}

export default TextMain;
