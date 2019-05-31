import React from "react";
import "./BuildControl.css";

const BuildControls = props => {
  return (
    <div className="buildControl">
      <div className="label">{props.label}</div>
      <button
        className="less"
        onClick={() => props.updateTeam(props.label, "remove")}
      >
        Less
      </button>
      <button
        className="more"
        onClick={() => props.updateTeam(props.label, "add")}
      >
        More
      </button>
    </div>
  );
};

export default BuildControls;
