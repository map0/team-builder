import React, { Component } from "react";
import TeamsList from "../components/Teams/TeamsList/TeamsList";

class TeamsBuilder extends Component {
  render() {
    return (
      <>
        <TeamsList />
        <div>Team build controls</div>
      </>
    );
  }
}

export default TeamsBuilder;
