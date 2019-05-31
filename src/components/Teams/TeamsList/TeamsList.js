import React from "react";
import Team from "../TeamTypes/Team";
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
      <Team
        key={team.id}
        teamLabel={team.teamLabel}
        area={team.area}
        capacity={team.capacity}
        maxCapacity={maxTeamCapacity}
      />
    );
  });

  if (teams.length === 0) {
    return <div className="pad-5"><p>Lonely planet.. Please add some teams</p></div>;
  } else {
    return <div className="pad-5">{teams}</div>;
  }
};

export default TeamsList;
