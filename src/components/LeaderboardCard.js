import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { useSelector } from "react-redux";
import React from "react";

const LeaderboardCard = ({ id }) => {
  const user = useSelector((state) => state.users.users[id]);
  const numQuestions = user.questions.length;
  const numAnswered = Object.keys(user.answers).length;

  return (
    <Box bg="secondary" p="2rem 3rem" boxShadow="lg" mt="2rem">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid #302b63"
        paddingBottom="2rem"
      >
        <Box>
          <Text color="primary" fontWeight="200" fontSize="2rem">
            <Text as="span" fontWeight="600">
              {user.name} asks:
            </Text>{" "}
          </Text>
        </Box>
        <Box>
          <Avatar name="kate" src={user.avatarURL} size="xl" />
        </Box>
      </Flex>
      <Flex mt="2rem" justifyContent="space-between" paddingBottom="4rem">
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          fontSize="2rem"
          flexGrow="1"
          mr="5rem"
        >
          <Flex justifyContent="space-between">
            <Text>Answered questions</Text>
            <Text>{numAnswered}</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>Created questions</Text>
            <Text>{numQuestions}</Text>
          </Flex>
        </Flex>
        <Box border="1px solid #302b63">
          <Box p="1rem" bgColor="tertiary">
            <Text fontSize="2rem" fontWeight="500">
              SCORE
            </Text>
          </Box>
          <Box p="1rem" textAlign="center">
            <Text fontSize="2rem">{numQuestions + numAnswered}</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default LeaderboardCard;
