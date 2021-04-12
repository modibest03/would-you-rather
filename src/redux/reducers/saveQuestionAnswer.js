import {
    SAVE_QUESTION_ANSWER_FAILURE,
    SAVE_QUESTION_ANSWER_REQUEST,
    SAVE_QUESTION_ANSWER_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
    loading: false,
    answer: {},
    error: "",
};

const saveQuestionAnswerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_QUESTION_ANSWER_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case SAVE_QUESTION_ANSWER_SUCCESS:
            console.log(state);
            return {
                ...state,
                loading: false,
                answer: action.answer,
            };

        case SAVE_QUESTION_ANSWER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        default:
            return state;
    }
};

export default saveQuestionAnswerReducer;