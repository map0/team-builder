import React from "react";
import BuildConrol from "./BuildControl";
import "./BuildControlsList.css";

const controls = [
  { label: "HR", area: "hr" },
  { label: "Dev", area: "dev" },
  { label: "Delivery", area: "delivery" },
  { label: "Finances", area: "finances" }
];

const BuildConrolsList = props => {
  return (
    <div className="buildControls">
      {controls.map(ctrl => (
        <BuildConrol key={ctrl.label} label={ctrl.label} />
      ))}
    </div>
  );
};

export default BuildConrolsList;
