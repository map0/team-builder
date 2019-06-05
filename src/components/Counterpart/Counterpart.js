import React from "react";
import './Counterpart.css';

const counterpart = props => (
  <div className="Person" onClick={props.clicked}>
    <h1>{props.name}</h1>
    <p>Years Experience: {props.yearsExperience}</p>
    <p>Counterpart Team: {props.counterpartTeam}</p>
  </div>
);

export default counterpart;
