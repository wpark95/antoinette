import React from 'react';

const PopularSix = ({ data }) => {
  const eachItem = data.map((eachData, index) => (
    <li id="popular-six-list" key={eachData.post_id}>
      <span id={`popular-six ${index + 1}`}>{eachData.post_id}</span>
      <span id={`popular-six ${index + 1}`}>{eachData.title}</span>
      <span id={`popular-six ${index + 1}`}>{eachData.username}</span>
      <span id={`popular-six ${index + 1}`}>{eachData.left_game}</span>
      <span id={`popular-six ${index + 1}`}>{eachData.right_game}</span>
      <span id={`popular-six ${index + 1}`}>{eachData.view_num}</span>
      <span id={`popular-six ${index + 1}`}>{eachData.like_num}</span>
    </li>
  ));

  return <ul id="popular-six-ul">{eachItem}</ul>;
};
export default PopularSix;
