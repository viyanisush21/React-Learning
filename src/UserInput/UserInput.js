import React from "react";

const userInput = props => {
  const Style = {
    border: "2px solid pink"
  };

  return (
    <input
      type="text"
      style={Style}
      onChange={props.changed}
      value={props.presentname}
    />
  );
};

export default userInput;
