import React, { Component } from "react";

class AddCounterpart extends Component {
  state = {
    name: "",
    yearsExperience: "",
    counterpartTeam: ""
  };

  nameChangedHandler = event => {
    this.setState({ name: event.target.value });
  };

  yearsExperienceChangedHandler = event => {
    this.setState({ yearsExperience: event.target.value });
  };

  counterpartTeamChangedHandler = event => {
    this.setState({ counterpartTeam: event.target.value });
  };

  render() {
    return (
      <div className="AddPerson">
        <input
          type="text"
          placeholder="Name"
          onChange={this.nameChangedHandler}
          value={this.state.name}
        />
        <input
          type="number"
          placeholder="Years of experince"
          onChange={this.yearsExperienceChangedHandler}
          value={this.state.yearsExperience}
        />
        <input
          type="text"
          placeholder="Counterpart team"
          onChange={this.counterpartTeamChangedHandler}
          value={this.state.counterpartTeam}
        />
        <button
          onClick={() =>
            this.props.personAdded(
              this.state.name,
              this.state.yearsExperience,
              this.state.counterpartTeam
            )
          }
        >
          Add Person
        </button>
      </div>
    );
  }
}

export default AddCounterpart;
