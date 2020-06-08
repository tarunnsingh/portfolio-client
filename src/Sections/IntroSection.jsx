import React from "react";
import { Grid, Typography } from "@material-ui/core";
import TypingIntro from "../Components/TypingIntro/TypingIntro";
import HiIntro from "../Components/HiIntro/HiIntro";
import { makeStyles } from "@material-ui/styles";
import theme from "../theme";
import { ParallaxLayer, Parallax } from "react-spring/renderprops-addons";

const useStyles = makeStyles((theme) => ({
  gutterUp: {
    minHeight: "30vh",
  },
  gutterDown: {
    minHeight: "52vh",
  },
  typer: {
    color: "white",
  },
}));

const IntroSection = () => {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item className={classes.gutterUp} />
      <Grid item xs={12} sm={10}>
        <HiIntro />
      </Grid>
      <Grid item>
        <TypingIntro />
      </Grid>
      <Grid item className={classes.gutterDown} />
    </Grid>
    // </ParallaxLayer>
  );
};

export default IntroSection;
