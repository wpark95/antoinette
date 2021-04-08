import React from 'react';
import SortedTopPosts from './SortedTopPosts';
import './TextMainPosts.css';

// This component might not be needed in the future

const TextMainPosts = ({ data }) => (
  <div>
    <SortedTopPosts data={data} />
  </div>
);

export default TextMainPosts;
