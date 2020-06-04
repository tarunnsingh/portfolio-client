import React from "react";
import theme from "./theme";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import Home from "./Pages/Home";

const useStyles = makeStyles((theme) => ({
  simpleStyle: {
    fontStyle: "oblique",
    color: "red",
    fontSize: "100px  ",
  },
}));
const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
