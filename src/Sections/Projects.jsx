import React from "react";
import { Typography } from "@material-ui/core";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import BraceHeading from "../Components/braceHeading/braceHeading";

const Projects = () => {
  return (
    <>
      <BraceHeading name={"Projects"} />
      <ProjectCards />
    </>
  );
};

export default Projects;
