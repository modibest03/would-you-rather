import {
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
} from "./actionTypes";

const initialState = {
  loading: false,
  questions: [],
  error: "",
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_QUESTIONS_SUCCESS:
      return {
        loading: false,
        questions: [...state, { ...action.questions }],
        error: "",
      };

    case FETCH_QUESTIONS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.error,
      };

    default:
      return state;
  }
};

export default questionReducer;
