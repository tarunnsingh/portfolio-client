import React from "react";
import { Paper, Grid, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Carousel from "react-images";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import extStyles from "./AchievementsPaper.module.css";

const useStyles = makeStyles((theme) => ({
  textHeading: {
    transition: "all ease-in 1s",
    marginBottom: "1%",
    marginTop: "1%",
    marginLeft: "2%",
    marginRight: "2%",
    textAlign: "center",
    "&:hover": {
      color: "#feceab",
      textShadow: "2px 1px #2F4F4F",
    },
  },
  paperStyle: {
    background: "rgba(186, 114, 78, 0.1)",
    borderRadius: "50px 50px",
  },
  panelStyle: {
    background: "rgba(186, 114, 78, 0.1)",
    borderRadius: "50px 50px",
  },
  carouselViews: {
    height: 500,
    width: 200,
  },
  heading: {
    paddingLeft: "1%",
  },
  datestyle: {
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "1%",
  },
}));

const CustomImageFooter = ({ innerProps }) => {
  return (
    <div {...innerProps} style={{ paddingLeft: "1%" }}>
      Swipe to see pictures
    </div>
  );
};
const CustomImageFooterCount = ({ innerProps, currentIndex }) => {
  return (
    <div {...innerProps} style={{ paddingRight: "1%" }}>
      {currentIndex + 1}
    </div>
  );
};

const AchievementsPaper = (props) => {
  const { name, date, body, images } = props.info;
  const classes = useStyles();
  return (
    <>
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
              <Carousel
                views={images}
                components={{
                  FooterCaption: CustomImageFooter,
                  FooterCount: CustomImageFooterCount,
                }}
              />
            </Grid>

            <Grid item>
              <ExpansionPanel className={classes.panelStyle}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    Read My Experience
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography className={extStyles.textContent}>
                    {body}
                  </Typography>
                  <br />
                  <Divider />
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <Typography className={classes.datestyle} variant="subtitle2">
                {date}
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={1} md={2} />
      </Grid>
    </>
  );
};

export default AchievementsPaper;
