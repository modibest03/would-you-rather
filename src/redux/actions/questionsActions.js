import * as api from "../../utils/_DATA";
import {
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
} from "./actionTypes";

export const fetchQuestionsRequest = () => {
  return {
    type: FETCH_QUESTIONS_REQUEST,
  };
};

export const fetchQuestionsSuccess = (questions) => {
  return {
    type: FETCH_QUESTIONS_SUCCESS,
    questions,
  };
};

export const fetchQuestionsFailure = (error) => {
  return {
    type: FETCH_QUESTIONS_FAILURE,
    error,
  };
};

export const fetchQuestions = () => {
  return (dispatch) => {
    dispatch(fetchQuestionsRequest());
    api
      ._getQuestions()
      .then((res) => {
        const questions = res;
        dispatch(fetchQuestionsSuccess(questions));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchQuestionsFailure(errMsg));
      });
  };
};
