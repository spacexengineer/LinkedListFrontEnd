import * as t from "../actionTypes";
import { apiCall } from "../../services/api";
import { addError } from "./errors";

export function fetchJobsSuccess(jobs) {
  return {
    type: t.FETCH_JOBS_SUCCESS,
    jobs
  };
}

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
      const result = await apiCall(); // fetch the jobs
      /**
       * {
       *    data: [
       *    {
       *       title: 'Software Engineer'
       *     }
       *   ]
       * }
       */
      dispatch(fetchJobsSuccess(result.data));
    } catch (err) {
      dispatch(fetchJobsFail(err));
      Promise.reject();
    }
  };
}

//  FETCH_JOBS_REQUEST
//  FETCH_JOBS_FAIL
