import React from "react";
import { Typography } from "@material-ui/core";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import BraceHeading from "../Components/braceHeading/braceHeading";

const Projects = () => {
  return (
    <>
      <BraceHeading name={"Projects"} />
      <div style={{ textAlign: "center" }}>
        <Typography compoenent="span" variant="body2">
          {" "}
          Here are some of my projects which I believe have a major contribution
          in my learning journey.
        </Typography>
        <Typography compoenent="span" variant="body2">
          {" "}
          You can check the source code on Github. Some of them are Live too.{" "}
        </Typography>
        <Typography variant="overline">*GIFs from Dribble.</Typography>
      </div>
      <ProjectCards />
    </>
  );
};

export default Projects;
