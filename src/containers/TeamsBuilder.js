import React, { Component } from "react";
import TeamsList from "../components/Teams/TeamsList/TeamsList";
import BuildConrolsList from "../components/Teams/BuildControls/BuildConrolsList";
import TotalCost from "../components/Cost/TotalCost";

class TeamsBuilder extends Component {
  state = {
    teams: [
      {
        id: "joi324",
        teamLabel: "hr",
        area: "business",
        capacity: 2,
        costPerEmployee: 2000
      },
      {
        id: "scvg2322",
        teamLabel: "dev",
        area: "engineering",
        capacity: 5,
        costPerEmployee: 1000
      },
      {
        id: "oiiwe3443",
        teamLabel: "delivery",
        area: "business",
        capacity: 1,
        costPerEmployee: 3000
      },
      {
        id: "oiiwsssde3443",
        teamLabel: "RnD",
        area: "engineering",
        capacity: 1,
        costPerEmployee: 5000
      },
      {
        id: "oisits3443",
        teamLabel: "assistant",
        area: "business",
        capacity: 1,
        costPerEmployee: 1850
      }
    ]
  };

  updateTeamMember = (teamToUpdate, operation) => {
    let teamIndex = null;
    let teamOldState = this.state.teams.find((team, index) => {
      teamIndex = index;
      return team.teamLabel === teamToUpdate;
    });

    const teamNewState = {
      ...teamOldState
    };

    switch (operation) {
      case "add":
        teamNewState.capacity += 1;

        break;

      case "remove":
        if (teamNewState.capacity - 1 >= 0) {
          teamNewState.capacity -= 1;
        }
        break;
      default:
        break;
    }

    const updatedTeams = [
      ...this.state.teams.slice(0, teamIndex),
      teamNewState,
      ...this.state.teams.slice(teamIndex + 1)
    ];
    // }

    this.setState({ teams: updatedTeams });
  };

  render() {
    return (
      <>
        <div style={{ textAlign: "center", fontWeight: "bold" }}>
          Cost/employee planner:
        </div>
        <TeamsList teams={this.state.teams} />
        <BuildConrolsList updateTeam={this.updateTeamMember} />
        <TotalCost teamData={this.state.teams} />
      </>
    );
  }
}

export default TeamsBuilder;
