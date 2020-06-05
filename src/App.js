import React from "react";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Home from "./Pages/Home";
import { CssBaseline } from "@material-ui/core";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
};

export default App;
