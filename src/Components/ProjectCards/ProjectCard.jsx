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
import IconButton from "@material-ui/core/IconButton";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import Divider from "@material-ui/core/Divider";
import styles from "./ProjectCard.module.css";
const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "25px",
    "&:hover": {
      boxShadow: "1px 1px 2px 3px #671d9d",
    },
  },
  media: {
    height: 140,
  },
  chipStyle: {
    flexGrow: 1,
  },
}));

const ProjectCard = (props) => {
  const [like, setLike] = useState(false);
  const handleLike = () => {
    setLike(!like);
  };
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
    <Grid item xs={12}>
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
              <Divider variant="inset" component="li" />
              <Typography>{labels.map((label) => label + " ")}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton
              aria-label="Like Project"
              color="secondary"
              onClick={handleLike}
            >
              {like ? <ThumbUpAltIcon /> : <ThumbUpAltOutlinedIcon />}
            </IconButton>
            <Button size="small" color="secondary" href={link}>
              Source Code
            </Button>
            {name === "Face Morphing" ? (
              <Button
                size="small"
                color="secondary"
                href="https://github.com/tarunnsingh/morph-server/blob/master/Sample.mp4"
              >
                See Video
              </Button>
            ) : null}
          </CardActions>
        </Card>
      )}
    </Grid>
  );
};

export default ProjectCard;
