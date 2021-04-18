import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../Header';

const PostView = ({ history, location }) => (
  <div className="text-main">
    <Header />
    <h1>Single Post View</h1>
    <button type="button" onClick={() => history.goBack()}>Back To Menu</button>
    <h2>
      POST ID # :
      {' '}
      {location.state.id}
    </h2>
    <h2>
      USERNAME :
      {' '}
      {location.state.username}
    </h2>
    <h2>
      CONTENT :
      {' '}
      {location.state.leftgame}
      {' '}
      VS
      {' '}
      {location.state.leftgame}
    </h2>
    <h2>
      VIEWS :
      {' '}
      {location.state.views}
    </h2>
    <h2>
      LIKES :
      {' '}
      {location.state.likes}
    </h2>
  </div>
);

PostView.defaultProps = {
  location: PropTypes.object,
  history: PropTypes.object,
};
PostView.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }),
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
