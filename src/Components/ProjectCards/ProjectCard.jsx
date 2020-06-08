import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  chipStyle: {
    flexGrow: 1,
  },
}));

const ProjectCard = (props) => {
  const {
    imgUrl,
    altTitle,
    name,
    description,
    type,
    link,
    labels,
  } = props.props;
  const classes = useStyles();
  const [chipStyle, setChipStyle] = useState(null);

  useEffect(() => {});

  return (
    <>
      {!imgUrl ? null : (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={imgUrl}
              title={altTitle}
            />

            <CardContent>
              <Grid container direction="row" className={classes.chipStyle}>
                <Grid item className={classes.chipStyle}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {name}
                  </Typography>
                </Grid>
                <Grid item>
                  <Chip label={type} color="primary" />
                </Grid>
              </Grid>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
              <Typography>{labels.map((label) => label + " ")}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="secondary">
              Share
            </Button>
            <Button size="small" color="secondary" href={link}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default ProjectCard;
