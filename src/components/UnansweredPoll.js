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
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import {
  saveQuestionAnswerQues,
  saveQuestionAnswerUse,
} from "../redux/actions/saveQuestionAnswer";

const UnansweredPoll = ({ question, user }) => {
  const authedUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [value, setValue] = useState("optionOne");
  let { question_id } = useParams();

  // console.log(question.id === question_id);
  console.log(value);
  console.log(question_id);
  console.log(authedUser.id);

  const handleSubmit = () => {
    dispatch(saveQuestionAnswerQues(authedUser.id, question_id, value));
    dispatch(saveQuestionAnswerUse(authedUser.id, question_id, value));
  };

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
              {" "}
              {user?.name}
              asks:
            </Text>{" "}
          </Text>{" "}
        </Box>{" "}
        <Box>
          <Avatar name={user?.name} src={user?.avatarURL} size="xl" />
        </Box>{" "}
      </Flex>{" "}
      <Box mt="1rem">
        <Text fontSize="3rem" fontWeight="500" color="primary">
          Would you Rather...{" "}
        </Text>{" "}
      </Box>{" "}
      <Box mt="2rem">
        <RadioGroup onChange={setValue} size="lg" value={value}>
          <Stack direction="column">
            <Radio value="optionOne" spacing="2rem">
              <Text fontSize="2rem"> {question?.optionOne.text} </Text>{" "}
            </Radio>{" "}
            <Radio value="optionTwo" spacing="2rem">
              <Text fontSize="2rem"> {question?.optionTwo.text} </Text>{" "}
            </Radio>{" "}
          </Stack>{" "}
        </RadioGroup>{" "}
      </Box>{" "}
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
            backgroundColor: "primary",
            color: "secondary",
          }}
          _focus={{
            border: "1px solid #302b63",
          }}
          onClick={handleSubmit}
        >
          Submit{" "}
        </Button>{" "}
      </Flex>{" "}
    </Box>
  );
};

export default UnansweredPoll;
