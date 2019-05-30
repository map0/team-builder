import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TeamTypes.css";

class TeamTypes extends Component {
  render() {
    let team = null;

    switch (this.props.area) {
      case "business":
        team = (
          <div className="business">{this.props.teamLabel} / Buisness</div>
        );
        break;
      case "engineering":
        team = (
          <div className="engineering">{this.props.teamLabel} /Engineering</div>
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
