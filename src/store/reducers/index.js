import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import jobs from "./jobs";
import profile from "./profile";

// debugger;
const rootReducer = combineReducers({
  currentUser,
  errors,
  jobs,
  profile
});

/**
 * combineReducers builds your state tree as an object
 * {
 *  jobs: [],
 *  currentUser: {},
 *  errors:
 * }
 *
 */
export default rootReducer;
