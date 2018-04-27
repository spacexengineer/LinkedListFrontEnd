import React, { Component } from "react";
import { Link } from "react-router-dom";

class Profile extends Component {
  componentDidMount() {
    this.props.fetchProfileRequest(this.props.match.params.username);
  }

  render() {
    debugger;
    if (Object.keys(this.props.profile.user).length === 0) {
      return <div>Loading User...!!!</div>;
    }
    const user = this.props.profile.user;
    // debugger;
    // return this.props.profile.map(job => <li>{job.title}</li>);
    debugger;
    return (
      <div>
        <h1>Username: {user.username}</h1>

        <h3>First name: {user.firstName}</h3>

        <h4>Last name: {user.lastName}</h4>

        <h5>Email: {user.email}</h5>

        <Link to="/">Go back to main page</Link>
      </div>
    );
  }
}

export default Profile;
