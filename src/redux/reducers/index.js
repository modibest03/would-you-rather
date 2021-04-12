import { combineReducers } from "redux";
import authedUserReducer from "./authedUserReducer";
import usersReducer from "./usersReducer";
import questionsReducer from "./questionsReducer";
// import saveQuestionAnswerReducer from "./saveQuestionAnswer";

const rootReducer = combineReducers({
    user: authedUserReducer,
    users: usersReducer,
    questions: questionsReducer,
    // questionAnswer: saveQuestionAnswerReducer,
});

export default rootReducer;