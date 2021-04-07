import { Flex, Heading } from "@chakra-ui/layout";
import React from "react";

const NotFoundPage = () => {
  return (
    <Flex justifyContent="center" alignItems="center" height="90vh">
      <Heading fontSize="10rem" color="primary">
        Page Not Found 404
      </Heading>
    </Flex>
  );
};

export default NotFoundPage;
