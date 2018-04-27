import { connect } from "react-redux";
import { fetchJobsRequest } from "../store/actions/jobs";
import Feed from "../components/Feed";

function mapStateToProps(reduxState) {
  let a = {
    jobs: reduxState.jobs
  };
  debugger;
  return a;
}
// debugger;
export default connect(mapStateToProps, { fetchJobsRequest })(Feed);
