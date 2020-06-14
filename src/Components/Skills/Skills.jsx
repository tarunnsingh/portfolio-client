import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNode, faReact } from "@fortawesome/free-brands-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  skillStyles: {
    margin: "auto",
  },
  eachSkillStyle: {
    textAlign: "center",
  },
}));

const Skills = () => {
  const classes = useStyles();
  return (
    <Grid container item direction="row" justify="center">
      <Grid item xs={1} />
      <Grid item xs={10} sm={3} className={classes.eachSkillStyle}>
        <FontAwesomeIcon icon={faReact} size="10x" />
        <Typography>Development</Typography>
        <Typography>MERN Stack</Typography>
        <Typography>Material UI</Typography>
      </Grid>
      <Grid item xs={10} sm={3} className={classes.eachSkillStyle}>
        <FontAwesomeIcon icon={faTable} size="10x" />
        <Typography>Data Science</Typography>
        <Typography>Data Visualisation</Typography>
        <Typography>Tensorflow**</Typography>
      </Grid>
      <Grid item xs={10} sm={3} className={classes.eachSkillStyle}>
        <FontAwesomeIcon icon={faFilm} size="10x" />
        <Typography>Media</Typography>
        <Typography>Film Making</Typography>
        <Typography>Photography**</Typography>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

export default Skills;
