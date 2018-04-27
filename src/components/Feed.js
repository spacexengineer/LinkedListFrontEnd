import React, { Component } from "react";

class Feed extends Component {
  componentDidMount() {
    // debugger;
    this.props.fetchJobsRequest();
  }

  render() {
    if (this.props.jobs.length === 0) {
      return <div>Loading...</div>;
    }

    // debugger;
    return this.props.jobs.map(job => <li>{job.title}</li>);
  }
}

export default Feed;
