import * as t from "../actionTypes"; // namespacing
import { apiCall } from "../../services/api"; // general get/post/delete
import { addError } from "./errors";

/* Action Creators */

export function fetchJobsSuccess(jobs) {
  debugger;
  return {
    type: t.FETCH_JOBS_SUCCESS,
    jobs
  };
}

// dispatch provided from thunk
// dispatch sends information to a reducer

export function fetchJobsFail(err) {
  return dispatch => {
    dispatch(addError(err));
    return {
      type: t.FETCH_JOBS_FAIL
    };
  };
}

export function fetchJobsRequest() {
  return async dispatch => {
    dispatch({ type: t.FETCH_JOBS_REQUEST });
    try {
      // API call
      const result = await apiCall("get", "/jobs"); // fetch the jobs
      /**
       * {
       *    data: [
       *    {
       *       title: 'Software Engineer'
       *     }
       *   ]
       * }
       */
      debugger;
      dispatch(fetchJobsSuccess(result.data));
    } catch (err) {
      dispatch(fetchJobsFail(err));
      Promise.reject();
    }
  };
}

//  FETCH_JOBS_REQUEST
//  FETCH_JOBS_FAIL
