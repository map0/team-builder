import React from "react";
import BuildConrol from "./BuildControl";
import "./BuildControlsList.css";

const controls = [
  { label: "hr", area: "hr" },
  { label: "dev", area: "dev" },
  { label: "delivery", area: "delivery" },
  { label: "RnD", area: "RnD" },
  { label: "assistant", area: "assistant" }
];

const BuildConrolsList = props => {
  return (
    <div className="buildControls">
      {controls.map(ctrl => (
        <BuildConrol
          key={ctrl.label}
          label={ctrl.label}
          updateTeam={props.updateTeam}
        />
      ))}
    </div>
  );
};

export default BuildConrolsList;
