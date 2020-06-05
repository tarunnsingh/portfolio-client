import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DescriptionIcon from "@material-ui/icons/Description";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    background: "transparent",
    boxShadow: "none",
    // filter: "blur(2px)",
  },
}));

const TopNavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Portfolio
          </Typography>
          <IconButton color="secondary">
            <DescriptionIcon />
          </IconButton>
          <IconButton>
            <ContactPhoneIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopNavBar;
