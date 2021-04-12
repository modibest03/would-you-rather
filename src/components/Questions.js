import { Box, Text, Avatar, Flex, Link } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link as ReachLink } from "react-router-dom";

const Questions = ({ id }) => {
  const question = useSelector((state) => state.questions.questions[id]);
  const user = useSelector((state) => state.users.users[question.author]);

  return (
    <Box bg="secondary" p="2rem 3rem" boxShadow="lg" mt="1rem">
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
            </Text>{" "}
          </Text>
        </Box>
        <Box>
          <Avatar name="kate" src={user?.avatarURL} size="xl" />
        </Box>
      </Flex>
      <Box mt="1rem">
        <Text fontSize="3rem" fontWeight="500" color="primary">
          Would you Rather...
        </Text>
        <Text fontSize="2rem">{`...${question?.optionOne.text}`}</Text>
      </Box>
      <Flex mt="1rem">
        <Link
          as={ReachLink}
          bg="primary"
          p="1.5"
          to={`/question/${id}`}
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
