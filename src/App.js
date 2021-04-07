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

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const authenticated = useSelector((state) => state.user);
  console.log(users.users);
  console.log(authenticated);

  useEffect(() => {
    if (users && authenticated) {
      for (let [key, value] of Object.entries(users.users)) {
        if (authenticated === value.id) {
          console.log(value);
        }
      }
    }
  }, [users, authenticated]);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchQuestions());
    dispatch(fetchAuthedUser());
  }, [dispatch]);

  return (
    <Box backgroundColor="tertiary" h="100vh" position="relative">
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Home />
          <Profile />
        </Route>
        <Route exact path="/add">
          <Navbar />
          <NewQuestion />
          <Profile />
        </Route>
        <Route exact path="/leaderboard">
          <Navbar />
          <Leaderboard />
          <Profile />
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
