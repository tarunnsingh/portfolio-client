import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import projects from "../../projects-map";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "5%",
  },
}));

const ProjectCards = () => {
  console.log("Projects: ", projects);
  const classes = useStyles();
  const [proj, setProj] = useState([]);

  useEffect(() => {
    setProj(projects);
  }, [projects]);

  return (
    <Grid container direction="row" spacing={5} className={classes.container}>
      {!proj
        ? null
        : proj.map((project, idx) => {
            console.log("KEY = =", project);
            return (
              <Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
                <ProjectCard props={project} />
              </Grid>
            );
          })}
    </Grid>
  );
};

export default ProjectCards;
