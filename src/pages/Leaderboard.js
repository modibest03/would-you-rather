import { Box } from "@chakra-ui/layout";
import React from "react";
import LeaderboardCard from "../components/LeaderboardCard";
import { useSelector } from "react-redux";

const Leaderboard = () => {
  const leaderBoardData = useSelector((state) =>
    Object.keys(state.users.users).sort(
      (a, b) =>
        Object.keys(state.users.users[b].answers).length +
        state.users.users[b].questions.length -
        (Object.keys(state.users.users[a].answers).length +
          state.users.users[a].questions.length)
    )
  );

  return (
    <Box width="25%" height="80%" overflowY="scroll" margin="5rem auto">
      {leaderBoardData.map((id) => (
        <LeaderboardCard key={id} id={id} />
      ))}
    </Box>
  );
};

export default Leaderboard;
