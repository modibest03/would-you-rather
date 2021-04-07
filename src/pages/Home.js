import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React from "react";
import AnsweredPoll from "../components/AnsweredPoll";
import Questions from "../components/Questions";
import UnansweredPoll from "../components/UnansweredPoll";

const Home = () => {
  return (
    <Box width="25%" margin="5rem auto">
      <Tabs variant="unstyled" isFitted>
        <TabList>
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
        <TabPanels>
          <TabPanel>
            {/* <Questions /> */}
            <AnsweredPoll />
          </TabPanel>
          <TabPanel>
            {/* <Questions /> */}
            <UnansweredPoll />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Home;
