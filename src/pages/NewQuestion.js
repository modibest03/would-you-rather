import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import AddForm from "../components/AddForm";

const NewQuestion = () => {
  return (
    <Box backgroundColor="secondary" width="30%" margin="5rem auto" p="3rem">
      <Flex
        paddingBottom="1rem"
        borderBottom="1px solid #302b63"
        justifyContent="center"
      >
        <Heading fontSize="3rem" color="primary">
          Create New Question
        </Heading>
      </Flex>
      <Box>
        <Text color="primary" fontSize="1.5rem" mb="1rem" mt="5px">
          Complete the Question:
        </Text>
        <Heading fontSize="2.5rem" color="primary">
          Would you Rather...
        </Heading>
      </Box>
      <Box>
        <AddForm />
      </Box>
    </Box>
  );
};

export default NewQuestion;
