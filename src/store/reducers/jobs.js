import * as t from "../actionTypes";

const DEFAULT_STATE = [];

function jobsReducer(state = DEFAULT_STATE, action) {
  debugger;
  switch (action.type) {
    case t.FETCH_JOBS_SUCCESS:
      return [...action.jobs];
    default:
      return state;
  }
}

export default jobsReducer;
