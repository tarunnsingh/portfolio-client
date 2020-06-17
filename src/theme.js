import { createMuiTheme } from "@material-ui/core/styles";
import Image from "./Static/bg2.jpg";

import Exottf from "./Fonts/Exo-Regular.ttf";

const exo = {
  fontFamily: "Exo",
  fontStyle: "normal",
  src: `
    local('Exo'),
    local('Exo-Regular),
    url(${Exottf}) 
    format('ttf')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#6d1b7b",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#fafafa",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "Exo",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  status: {
    danger: "orange",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [exo],
        body: {
          backgroundImage: `url(${Image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          height: "105%",
        },
      },
    },
  },
});

export default theme;
