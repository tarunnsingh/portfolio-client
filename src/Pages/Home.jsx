import React from "react";
import Topbar from "../Sections/Topbar";
import IntroSection from "../Sections/IntroSection";
import AboutMe from "../Sections/AboutMe";
import Projects from "../Sections/Projects";
import { Grid, AppBar, Button, Typography, Paper } from "@material-ui/core";
import { Parallax } from "react-spring/renderprops-addons";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    maxWidth: "100vw",
    overflow: "hidden",
  },
  aboutmestyle: {
    alignSelf: "center",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item xs={12}>
        <Topbar />
      </Grid>
      <Grid item xs={12}>
        <IntroSection />
      </Grid>
      <Grid item xs={10} className={classes.aboutmestyle}>
        <AboutMe />
      </Grid>
      <Grid item>
        <Projects />
      </Grid>
      <Grid item>Notable Achievements</Grid>
      <Grid item>What else?</Grid>
      <Grid item>My thoughts / theories</Grid>
      <Grid item>Let's Connect</Grid>
    </Grid>
  );
};

export default Home;
