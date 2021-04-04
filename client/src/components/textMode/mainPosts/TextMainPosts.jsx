import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

class TextMainPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'popular',
    };
    this.getTopSix = this.getTopSix.bind(this);
  }

  componentDidMount() {
    this.getTopSix();
  }

  getTopSix() {
    const { sortBy } = this.state;

    axios.get(`/textmode/${sortBy}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>POST</h1>
      </div>

    );
  }
}

export default TextMainPosts;
