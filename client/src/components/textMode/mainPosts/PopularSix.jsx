import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PopularSix = ({ data }) => {
  const eachItem = data.map((eachData) => (
    <div>
      <h1>{eachData.id}</h1>
      <h1>{eachData.paddedId}</h1>
    </div>
  ));

  return <ul>{eachItem}</ul>;
};
export default PopularSix;
