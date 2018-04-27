import { connect } from "react-redux";
import { fetchProfileRequest } from "../store/actions/profile";
import Profile from "../components/Profile";

function mapStateToProps(reduxState) {
  debugger;
  return {
    profile: reduxState.profile
  };
}
// debugger;
export default connect(mapStateToProps, { fetchProfileRequest })(Profile);
