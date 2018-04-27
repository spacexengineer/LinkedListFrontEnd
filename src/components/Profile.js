import React, { Component } from "react";

class Profile extends Component {
  componentDidMount() {
    this.props.fetchProfileRequest(this.props.match.params.username);
  }

  render() {
    debugger;
    if (Object.keys(this.props.profile.user).length === 0) {
      return <div>Loading User...!!!</div>;
    }

    // debugger;
    // return this.props.profile.map(job => <li>{job.title}</li>);
    debugger;
    return <h1>Fuck yeah we go the user!!!</h1>;
  }
}

export default Profile;
