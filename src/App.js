import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./redux/actions/usersActions";
import { fetchQuestions } from "./redux/actions/questionsActions";
import { fetchAuthedUser } from "./redux/actions/authedUserAction";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchQuestions());
    dispatch(fetchAuthedUser());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Redux</h1>
    </div>
  );
}

export default App;
