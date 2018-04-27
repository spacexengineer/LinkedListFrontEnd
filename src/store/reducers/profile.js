import * as t from "../actionTypes";

const DEFAULT_STATE = {
  user: {}
};

export default (state = DEFAULT_STATE, action) => {
  // debugger;
  switch (action.type) {
    case t.FETCH_PROFILE_REQUEST:
      return state;
    case t.FETCH_PROFILE_SUCCESS:
      debugger;
      return {
        // turn an empty object into false or an object with keys to be true
        user: action.profile
      };
    default:
      return state;
  }
};

// export default profileReducer;
