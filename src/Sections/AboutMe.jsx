import React, { Fragment } from "react";
import { Typography, Grid, Fade } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import bannerImage from "../Static/banner.jpg";
import BraceHeading from "../Components/braceHeading/braceHeading";
import Skills from "../Components/Skills/Skills";
import { faMapMarkerAlt, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Parallax, Background } from "react-parallax";

const useStyles = makeStyles((theme) => ({
  aboutText: {
    color: "white",
    textAlign: "justify",
    alignItems: "center",
  },
  imgStyle: {
    height: 370,
    "@media (max-width:600px)": {
      height: 250,
    },
  },
  insideStyles: {
    position: "absolute",
    top: "90%",
    left: "2%",
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
        <Parallax bgImage={bannerImage} strength={250}>
          <div className={classes.imgStyle}>
            <span className={classes.insideStyles}>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Harvard Universty,
              Boston, USA
            </span>
          </div>
        </Parallax>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

export default AboutMe;
