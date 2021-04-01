import { combineReducers } from "redux";
import authedUserReducer from "./authedUserReducer";
import usersReducer from "./usersReducer";
import questionsReducer from "./questionsReducer";

const rootReducer = combineReducers({
  user: authedUserReducer,
  users: usersReducer,
  questions: questionsReducer,
});

export default rootReducer;
