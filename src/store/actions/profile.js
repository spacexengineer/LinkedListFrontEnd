import * as t from "../actionTypes"; // namespacing
import { apiCall } from "../../services/api"; // general get/post/delete
import { addError } from "./errors";

/* Action Creators */

export function fetchProfileSuccess(profile) {
  debugger;
  return {
    type: t.FETCH_PROFILE_SUCCESS,
    profile
  };
}

// dispatch provided from thunk
// dispatch sends information to a reducer

export function fetchProfileFail(err) {
  return dispatch => {
    dispatch(addError(err));
    return {
      type: t.FETCH_PROFILE_FAIL
    };
  };
}

export function fetchProfileRequest(user) {
  return async dispatch => {
    debugger;
    dispatch({ type: t.FETCH_PROFILE_REQUEST });
    try {
      // API call
      debugger;
      const result = await apiCall("get", `/users/${user}`); // fetch the username
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
      dispatch(fetchProfileSuccess(result.data));
    } catch (err) {
      dispatch(fetchProfileFail(err));
      Promise.reject();
    }
  };
}

//  FETCH_PROFILE_REQUEST
//  FETCH_PROFILE_FAIL
