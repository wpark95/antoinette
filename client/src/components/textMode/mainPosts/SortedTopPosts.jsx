import React from 'react';
import PropTypes from 'prop-types';

const SortedTopPosts = ({ data }) => {
  const eachItem = data.map((eachData, index) => (
    <li id="top-six-list" key={eachData.post_id}>
      <span id={`top-six ${index + 1}`}>
        POST ID# :
        {eachData.post_id}
      </span>
      <br />
      <span id={`top-six ${index + 1}`}>
        TITLE :
        {eachData.title}
      </span>
      <br />
      <span id={`top-six ${index + 1}`}>
        USERNAME :
        {eachData.username}
      </span>
      <br />
      <span id={`top-six ${index + 1}`}>
        LEFT GAME :
        {eachData.left_game}
      </span>
      <br />
      <span id={`top-six ${index + 1}`}>
        RIGHT GAME :
        {eachData.right_game}
      </span>
      <br />
      <span id={`top-six ${index + 1}`}>
        VIEWS :
        {eachData.view_num}
      </span>
      <br />
      <span id={`top-six ${index + 1}`}>
        LIKES :
        {eachData.like_num}
      </span>
    </li>
  ));

  return <ul id="top-six-ul">{eachItem}</ul>;
};

SortedTopPosts.defaultProps = {
  data: PropTypes.array,
};
SortedTopPosts.propTypes = {
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

export default SortedTopPosts;
