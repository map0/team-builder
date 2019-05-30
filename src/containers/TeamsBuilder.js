import React, { Component } from "react";
import TeamsList from "../components/Teams/TeamsList/TeamsList";

class TeamsBuilder extends Component {
  state = {
    teams: [
      {
        teamLabel: "dev",
        area: "engineering",
        capacity: 5,
        methodology: ["kanban", "RnD"],
        tags: ["front-end", "back-end", "full-stack"]
      },
      {
        teamLabel: "hr",
        area: "business",
        capacity: 2,
        methodology: ["ERP"],
        tags: ["human"]
      },
      {
        teamLabel: "delivery",
        area: "business",
        capacity: 1,
        methodology: ["plan and comunicate", "travel"],
        tags: ["delivery"]
      }
    ]
  };

  render() {
    return (
      <>
        <TeamsList teams={this.state.teams} />
        <div>Team build controls</div>
      </>
    );
  }
}

export default TeamsBuilder;
