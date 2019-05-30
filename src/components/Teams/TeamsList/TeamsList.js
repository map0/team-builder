import React from "react";
import TeamTypes from "../TeamTypes/TeamTypes";
import "./TeamsList.css";

const TeamsList = props => {
  const teams = props.teams.map(team => {
    return (
      <TeamTypes
        teamLabel={team.teamLabel}
        area={team.area}
        capacity={team.capacity}
      />
    );
  });

  return <div className="pad-5">{teams}</div>;
};

export default TeamsList;
