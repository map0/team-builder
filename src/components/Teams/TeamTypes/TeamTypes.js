import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TeamTypes.css";

class TeamTypes extends Component {
  render() {
    let team = null;
    const { maxCapacity } = this.props;
    const layerWidth = (this.props.capacity / maxCapacity) * 100; // TODO pull magin nums

    switch (this.props.area) {
      case "business":
      case "engineering":
        team = (
          <div className={this.props.area} style={{ width: `${layerWidth}%` }}>
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
