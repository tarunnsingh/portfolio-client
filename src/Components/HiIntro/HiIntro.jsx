import React from "react";
import TextLoop from "react-text-loop";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import theme from "../../theme";

const useStyles = makeStyles((theme) => ({
  hiHeading: {
    color: "white",
  },
  loop: {
    color: "#feceab",
  },
}));

const HiIntro = () => {
  const classes = useStyles();
  return (
    <Typography variant="h4" className={classes.hiHeading}>
      <em>
        <TextLoop
          className={classes.loop}
          children={[
            "Hi!",
            "Hoi!",
            "你好!",
            "Hola!",
            "Ciao!",
            "Salve!",
            "Привет!",
            "Bonjour!",
          ]}
          interval={5000}
          springConfig={{ stiffness: 180, damping: 15 }}
        />
      </em>{" "}
      I am Tarun Singh
    </Typography>
  );
};

export default HiIntro;
