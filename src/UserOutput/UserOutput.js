import React from "react";
import "./UserOutput.css";

const userOutput = props => {
  return (
    <div className="UserOutput">
      <p>UserName : {props.UserName}</p>
      <p>hello</p>
    </div>
  );
};

export default userOutput;
