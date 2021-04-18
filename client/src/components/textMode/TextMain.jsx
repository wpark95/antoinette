import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import Header from '../Header';
import TextMainPosts from './main/TextMainPosts';
import './TextMain.css';

class TextMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: false,
      dataToDisplay: [],
    };
    this.getTopSix = this.getTopSix.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  componentDidMount() {
    this.getTopSix();
  }

  // Re-render if current URL query parameter does not match the previous query parameter
  componentDidUpdate(prevProps) {
    const { location } = this.props;
    const currentMode = queryString.parse(location.search).mode;
    const prevMode = queryString.parse(prevProps.location.search).mode;

    if (currentMode !== prevMode) {
      this.getTopSix();
    }
  }

  // Make a get request to the server using current URL query parameter
  getTopSix() {
    const { location } = this.props;
    let { mode } = queryString.parse(location.search);

    if (mode === undefined) {
      mode = 'popular';
    }

    axios.get(`/textmode/${mode}`)
      .then(({ data }) => {
        this.setState({
          dataToDisplay: data,
        });
      })
      .catch((error) => {
        console.error('ERROR from TextMainPosts.jsx : ', error);
      });
  }

  showDropdown(e) {
    e.preventDefault();
    this.setState({
      dropdown: true,
    });
  }

  closeDropdown() {
    this.setState({
      dropdown: false,
    }, () => {
      this.getTopSix();
    });
  }

  render() {
    const { dataToDisplay, dropdown } = this.state;
    const { match } = this.props;

    return (
      <div className="text-main">
        <Header />
        <div className="text-main-controllers">
          <div className="dropdown">
            <button type="button" className="dropbtn" onClick={this.showDropdown}>DROPDOWN</button>
            {
                dropdown ? (
                  <div className="dropdown-content">
                    <Link to="/textmode/view?mode=popular" onClick={() => this.closeDropdown('popular')}> MOST VIEWS </Link>
                    <Link to="/textmode/view?mode=mostLike" onClick={() => this.closeDropdown('mostLike')}> MOST LIKES </Link>
                    <Link to="/textmode/view?mode=recent" onClick={() => this.closeDropdown('recent')}> RECENT </Link>
                  </div>
                ) : (
                  null
                )
              }
          </div>
          <div className="create-game">
            <Link to="/textmode/create">
              <button id="create-game-btn" type="button">Create Game!</button>
            </Link>
          </div>
        </div>
        <div className="text-main-posts">
          <TextMainPosts data={dataToDisplay} match={match} />
        </div>
      </div>
    );
  }
}

TextMain.defaultProps = {
  location: PropTypes.object,
};
TextMain.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    state: PropTypes.shape({
    }),
  }),
};
TextMain.defaultProps = {
  match: PropTypes.array,
};
TextMain.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({
    }),
    path: PropTypes.string,
    url: PropTypes.string,
  }),
};

export default TextMain;
