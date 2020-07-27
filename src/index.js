import React from "react";
import { render } from "react-dom";
import App from "./App";
import store from "./state/configure.store";
import { Provider } from "react-redux";
import GlobalStyles from "../src/styles/global.styles";

if (!process.env.API_URL) {
  process.env.API_URL = "";
}

console.log(process.env.API_URL);
render(
  <>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);
