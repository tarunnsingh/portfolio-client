import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#6d1b7b",
    },
    secondary: {
      main: "#f50057",
    },
  },
  status: {
    danger: "orange",
  },
});

export default theme;
