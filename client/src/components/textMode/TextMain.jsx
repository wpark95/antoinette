import React from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import Header from '../Header';
import TextMainPosts from './mainPosts/TextMainPosts';

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
        <Link to="/textmode/create">
          <button type="button">Create Game!</button>
        </Link>
        <TextMainPosts />
      </div>

    );
  }
}

export default TextMain;
