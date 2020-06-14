import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DescriptionIcon from "@material-ui/icons/Description";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";
import Brightness4OutlinedIcon from "@material-ui/icons/Brightness4Outlined";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import bannerImage from "../../Static/banner.jpg";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  end: {
    marginLeft: "auto",
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

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

const TopNavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">Hi! Hope you're good!</Typography>
                <img src={bannerImage} width="200vw" /> <br />
                {/* <em>{"And here's"}</em> <b>{"some"}</b>{" "}
                <u>{"amazing content"}</u>.{" "} */}
                {
                  "Scroll through and let me know if you would like to talk. Have a nice day!"
                }
              </React.Fragment>
            }
          >
            <IconButton color="secondary">
              <AccountCircleIcon />
            </IconButton>
          </HtmlTooltip>
          <Typography variant="button">Website in the Making</Typography>
          <div className={classes.end}>
            <Tooltip
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              title="Resume"
            >
              <IconButton color="secondary">
                <DescriptionIcon />
              </IconButton>
            </Tooltip>
            <Tooltip
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              title="Contact"
            >
              <Link
                to="contact"
                smooth
                duration={2000}
                offset={50}
                duration={500}
                delay={300}
                isDynamic={true}
              >
                <IconButton>
                  <ContactPhoneIcon />
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              title="Switch Theme"
            >
              <IconButton>
                <Brightness4Icon />
              </IconButton>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopNavBar;
