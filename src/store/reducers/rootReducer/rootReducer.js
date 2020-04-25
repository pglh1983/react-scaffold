import { combineReducers } from "redux";

const INITIAL_STATE = {};

/**
 * Placeholder for a real reducer, so there's
 * something to go in the root reducer.
 */
const nullReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
}

export default combineReducers({
  null: nullReducer
});