import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { fetchUser } from "../store/actions";
import { connect } from "react-redux";

class UsersShow extends Component {
  componentDidMount() {
    const { username } = this.props.match.params;
    console.log(
      "usersShow did mount username=",
      username,
      "match=",
      this.props.match,
      "currentUser=",
      this.props.currentUser
    );

    // check if username in url matches current user logged in
    if (username === this.props.currentUser.user.username) {
      this.props.fetchUser(username);
    }
    // } else {
    //   alert("damn");
    // }
  }

  render() {
    // debugger;
    console.log("usersShow render props=", this.props);

    const { user } = this.props;

    if (!user) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>Yay here is your profile</h1>
      </div>
    );
  }
}

UsersShow.propTypes = {
  currentUser: PropTypes.object
};

function mapStateToProps(state) {
  let a = {
    user: state.user
  };
  // debugger;
  console.log("mapStateToProps", a);
  return a;
}

export default connect(mapStateToProps, { fetchUser })(UsersShow);

// currentUser = { this.props }

// if (!currentUser.isAuthenticated) {
//   return (
//     <div>
//       <h1>You suck</h1>
//       <Link to="/signup">Sign up here</Link>
//     </div>
//   );
// }
