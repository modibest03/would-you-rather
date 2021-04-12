import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Questions from "../components/Questions";

const Home = () => {
  const questions = useSelector((state) => state.questions);
  const authedUser = useSelector((state) => state.user);
  const [answeredQuestions, setansweredQuestions] = useState([]);
  const [unansweredQuestions, setunansweredQuestions] = useState([]);

  useEffect(() => {
    setansweredQuestions(
      Object.keys(authedUser.answers).sort(
        (a, b) =>
          questions.questions[b].timestamp - questions.questions[a].timestamp
      )
    );
    setunansweredQuestions(
      Object.keys(questions.questions)
        .filter((qid) => !Object.keys(authedUser.answers).includes(qid))
        .sort(
          (a, b) =>
            questions.questions[b].timestamp - questions.questions[a].timestamp
        )
    );
  }, [authedUser, questions, authedUser.answers]);

  return (
    <Box width="25%" height="80%" overflowY="scroll" margin="5rem auto">
      <Tabs variant="unstyled" isFitted>
        <TabList position="sticky" top="0" zIndex="10">
          <Tab
            _selected={{ color: "white", bg: "primary" }}
            fontSize="1.5rem"
            bg="grey.10"
            color="primary"
            p="1rem"
            _focus={{
              border: "none",
            }}
          >
            Unanswered Questions
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "primary" }}
            fontSize="1.5rem"
            bg="grey.10"
            color="primary"
            _focus={{
              border: "none",
            }}
          >
            Answered Questions
          </Tab>
        </TabList>
        <TabPanels overflowY="auto">
          <TabPanel>
            {unansweredQuestions.map((qid) => (
              <Questions key={qid} id={qid} questions={questions} />
            ))}
          </TabPanel>
          <TabPanel>
            {answeredQuestions.map((qid) => (
              <Questions key={qid} id={qid} questions={questions} />
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Home;
