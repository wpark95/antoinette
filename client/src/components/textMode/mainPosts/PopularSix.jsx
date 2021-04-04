import React from 'react';

const PopularSix = ({ data }) => {
  const eachItem = data.map((eachData, index) => (
    <li id="popular-six-list" key={eachData.id}>
      <span id={`popular-six ${index + 1}`}>{eachData.paddedid}</span>
      <span id={`popular-six ${index + 1}`}>{eachData.title}</span>
      <span id={`popular-six ${index + 1}`}>{eachData.username}</span>
      <span id={`popular-six ${index + 1}`}>{eachData.leftgame}</span>
      <span id={`popular-six ${index + 1}`}>{eachData.rightgame}</span>
      <span id={`popular-six ${index + 1}`}>{eachData.viewnum}</span>
    </li>
  ));

  return <ul>{eachItem}</ul>;
};
export default PopularSix;
