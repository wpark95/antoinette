import React from 'react';
import {
  Route, Link, Switch,
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
        <Link to="textmode/create">
          <button>Create Game!</button>
        </Link>
      </div>

    );
  }
}

export default TextMain;
