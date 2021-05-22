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
          Hi I am Tarun Singh, an aspiring engineer currently pursuing B.Tech
          (CSE) from the LNM Institute of Information Technology, Jaipur (IN).
          In this journey of mine I have explored and experimented quite a few
          tech as well as non-tech domains. I also like taking new challenges
          and of course meet new people. Talking of my tech stack, as a
          developer I like creating and working with Web Development. I do have
          sound knowledge and grasp over the MERN Stack (check projects below).
          I believe React is one of those frameworks, which literally teaches
          you a lot and is parallely interseting. With this stack, I am always
          curious and looking out for new project ideas. In the due course of
          college I also have worked in Data Science domain. ML/DL has a
          prominent and extensive use in current apps and is growing
          exponentilly. I have done quite many courses in DS like Deep Learning
          Specialisation, Computer Vision etc. Although I am still in the
          process of learning ML frameworks like Tensorflow (PyTorch? No, not at
          the moment) but I do have a good hold over the basics. I have mostly
          worked on EDA and Data Visualisation which have improved my
          understanding of the fundamentals. Alongside, I have worked in
          voice-tech domain like Amazon Alexa and the Google Actions. In past
          few years I also have developed a keen interest of film-making and
          video-editing which I do as a hobby!
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
