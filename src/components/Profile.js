import { Box, Avatar, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Profile = () => {
  return (
    <Box
      bgColor="secondary"
      p="1.5rem 1.5rem 4rem 1.5rem"
      width="10%"
      position="absolute"
      top="15%"
      right="5%"
    >
      <Flex
        paddingBottom="1.5rem"
        borderBottom="1px solid #302b63"
        justifyContent="center"
      >
        <Avatar
          name="kate"
          src="https://bit.ly/tioluwani-kolawole"
          size="2xl"
        />
      </Flex>
      <Flex mt="1rem" justifyContent="center">
        <Text>Welcome back</Text>
      </Flex>
      <Flex color="primary" fontSize="2rem" mt="1rem" justifyContent="center">
        <Text>
          <Text as="span" fontWeight="600">
            Linda
          </Text>{" "}
          James
        </Text>
      </Flex>
    </Box>
  );
};

export default Profile;
