import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles, withTheme } from "@material-ui/styles";
import styles from "./Quote.module.css";

const useStyles = makeStyles((theme) => ({
  textStyle: {
    color: "white",
  },
}));

const Quote = () => {
  const classes = useStyles();
  return (
    <article className={styles.container}>
      <blockquote>
        <strong>Imagination</strong> is <em>more important</em> than{" "}
        <strong>knowledge</strong>
      </blockquote>
      <b>Einstein, A.</b>
    </article>
  );
};

export default Quote;
