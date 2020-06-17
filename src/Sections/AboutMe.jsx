import React, { Fragment } from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Quote from "../Components/Quote/Quote";
import QuoteImage from "../Static/quote.png";
import bannerImage from "../Static/banner.jpg";
import BraceHeading from "../Components/braceHeading/braceHeading";
import Skills from "../Components/Skills/Skills";

const useStyles = makeStyles((theme) => ({
  aboutText: {
    color: "white",
    textAlign: "justify",
    alignItems: "center",
  },
  imgStyle: {
    height: "50vh",
  },
}));

const AboutMe = () => {
  const classes = useStyles();
  return (
    <Grid item container direction="row" spacing={3}>
      <BraceHeading name={"About"} />
      <Grid item xs={1} />

      <Grid item xs={10}>
        <Typography className={classes.aboutText}>
          Hi, I am Tarun. Currently persuing B.Tech (CSE) from The LNM Institute
          of Information Technology, Jaipur. I work in MERN Stack for
          development and also love to explore the concepts of Data Science.
          Currently persuing B.Tech (CSE) from The LNM Institute of Information
          Technology, Jaipur. I work in MERN Stack for development and also love
          to explore the concepts of Data Science. Currently persuing B.Tech
          (CSE) from The LNM Institute of Information Technology, Jaipur. I work
          in MERN Stack for development and also love to explore the concepts of
          Data Science.Currently persuing B.Tech (CSE) from The LNM Institute of
          Information Technology, Jaipur. I work in MERN Stack for development
          and also love to explore the concepts of Data Science.
        </Typography>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Skills />
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={1} />
      <Grid item xs={10}>
        <img src={bannerImage} width="100%" />
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

export default AboutMe;