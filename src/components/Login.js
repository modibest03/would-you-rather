import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import AddForm from "./AddForm";

const Login = () => {
  return (
    <Box backgroundColor="secondary" width="30%" margin="5rem auto" p="3rem">
      <Flex
        paddingBottom="1rem"
        borderBottom="1px solid #302b63"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Text color="primary" fontSize="1.5rem" mb="1rem" mt="5px">
          Welcome to the
        </Text>
        <Heading fontSize="3rem" color="primary">
          Would you Rather...
        </Heading>
      </Flex>
      <Flex mt="1.5rem" justifyContent="center">
        <Text color="primary" fontSize="1.5rem" mb="1rem" mt="5px">
          Please Sign in to Continue
        </Text>
      </Flex>
      <Box>
        <AddForm signin />
      </Box>
    </Box>
  );
};

export default Login;
