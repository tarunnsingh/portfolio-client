import React from "react";
import Topbar from "../Sections/Topbar";
import IntroSection from "../Sections/IntroSection";
import AboutMe from "../Sections/AboutMe";
import Projects from "../Sections/Projects";
import Achievements from "../Sections/Achievements";
import Contact from "../Sections/Contact";
import { Grid } from "@material-ui/core";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { makeStyles } from "@material-ui/styles";
import Fade from "react-reveal/Fade";

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
      <Fade>
        <Grid item xs={12}>
          <IntroSection />
        </Grid>
      </Fade>
      <Fade>
        <Grid item>
          <AboutMe />
        </Grid>
      </Fade>
      <Fade>
        <Grid item>
          <Projects />
        </Grid>
      </Fade>
      <Fade>
        <Grid item>
          <Achievements />
        </Grid>
      </Fade>
      {/* <Grid item>What else?</Grid>
      <Grid item>My thoughts / theories</Grid> */}
      <Fade>
        <Grid item>
          <Contact />
        </Grid>
      </Fade>
    </Grid>
  );
};

export default Home;
