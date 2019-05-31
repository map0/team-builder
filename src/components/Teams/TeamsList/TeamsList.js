import React from "react";
import TeamTypes from "../TeamTypes/TeamTypes";
import "./TeamsList.css";

const TeamsList = props => {
  const maxTeamCapacity = props.teams.reduce((acc, team) => {
    if (team.capacity > acc) {
      acc = team.capacity;
    }
    return acc;
  }, 0);

  const teams = props.teams.map(team => {
    return (
      <TeamTypes
        key={team.id}
        teamLabel={team.teamLabel}
        area={team.area}
        capacity={team.capacity}
        maxCapacity={maxTeamCapacity}
      />
    );
  });

  return <div className="pad-5">{teams}</div>;
};

export default TeamsList;
