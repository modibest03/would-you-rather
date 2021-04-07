import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text, Progress } from "@chakra-ui/react";
import React from "react";

import "./AnsweredPoll.css";

const AnsweredPoll = () => {
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
              Kate
            </Text>{" "}
            James asks:
          </Text>
        </Box>
        <Box>
          <Avatar
            name="kate"
            src="https://bit.ly/tioluwani-kolawole"
            size="xl"
          />
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
            Would you rather find $50 for yourself
          </Text>
        </Box>
        <Box mb="2rem" backgroundColor="#eee">
          <Progress
            variant="progress-customize"
            height="3rem"
            size="lg"
            value={40}
            colorScheme="blackAlpha"
          />
        </Box>
        <Flex justifyContent="center">
          <Text fontSize="2rem" color="primary">
            2 out of 3 votes
          </Text>
        </Flex>
      </Box>

      <Box mt="2rem" border="1px solid #302b63" bgColor="#eee" p="2rem">
        <Box mb="2rem">
          <Text fontSize="2.5rem" fontWeight="600" color="#000">
            Would you rather find $50 for yourself
          </Text>
        </Box>
        <Box mb="2rem" backgroundColor="#eee">
          <Progress
            variant="progress-customize"
            height="3rem"
            size="lg"
            value={40}
            colorScheme="blackAlpha"
          />
        </Box>
        <Flex justifyContent="center">
          <Text fontSize="2rem" color="primary">
            2 out of 3 votes
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default AnsweredPoll;
