import React from "react";
import { Typography, Grid } from "@material-ui/core";
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
    <Grid container direction="row">
      <Grid item xs={1} />
      <Grid item xs={10}>
        <article className={styles.container}>
          <blockquote>
            <strong>Imagination</strong> is <em>more important</em> than{" "}
            <strong>knowledge</strong>
          </blockquote>
          <b>Einstein, A.</b>
        </article>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

export default Quote;
