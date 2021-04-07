import { Box, Flex, UnorderedList, ListItem, Link } from "@chakra-ui/layout";
import { NavLink as RaechLink } from "react-router-dom";
import React from "react";
import { Icon } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  return (
    <Flex
      boxShadow="lg"
      justifyContent="center"
      minH="10vh"
      backgroundColor="secondary"
      position="relative"
    >
      <UnorderedList
        display="flex"
        justifyContent="space-between"
        width="30%"
        listStyleType="none"
        fontSize="2rem"
        alignItems="center"
      >
        <ListItem
          display="flex"
          height="100%"
          textAlign="center"
          alignItems="center"
        >
          <Link
            p="0 2rem"
            display="flex"
            height="100%"
            textAlign="center"
            alignItems="center"
            transition="all 2s"
            _focus={{
              border: "none",
            }}
            exact
            _hover={{
              textDecoration: "none",
            }}
            activeStyle={{
              borderBottom: "4px solid #302b63",
              fontWeight: "bold",
              color: "#302b63",
              marginTop: "4px",
              transition: "all 2s",
            }}
            as={RaechLink}
            to="/"
          >
            HOME
          </Link>
        </ListItem>
        <ListItem
          display="flex"
          height="100%"
          textAlign="center"
          alignItems="center"
        >
          <Link
            p="0 2rem"
            display="flex"
            height="100%"
            textAlign="center"
            alignItems="center"
            transition="all 2s"
            _focus={{
              border: "none",
            }}
            exact
            _hover={{
              textDecoration: "none",
            }}
            activeStyle={{
              borderBottom: "4px solid #302b63",
              fontWeight: "bold",
              color: "#302b63",
              transition: "all 2s",
            }}
            to="/add"
            as={RaechLink}
          >
            NEW QUESTION
          </Link>
        </ListItem>
        <ListItem
          display="flex"
          height="100%"
          textAlign="center"
          alignItems="center"
        >
          <Link
            p="0 2rem"
            display="flex"
            height="100%"
            textAlign="center"
            alignItems="center"
            transition="all 2s"
            _focus={{
              border: "none",
            }}
            exact
            _hover={{
              textDecoration: "none",
            }}
            activeStyle={{
              borderBottom: "4px solid #302b63",
              fontWeight: "bold",
              color: "#302b63",
              transition: "all 2s",
            }}
            to="/leaderboard"
            as={RaechLink}
          >
            LEADERBOARD
          </Link>
        </ListItem>
      </UnorderedList>
      <Box position="absolute" right="5%" top="28%">
        <Icon as={FiLogOut} fontSize="4rem" color="red" />
      </Box>
    </Flex>
  );
};

export default Navbar;
