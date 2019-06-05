import React, { Component } from "react";
import { connect } from "react-redux";

import Counterpart from "../Counterpart/Counterpart";
import AddCounterpart from "../AddCounterpart/AddCounterpart";
import * as actionTypes from "../../store/actions";

class Counterparts extends Component {
  render() {
    return (
      <div>
        <AddCounterpart personAdded={this.props.onAddedPerson} />
        {this.props.cts.map(person => (
          <Counterpart
            key={person.id}
            name={person.name}
            yearsExperience={person.yearsExperience}
            counterpartTeam={person.counterpartTeam}
            clicked={() => this.props.onRemovedPerson(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cts: state.counterparts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddedPerson: (name, yearsExperience, counterpartTeam) =>
      dispatch({
        type: actionTypes.ADD_COUNTERPART,
        personData: { name, yearsExperience, counterpartTeam }
      }),
    onRemovedPerson: id =>
      dispatch({ type: actionTypes.REMOVE_COUNTERPART, personId: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counterparts);
