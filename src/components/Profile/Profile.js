import React, { Component } from "react";
import faker from "faker";

class Profile extends Component {
  state = {
    email: "",
    avatar: "",
    name: ""
  };

  componentDidMount() {
    this.setState({
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      name: faker.name.findName()
    });
  }

  render() {
    return (
      <div>
        <h4>{this.state.name}</h4>
        <img src={this.state.avatar} alt="avatar" />
        <h4>{this.state.email}</h4>
      </div>
    );
  }
}

export default Profile;
