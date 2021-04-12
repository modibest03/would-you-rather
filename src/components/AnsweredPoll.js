import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text, Progress } from "@chakra-ui/react";
import React from "react";

import "./AnsweredPoll.css";

const AnsweredPoll = ({
  question,
  user,
  allVotes,
  optionOneAmount,
  optionTwoAmount,
  optionOnePercentage,
  optionTwoPercentage,
}) => {
  return (
    <Box bg="secondary" p="2rem 3rem" boxShadow="lg">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid #302b63"
        paddingBottom="2rem"
      >
        <Box>
          <Text color="primary" fontWeight="200" fontSize="2rem">
            <Text as="span" fontWeight="600">
              {user?.name} asks:
            </Text>
          </Text>
        </Box>
        <Box>
          <Avatar name={user?.name} src={user?.avatarURL} size="xl" />
        </Box>
      </Flex>
      <Box mt="1rem">
        <Text fontSize="3rem" fontWeight="500" color="primary">
          Result
        </Text>
      </Box>
      <Box mt="2rem" border="1px solid #302b63" bgColor="#eee" p="2rem">
        <Box mb="2rem">
          <Text fontSize="2.5rem" fontWeight="600" color="#000">
            {question?.optionOne.text}
          </Text>
        </Box>
        <Box mb="2rem" backgroundColor="#eee">
          <Progress
            variant="progress-customize"
            height="3rem"
            size="lg"
            value={optionOnePercentage}
            colorScheme="blackAlpha"
          />
        </Box>
        <Flex justifyContent="center">
          <Text fontSize="2rem" color="primary">
            {`${optionOneAmount} out of ${allVotes} votes`}
          </Text>
        </Flex>
      </Box>

      <Box mt="2rem" border="1px solid #302b63" bgColor="#eee" p="2rem">
        <Box mb="2rem">
          <Text fontSize="2.5rem" fontWeight="600" color="#000">
            {question?.optionTwo.text}
          </Text>
        </Box>
        <Box mb="2rem" backgroundColor="#eee">
          <Progress
            variant="progress-customize"
            height="3rem"
            size="lg"
            value={optionTwoPercentage}
            colorScheme="blackAlpha"
          />
        </Box>
        <Flex justifyContent="center">
          <Text fontSize="2rem" color="primary">
            {`${optionTwoAmount} out of ${allVotes} votes`}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default AnsweredPoll;
