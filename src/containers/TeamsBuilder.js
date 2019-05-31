import React, { Component } from "react";
import TeamsList from "../components/Teams/TeamsList/TeamsList";

class TeamsBuilder extends Component {
  state = {
    teams: [
      {
        id: 'scvg2322',
        teamLabel: "dev",
        area: "engineering",
        capacity: 5,
        methodology: ["kanban", "RnD"],
        tags: ["front-end", "back-end", "full-stack"]
      },
      {
        id: 'joi324',
        teamLabel: "hr",
        area: "business",
        capacity: 2,
        methodology: ["ERP"],
        tags: ["human"]
      },
      {
        id: 'oiiwe3443',
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
