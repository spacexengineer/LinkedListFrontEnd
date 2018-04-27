import axios from "axios";
import { FETCH_USER } from "../actionTypes";
// console.log("fetch_user", FETCH_USER);
// const FETCH_USER = "FETCH_USER";

const ROOT_URL = "http://localhost:5000/users";

export function fetchUser(username) {
  return async dispatch => {
    try {
      const request = await axios.get(`${ROOT_URL}/${username}`);
      // debugger;
      dispatch({
        type: FETCH_USER,
        payload: request.data.data
      });
    } catch (err) {
      return Promise.reject(err); // indicate the API call failed
    }
  };
}

// export function loginUser(type, data) {
// return async dispatch => {
//   try {
//     let authData = await apiCall("post", `/user-auth`, { data });

//     // once we have logged in, set a token in localStorage
//     localStorage.setItem("jwtToken", authData.data.token);

//     // set a header of Authorization
//     setAuthorizationToken(authData.data.token);

//     // set a currentUser in Redux
//     dispatch(setCurrentUser({ username: data.username }));

//     // remove any error messages
//     dispatch(removeError());
//     return;
//   } catch (err) {
//     dispatch(addError(err.message));
//     return Promise.reject(err); // indicate the API call failed
//   }
// };
