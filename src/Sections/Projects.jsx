import React from "react";
import { Typography } from "@material-ui/core";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import TextProjects from "../Components/TextProjects/TextProjects";

const Projects = () => {
  return (
    <>
      <TextProjects />
      <ProjectCards />
    </>
  );
};

export default Projects;
