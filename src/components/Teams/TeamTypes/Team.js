import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Teams.css";

class Teams extends Component {
  render() {
    let team = null;
    const { maxCapacity } = this.props;
    let layerWidth = (this.props.capacity / maxCapacity) * 100;

    if (layerWidth === 0) {
      layerWidth = 5
    }

    switch (this.props.area) {
      case "business":
      case "engineering":
        team = (
          <div className={this.props.area} style={{ width: `${layerWidth}%` }}>
            {this.props.teamLabel} / {this.props.capacity ? this.props.capacity: ':-('}
          </div>
        );
        break;
      default:
        team = null;
    }
    return team;
  }
}

Teams.propTypes = {
  area: PropTypes.string.isRequired
};

Teams.defaultProps = {
  teamLabel: "Unknown"
};

export default Teams;
