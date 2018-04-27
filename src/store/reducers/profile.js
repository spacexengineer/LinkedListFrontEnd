import * as t from "../actionTypes";

const DEFAULT_STATE = {
  isAuthenticated: false,
  user: {}
};

function profileReducer(state = DEFAULT_STATE, action) {
  // debugger;
  switch (action.type) {
    case t.FETCH_PROFILE_REQUEST:
      return state;
    case t.FETCH_PROFILE_SUCCESS:
      debugger;
      return {
        // turn an empty object into false or an object with keys to be true
        isAuthenticated: !!Object.keys(action.user).length,
        user: action.profile
      };
    default:
      return state;
  }
}

export default profileReducer;
