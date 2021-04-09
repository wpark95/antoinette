import React from 'react';
import PropTypes from 'prop-types';
import SortedTopPosts from './SortedTopPosts';
import './TextMainPosts.css';

// This component might not be needed in the future

const TextMainPosts = ({ data }) => (
  <div>
    <SortedTopPosts data={data} />
  </div>
);

TextMainPosts.defaultProps = {
  data: PropTypes.array,
};
TextMainPosts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      post_id: PropTypes.number,
      title: PropTypes.string,
      username: PropTypes.string,
      left_game: PropTypes.string,
      right_game: PropTypes.string,
      view_num: PropTypes.number,
      like_num: PropTypes.number,
    }),
  ),
};

export default TextMainPosts;
