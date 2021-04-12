import {
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
  SAVE_QUESTION_ANSWER_QUESTION,
  SAVE_QUESTION,
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  questions: {},
  error: "",
};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        questions: action.questions,
      };

    case SAVE_QUESTION:
      const { question } = action;
      return {
        ...state,
        questions: { ...state.questions, [action.question.id]: question },
      };

    case SAVE_QUESTION_ANSWER_QUESTION:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        questions: {
          ...state.questions,
          [qid]: {
            ...state.questions[qid],
            [answer]: {
              ...state.questions[qid][answer],
              votes: state.questions[qid][answer].votes.concat([authedUser]),
            },
          },
        },
      };

    case FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default questionsReducer;
