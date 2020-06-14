import React from "react";
import Topbar from "../Sections/Topbar";
import IntroSection from "../Sections/IntroSection";
import AboutMe from "../Sections/AboutMe";
import Projects from "../Sections/Projects";
import Achievements from "../Sections/Achievements";
import Contact from "../Sections/Contact";
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
      <Grid item>
        <AboutMe />
      </Grid>
      <Grid item>
        <Projects />
      </Grid>
      <Grid item>
        <Achievements />
      </Grid>
      <Grid item>What else?</Grid>
      <Grid item>My thoughts / theories</Grid>
      <Grid item>
        <Contact />
      </Grid>
    </Grid>
  );
};

export default Home;
