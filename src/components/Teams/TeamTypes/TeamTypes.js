import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TeamTypes.css";

class TeamTypes extends Component {
  render() {
    let team = null;

    switch (this.props.area) {
      case "business":
      case "engineering":
        team = (
          <div className={this.props.area}>
            {this.props.teamLabel} / {this.props.capacity}
          </div>
        );
        break;
      default:
        team = null;
    }
    return team;
  }
}

TeamTypes.propTypes = {
  area: PropTypes.string.isRequired
};

TeamTypes.defaultProps = {
  teamLabel: "Unknown"
};

export default TeamTypes;
