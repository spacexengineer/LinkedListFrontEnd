import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import jobs from "./jobs";

debugger;
const rootReducer = combineReducers({
  currentUser,
  errors,
  jobs
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
