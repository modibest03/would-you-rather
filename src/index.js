import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/configureStore";

const customiseTheme = {
  colors: {
    primary: "#302b63",
    secondary: "#fff",
    tertiary: "#efefef",
    grey: {
      10: "#dcdcdc",
    },
  },
  styles: {
    global: {
      html: {
        fontSize: "62.5%",
        boxSizing: "border-box",
      },
      "*": {
        margin: 0,
        padding: 0,
      },
      "*, *::before, &::after": {
        boxSizing: "inherit",
      },
      body: {
        fonts: "Poppins sans-serif",
        fontWeight: 400,
        color: "#555353",
      },
      variants: {
        "progress-customize": {
          bgColor: "#302b63",
          height: "3rem",
        },
      },
    },
  },
};

const store = configureStore();
const theme = extendTheme(customiseTheme);

ReactDOM.render(
  <ReduxProvider store={store}>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </ReduxProvider>,
  document.getElementById("root")
);
