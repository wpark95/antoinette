import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import PopularSix from "./PopularSix";

class TextMainPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: "popular",
      dataSix: [],
    };
    this.getTopSix = this.getTopSix.bind(this);
  }

  componentDidMount() {
    this.getTopSix();
  }

  getTopSix() {
    const { sortBy } = this.state;

    axios
      .get(`/textmode/${sortBy}`)
      .then(({ data }) => {
        this.setState({
          dataSix: data,
        });
      })
      .catch((err) => {
        console.log('ERROR : ', err);
      });
  }

  render() {
    const { dataSix } = this.state;
    return (
      <div>
        <PopularSix data={dataSix} />
      </div>
    );
  }
}

export default TextMainPosts;
