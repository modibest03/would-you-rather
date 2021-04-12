import {
  FETCH_AUTHED_USER,
  CLEAR_USER,
  SAVE_QUESTION_ANSWER_USER,
} from "../actions/actionTypes";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case FETCH_AUTHED_USER:
      return action.id;

    case SAVE_QUESTION_ANSWER_USER:
      const { qid, answer } = action;
      return {
        ...state,
        answers: {
          ...state.answers,
          [qid]: answer,
        },
      };

    case CLEAR_USER:
      return null;

    default:
      return state;
  }
}
