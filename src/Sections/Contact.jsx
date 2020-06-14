import React from "react";
import { Typography } from "@material-ui/core";
import ContactPaper from "../Components/ContactPaper/ContactPaper";
import BraceHeading from "../Components/braceHeading/braceHeading";

const Contact = () => {
  return (
    <>
      <BraceHeading name={"Contact"} />
      <ContactPaper />
    </>
  );
};

export default Contact;
