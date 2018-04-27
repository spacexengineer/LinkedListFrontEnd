import { SET_CURRENT_USER, FETCH_USER } from "../actionTypes";

// const FETCH_USER = "FETCH_USER";

const DEFAULT_STATE = {
  isAuthenticated: false,
  user: {}
};

export default (state = DEFAULT_STATE, action) => {
  debugger;
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        // turn an empty object into false or an object with keys to be true
        isAuthenticated: !!Object.keys(action.user).length,
        user: action.user
      };
    case FETCH_USER:
      console.log("FETCH_USER");

      return {
        isAuthenticated: true,
        user: action.payload
      };
    default:
      return state;
  }
};
