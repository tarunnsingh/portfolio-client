import React from "react";
import ProjectCard from "./ProjectCard";
import { Grid } from "@material-ui/core";
const ProjectCards = () => {
  return (
    <Grid container direction="row" spacing={3}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ProjectCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ProjectCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ProjectCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ProjectCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ProjectCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ProjectCard />
      </Grid>
      <Grid xs={false} sm={1} />
    </Grid>
  );
};

export default ProjectCards;
