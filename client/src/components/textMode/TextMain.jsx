import React from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import Header from '../Header';
import TextMainPosts from './mainPosts/TextMainPosts';
import './TextMain.css';

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
        <div className="text-main-controllers">
          <Link to="/textmode/create">
            <button id="create-game-btn" type="button">Create Game!</button>
          </Link>
          <TextMainPosts />
        </div>

      </div>

    );
  }
}

export default TextMain;
