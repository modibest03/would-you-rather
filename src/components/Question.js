import { Box } from "@chakra-ui/layout";
import React from "react";
import { useSelector } from "react-redux";
import AnsweredPoll from "./AnsweredPoll";
import UnansweredPoll from "./UnansweredPoll";
import { useParams } from "react-router-dom";

const Question = () => {
  let { question_id } = useParams();
  const authedUser = useSelector((state) => state.user);
  const question = useSelector(
    (state) => state.questions.questions[question_id]
  );
  const user = useSelector((state) => state.users.users[question.author]);
  const questionAnswer = useSelector(
    (state) => state.users.users[authedUser.id].answers[question_id]
  );

  const optionOneAmount = question.optionOne.votes.length;
  const optionTwoAmount = question.optionTwo.votes.length;
  const allVotes = optionOneAmount + optionTwoAmount;

  const optionOnePercentage = parseInt((optionOneAmount / allVotes) * 100, 10);
  const optionTwoPercentage = parseInt((optionTwoAmount / allVotes) * 100, 10);

  return (
    <Box width="25%" margin="5rem auto" overflowY="auto">
      {questionAnswer ? (
        <AnsweredPoll
          allVotes={allVotes}
          optionTwoAmount={optionTwoAmount}
          optionOneAmount={optionOneAmount}
          optionOnePercentage={optionOnePercentage}
          optionTwoPercentage={optionTwoPercentage}
          question={question}
          user={user}
        />
      ) : (
        <UnansweredPoll user={user} question={question} />
      )}
    </Box>
  );
};

export default Question;
