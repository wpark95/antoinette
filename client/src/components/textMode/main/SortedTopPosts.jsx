import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

const SortedTopPosts = ({ data, match }) => {
  const { path } = match;
  const { url } = useRouteMatch();
  console.log('URL : ', url);

  const eachItem = data.map((eachData) => (
    <li id={`text-post id-${eachData.post_id}`} key={eachData.post_id}>
      <Link
        to={{
          pathname: `${path}view/${eachData.post_id}`,
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
        <span>
          USERNAME :
          {' '}
          {eachData.username}
        </span>
        <span>
          &nbsp;
          CONTENT :
          {' '}
          {eachData.left_game}
          {' '}
          VS
          {' '}
          {eachData.right_game}
        </span>
        <span>
          &nbsp;
          VIEWS :
          {' '}
          {eachData.view_num}
        </span>
        <span>
          &nbsp;
          LIKES :
          {' '}
          {eachData.like_num}
        </span>
      </Link>
    </li>
  ));

  return <ul id="sorted-post-ul">{eachItem}</ul>;
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
SortedTopPosts.defaultProps = {
  match: PropTypes.array,
};
SortedTopPosts.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({
    }),
    path: PropTypes.string,
    url: PropTypes.string,
  }),
};

export default SortedTopPosts;
