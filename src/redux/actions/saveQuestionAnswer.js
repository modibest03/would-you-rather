import * as api from "../../utils/_DATA";
import {
  SAVE_QUESTION_ANSWER_FAILURE,
  SAVE_QUESTION_ANSWER_REQUEST,
  SAVE_QUESTION_ANSWER_QUESTION,
  SAVE_QUESTION_ANSWER_USER,
  SAVE_QUESTION,
} from "./actionTypes";

export const addQuestion = (question) => {
  return {
    type: SAVE_QUESTION,
    question,
  };
};

export const saveQuestionAnswerRequest = () => {
  return {
    type: SAVE_QUESTION_ANSWER_REQUEST,
  };
};

export const saveQuestionAnswerQuestion = ({ authedUser, qid, answer }) => {
  return {
    type: SAVE_QUESTION_ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  };
};

export const saveQuestionAnswerUser = ({ authedUser, qid, answer }) => {
  return {
    type: SAVE_QUESTION_ANSWER_USER,
    authedUser,
    qid,
    answer,
  };
};

export const saveQuestionAnswerFailure = (error) => {
  return {
    type: SAVE_QUESTION_ANSWER_FAILURE,
    error,
  };
};

export const saveQuestionAnswerQues = (authUser, id, value) => {
  return (dispatch, getState) => {
    return api
      ._saveQuestionAnswer({ authedUser: authUser, qid: id, answer: value })
      .then(() => {
        dispatch(
          saveQuestionAnswerQuestion({
            authedUser: authUser,
            qid: id,
            answer: value,
          })
        );
      });
  };
};

export const saveQuestionAnswerUse = (authUser, id, value) => {
  return (dispatch, getState) => {
    return api
      ._saveQuestionAnswer({ authedUser: authUser, qid: id, answer: value })
      .then(() => {
        dispatch(
          saveQuestionAnswerUser({
            authedUser: authUser,
            qid: id,
            answer: value,
          })
        );
      });
  };
};

export const saveQuestion = (optionOneText, optionTwoText, author) => {
  return (dispatch) => {
    api
      ._saveQuestion({ optionOneText, optionTwoText, author })
      .then((question) => {
        dispatch(addQuestion(question));
      });
  };
};
