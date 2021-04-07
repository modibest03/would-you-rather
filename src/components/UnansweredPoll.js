import { Avatar } from "@chakra-ui/avatar";
import {
  Box,
  Button,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const UnansweredPoll = () => {
  const [value, setValue] = useState("1");

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
      </Box>

      <Box mt="2rem">
        <RadioGroup onChange={setValue} size="lg" value={value}>
          <Stack direction="column">
            <Radio value="1" spacing="2rem">
              <Text fontSize="2rem">Find $50 for yourself</Text>
            </Radio>
            <Radio value="2" spacing="2rem">
              <Text fontSize="2rem">have your best friend find $50</Text>
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>

      <Flex mt="2rem">
        <Button
          p="3rem 0"
          fontSize="2rem"
          fontWeight="300"
          bgColor="secondary"
          border="1px solid #302b63"
          color="primary"
          flexGrow="1"
          _hover={{
            backgroundColor: "#fff",
          }}
          _focus={{
            border: "1px solid #302b63",
          }}
        >
          Submit
        </Button>
      </Flex>
    </Box>
  );
};

export default UnansweredPoll;
