import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import TextMainPosts from './mainPosts/TextMainPosts';
import './TextMain.css';

const TextMain = () => (
  <div className="text-main">
    <Header />
    <h1>Text Main</h1>
    <div className="text-main-controllers">
      <TextMainPosts />
      <Link to="/textmode/create">
        <button id="create-game-btn" type="button">Create Game!</button>
      </Link>
    </div>
  </div>
);
export default TextMain;
