import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../Header';

const PostView = ({ location }) => (
  <div className="text-main">
    <Header />
    <h1>Single Post View</h1>
    <h2>{location.state.id}</h2>
    <h2>{location.state.username}</h2>
    <h2>
      {location.state.leftgame}
      {' '}
      VS
      {' '}
      {location.state.leftgame}
    </h2>
    <h2>
      VIEWS:
      {location.state.views}
    </h2>
    <h2>
      LIKES:
      {location.state.likes}
    </h2>
  </div>
);

PostView.defaultProps = {
  location: PropTypes.object,
};
PostView.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      leftgame: PropTypes.string,
      rightgame: PropTypes.string,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};

export default PostView;
