import { Box } from "@chakra-ui/layout";
import React from "react";
import LeaderboardCard from "../components/LeaderboardCard";

const Leaderboard = () => {
  return (
    <Box width="25%" margin="5rem auto">
      <LeaderboardCard />
    </Box>
  );
};

export default Leaderboard;
