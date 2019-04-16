import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import theme from "./assets/styles/Theme.js";
import App from "./components/App/App";
import Firebase, { FirebaseContext } from "./components/Firebase";
import { MuiThemeProvider } from "@material-ui/core/styles";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
