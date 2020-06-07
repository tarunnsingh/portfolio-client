import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles, withTheme } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  textStyle: {
    color: "white",
  },
}));

const TextAbout = () => {
  const classes = useStyles();
  return <Typography className={classes.textStyle}>ABOUT ME</Typography>;
};

export default TextAbout;
