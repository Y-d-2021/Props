import React from "react";

const Child = ({ str, y, test, array }) => {
  

  return (
    <div>
      <h2>{test ? str : "there is no name"}</h2>
      <h2>Si {y}</h2>
      {}
      {array.map((el, i) => (
        <div>{el.name}</div>
      ))}
      <hr />
    </div>
  );
};

export default Child;