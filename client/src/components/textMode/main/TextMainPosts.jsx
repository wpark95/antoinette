import React from 'react';
import PropTypes from 'prop-types';
import SortedTopPosts from './SortedTopPosts';
import './TextMainPosts.css';

// This component might not be needed in the future

const TextMainPosts = ({ data, match }) => (
  <>
    <SortedTopPosts data={data} match={match} />
  </>
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
TextMainPosts.defaultProps = {
  match: PropTypes.array,
};
TextMainPosts.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({
    }),
    path: PropTypes.string,
    url: PropTypes.string,
  }),
};

export default TextMainPosts;
