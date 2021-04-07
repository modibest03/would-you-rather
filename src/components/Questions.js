import { Box, Text, Avatar, Flex, Link } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

const Questions = () => {
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
          Would you Rather...
        </Text>
        <Text fontSize="2rem">...$50 for yourself</Text>
      </Box>
      <Flex mt="1rem">
        <Link
          as={ReachLink}
          bg="primary"
          p="1.5"
          to="/question/dsnjsdn"
          flexGrow="1"
          fontSize="2rem"
          color="secondary"
          textAlign="center"
          _hover={{
            textDecor: "none",
          }}
        >
          View poll
        </Link>
      </Flex>
    </Box>
  );
};

export default Questions;
