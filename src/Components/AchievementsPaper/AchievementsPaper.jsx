import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Carousel from "react-images";
import "./AchievementsPaper.module.css";

const useStyles = makeStyles((theme) => ({
  textHeading: {
    transition: "all ease-in 1s",

    "&:hover": {
      color: "#feceab",
      textShadow: "2px 1px #2F4F4F",
    },
    textAlign: "center",
    paddingTop: "30px",
  },
  paperStyle: {
    background: "rgba(186, 114, 78, 0.1)",
    borderRadius: "50px 50px",
  },
  carouselViews: {
    height: 500,
    width: 200,
  },
}));

const AchievementsPaper = (props) => {
  const { name, date, body, images } = props.info;
  const classes = useStyles();
  return (
    <Grid container direction="row" spacing={3}>
      <Grid item xs={1} md={2} />
      <Grid item container xs={10} md={8} direction="column">
        <Paper elevation={3} className={classes.paperStyle}>
          <Grid item>
            <Typography variant="h5" className={classes.textHeading}>
              {name}
            </Typography>
          </Grid>
          <Grid item>
            <Carousel views={images} />
          </Grid>
          <Grid item>
            <Typography className="textContent">{body}</Typography>
            <Typography variant="caption">{date}</Typography>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={1} md={2} />
    </Grid>
  );
};

export default AchievementsPaper;
