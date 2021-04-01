import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/configureStore";

const store = configureStore();

const customiseTheme = {
  colors: {
    primary: "#707070",
    secondary: "#fff",
    tertiary: "#59407E",
    grey: {
      10: "#7AC8FF0F",
      20: "#F7F7F7",
      30: "#00000014",
      40: "#0000001A",
      50: "#00000078",
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
        color: "primary",
      },
    },
  },
};

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
