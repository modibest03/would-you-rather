import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./redux/actions/usersActions";
import { fetchQuestions } from "./redux/actions/questionsActions";
import { fetchAuthedUser } from "./redux/actions/authedUserAction";
import { Route, Redirect, Switch } from "react-router-dom";
import { Box } from "@chakra-ui/layout";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./components/Profile";
import NewQuestion from "./pages/NewQuestion";
import Leaderboard from "./pages/Leaderboard";
import Login from "./components/Login";
import NotFoundPage from "./components/NotFoundPage";
import Question from "./components/Question";

function App() {
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchQuestions());
    dispatch(fetchAuthedUser());
  }, [dispatch]);

  return (
    <Box
      backgroundColor="tertiary"
      h="100vh"
      position="relative"
      // overflow="hidden"
    >
      <Switch>
        <Route exact path="/">
          <Navbar />
          {authenticated ? <Home /> : <Redirect to="/login" />}
          <Profile authenticated={authenticated} />
        </Route>
        <Route exact path="/add">
          <Navbar />
          {authenticated ? <NewQuestion /> : <Redirect to="/login" />}
          <Profile authenticated={authenticated} />
        </Route>
        <Route exact path="/leaderboard">
          <Navbar />
          {authenticated ? <Leaderboard /> : <Redirect to="/login" />}
          <Profile authenticated={authenticated} />
        </Route>
        <Route exact path="/question/:question_id">
          <Navbar />
          {authenticated ? <Question /> : <Redirect to="/login" />}
          <Profile authenticated={authenticated} />
        </Route>
        <Route exact path="/login">
          <Navbar />
          <Login />
        </Route>
        <Route exact>
          <Navbar />
          <NotFoundPage />
        </Route>
      </Switch>
    </Box>
  );
}

export default App;
