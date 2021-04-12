import {
  FETCH_AUTHED_USER,
  CLEAR_USER,
  SAVE_QUESTION_ANSWER_USER,
} from "../actions/actionTypes";

export default function authedUser(state = null, action) {
  console.log(state);
  switch (action.type) {
    case FETCH_AUTHED_USER:
      return action.id;

    case SAVE_QUESTION_ANSWER_USER:
      const { qid, answer } = action;
      console.log(state);
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
