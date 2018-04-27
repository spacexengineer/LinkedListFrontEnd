import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import FeedContainer from "../containers/FeedContainer";

const Homepage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div>
        <h1>Welcome to Linked List!</h1>
        <Link to="/signup">Sign up here</Link>
      </div>
    );
  }
  debugger;
  return (
    <div>
      <h1>You are logged in!</h1>
      <FeedContainer />
    </div>
  );
};

Homepage.propTypes = {
  currentUser: PropTypes.object
};

export default Homepage;
