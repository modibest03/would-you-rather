import { FETCH_AUTHED_USER, CLEAR_USER } from "../actions/actionTypes";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case FETCH_AUTHED_USER:
      return action.id;
    case CLEAR_USER:
      return null;
    default:
      return state;
  }
}
