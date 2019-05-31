import React from "react";

const TotalCost = props => {
  const teamCost = props.teamData
    .map(team => {
      return team.capacity * team.costPerEmployee;
    })
    .reduce((acc, val) => acc + val);

  return <h3>Runway cost salaries: {teamCost} </h3>;
};

export default TotalCost;
