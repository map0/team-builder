import React from "react";
import TeamTypes from "../TeamTypes/TeamTypes";
import './TeamsList.css'

const TeamsList = props => {
  return (
    <div className="pad-5">
      <TeamTypes area="business" />
      <TeamTypes area="engineering" />
      <TeamTypes area="engineering" />
      <TeamTypes area="engineering" />
      <TeamTypes area="business" />
      <TeamTypes area="engineering" />
    </div>
  );
};

export default TeamsList;
