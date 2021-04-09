import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SortedTopPosts = ({ data }) => {
  const eachItem = data.map((eachData, index) => (
    <li id="top-six-list" key={eachData.post_id}>
      <Link
        to={{
          pathname: `/textmode/${eachData.post_id}`,
          state: {
            id: eachData.post_id,
            username: eachData.username,
            leftgame: eachData.left_game,
            rightgame: eachData.right_game,
            views: eachData.view_num,
            likes: eachData.like_num,
          },
        }}
      >
        <span id={`top-six ${index + 1}`}>
          USERNAME :
          {eachData.username}
        </span>
        {/* <br /> */}
        <span id={`top-six ${index + 1}`}>
          {eachData.left_game}
            &nbsp;VS&nbsp;
          {eachData.right_game}
        </span>
        <span id={`top-six ${index + 1}`}>
          VIEWS :
          {eachData.view_num}
        </span>
        {/* <br /> */}
        <span id={`top-six ${index + 1}`}>
          LIKES :
          {eachData.like_num}
        </span>
      </Link>
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
