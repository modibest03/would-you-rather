import * as api from "../../utils/_DATA";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./actionTypes";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    api
      ._getUsers()
      .then((res) => {
        const users = res;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchUsersFailure(errMsg));
      });
  };
};
