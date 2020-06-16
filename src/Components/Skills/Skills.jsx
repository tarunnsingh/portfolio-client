import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faConnectdevelop } from "@fortawesome/free-brands-svg-icons";
import { faPodcast } from "@fortawesome/free-solid-svg-icons";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import "./Skills.module.css";
import { useState, useEffect } from "react";

const skillList = [
  {
    skillHead: "Data Science",
    skill: ["Data Visualistaion", "Sklearn", "Tensorflow**"],
    icon: faConnectdevelop,
  },
  {
    skillHead: "Full Stack Dev.",
    skill: ["MERN Stack", "Material UI", "Bootstrap"],
    icon: faReact,
  },
  {
    skillHead: "Voice Tech",
    skill: ["Alexa Development", "Google Actions"],
    icon: faPodcast,
  },
];

const useStyles = makeStyles((theme) => ({
  skillStyles: {
    margin: "auto",
  },
  eachSkillStyle: {
    textAlign: "center",
    fontFamily: `Allura`,
    margin: "8px",
    transition: "all ease-in 1s",
    "&:hover": {
      color: "#feceab",
    },
  },
  skillHeads: {
    color: "secondary",
  },
  textStyle: {
    fontFamily: "",
  },
  starred: {
    margin: "auto",
  },
}));

const Skills = () => {
  const classes = useStyles();
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillList);
  }, []);

  return (
    <>
      <Grid container item direction="row" justify="center">
        {skills
          ? skills.map((skill, idx) => {
              return (
                <Grid
                  item
                  xs={10}
                  sm={3}
                  className={classes.eachSkillStyle}
                  key={idx}
                >
                  <FontAwesomeIcon icon={skill.icon} size="10x" />
                  <Typography variant="subtitle2" color="textSecondary">
                    {skill.skillHead}
                  </Typography>
                  {skill.skill.map((element, idx2) => {
                    return <Typography key={idx2}>{element}</Typography>;
                  })}
                </Grid>
              );
            })
          : null}
      </Grid>
      <Typography variant="caption" className={classes.starred}>
        **Learning
      </Typography>
    </>
  );
};

export default Skills;
