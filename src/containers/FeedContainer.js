import { connect } from "react-redux";
import { fetchJobsRequest } from "../store/actions/jobs";
import Feed from "../components/Feed";

function mapStateToProps(reduxState) {
  debugger;
  return {
    jobs: reduxState.jobs
  };
}
debugger;
export default connect(mapStateToProps, { fetchJobsRequest })(Feed);
