import React from "react";
import Typical from "react-typical";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typerStyle: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    color: "white",
  },
}));

const TypingIntro = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.typerStyle}>
        I love{" "}
        <Typical
          steps={[
            "Web Development 💻",
            1000,
            "Data Science 👨‍🔬",
            1000,
            "Film-Making 📹",
            1000,
            "Photgraphy 📷",
            1000,
            "Travel ⛰️",
            1000,
          ]}
          loop={Infinity}
          wrapper="b"
        />
      </Typography>
    </div>
  );
};

export default TypingIntro;
