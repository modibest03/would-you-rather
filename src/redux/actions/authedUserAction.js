import { FETCH_AUTHED_USER, CLEAR_USER } from "./actionTypes";

const AUTHED_ID = null;

export const authedUser = (id) => {
  return {
    type: FETCH_AUTHED_USER,
    id,
  };
};

export function clearUser() {
  return { type: CLEAR_USER };
}

export const fetchAuthedUser = () => {
  return (dispatch) => {
    dispatch(authedUser(AUTHED_ID));
  };
};
