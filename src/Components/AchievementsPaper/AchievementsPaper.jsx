import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import Image from "material-ui-image";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  textContent: {
    marginLeft: "auto",
  },
}));

const AchievementsPaper = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" spacing={3}>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Paper elevation={3}>
          <Typography>Visit to Harvard (HPAIR 2020)</Typography>
          <img
            src={`https://media.gettyimages.com/photos/harvard-church-on-harvard-campus-boston-massachusetts-picture-id522799080?s=612x612`}
            width="50vw"
          />

          <Typography className={classes.textContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis
            vitae et leo duis. Feugiat vivamus at augue eget arcu dictum varius
            duis at. Consectetur lorem donec massa sapien faucibus et. Mauris
            pellentesque pulvinar pellentesque habitant morbi tristique senectus
            et netus. Sagittis eu volutpat odio facilisis. Nunc mi ipsum
            faucibus vitae. Lectus urna duis convallis convallis tellus id
            interdum velit laoreet. Adipiscing at in tellus integer feugiat
            scelerisque varius morbi. Posuere morbi leo urna molestie at
            elementum. Purus in mollis nunc sed id semper risus in hendrerit. At
            auctor urna nunc id cursus metus aliquam. Risus quis varius quam
            quisque. Ornare suspendisse sed nisi lacus. Urna neque viverra justo
            nec ultrices. Gravida rutrum quisque non tellus orci ac auctor.
            Dolor morbi non arcu risus quis varius. Sagittis aliquam malesuada
            bibendum arcu. Curabitur gravida arcu ac tortor dignissim convallis
            aenean et.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={1} />

      <Grid item xs={1} />
      <Grid item xs={10}>
        <Paper elevation={3}>
          <Typography>Alexa Student Influencer</Typography>
          <img
            src={`https://media.gettyimages.com/photos/harvard-church-on-harvard-campus-boston-massachusetts-picture-id522799080?s=612x612`}
            width="350px"
          />

          <Typography className={classes.textContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis
            vitae et leo duis. Feugiat vivamus at augue eget arcu dictum varius
            duis at. Consectetur lorem donec massa sapien faucibus et. Mauris
            pellentesque pulvinar pellentesque habitant morbi tristique senectus
            et netus. Sagittis eu volutpat odio facilisis. Nunc mi ipsum
            faucibus vitae. Lectus urna duis convallis convallis tellus id
            interdum velit laoreet. Adipiscing at in tellus integer feugiat
            scelerisque varius morbi. Posuere morbi leo urna molestie at
            elementum. Purus in mollis nunc sed id semper risus in hendrerit. At
            auctor urna nunc id cursus metus aliquam. Risus quis varius quam
            quisque. Ornare suspendisse sed nisi lacus. Urna neque viverra justo
            nec ultrices. Gravida rutrum quisque non tellus orci ac auctor.
            Dolor morbi non arcu risus quis varius. Sagittis aliquam malesuada
            bibendum arcu. Curabitur gravida arcu ac tortor dignissim convallis
            aenean et.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

export default AchievementsPaper;
