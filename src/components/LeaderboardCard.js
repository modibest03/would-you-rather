import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";

const LeaderboardCard = () => {
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
            <Text>7</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>Unanswered questions</Text>
            <Text>3</Text>
          </Flex>
        </Flex>
        <Box border="1px solid #302b63">
          <Box p="1rem" bgColor="tertiary">
            <Text fontSize="2rem" fontWeight="500">
              SCORE
            </Text>
          </Box>
          <Box p="1rem" textAlign="center">
            <Text fontSize="2rem">10</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default LeaderboardCard;
