import React from "react";
import {
  Grid,
  IconButton,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Button,
  TextField,
  Divider,
  Typography,
} from "@material-ui/core";
import {
  faGithub,
  faFacebook,
  faInstagram,
  faLinkedin,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import "./ContactPaper.module.css";
import { makeStyles } from "@material-ui/styles";
import Footer from "../Footer/Footer";
import MessageService from "../../Services/MessageService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import theme from "../../theme";
const mediaList = [
  {
    icon: faGithub,
    url: "https://github.com/tarunnsingh",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/thetseffect",
  },
  {
    icon: faMedium,
    url: "https://medium.com/@thetseffect",
  },
  {
    icon: faInstagram,
    url: "https://www.instagram.com/tarunsingh_49f/",
  },
  {
    icon: faTwitter,
    url: "https://twitter.com/tarunsingh_t49",
  },
  {
    icon: faFacebook,
    url: "https://www.facebook.com/TarunSinghT49",
  },
];

const useStyles = makeStyles((theme) => ({
  form: {
    margin: 5,
    width: "50vw",
  },
  socialButtons: {
    transition: "all ease-in-out 0.25s",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  persoalDetails: {
    transition: "all ease-in-out 0.25s",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));

const ContactPaper = () => {
  const [media, setMedia] = useState([]);
  const [message, setMessage] = useState({
    email: "",
    msgBody: "",
  });
  const [messageSent, setMessageSent] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [spinner, setSpinner] = useState(false);

  const handleOnChange = (event) => {
    setMessage({ ...message, [event.target.name]: event.target.value });
    if (message.email.length > 6 && message.msgBody.length > 2) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleSubmit = (e) => {
    setSpinner(true);
    e.preventDefault();
    console.log("INSIDE SUBMIT");
    MessageService.sendMessage(message).then((res) => {
      console.log("Got REspponse", res.data);
      if (res.data.sent) {
        setMessageSent(true);
        resetForm();
        setTimeout(() => {
          setMessageSent(false);
        }, 5000);
      } else {
        console.log("Some ERROR");
      }
    });
  };

  const resetForm = () => {
    setMessage({
      email: "",
      msgBody: "",
    });
    setDisabled(true);
    setSpinner(false);
  };

  const classes = useStyles();
  useEffect(() => {
    setMedia(mediaList);
  }, []);
  console.log(message);
  return (
    <>
      <Grid
        container
        item
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={10}>
          <FormControl className={classes.form}>
            <InputLabel htmlFor="email">Your Email</InputLabel>
            <Input
              id="email"
              name="email"
              value={message.email}
              onChange={(e) => handleOnChange(e)}
            />
            <br />
            <TextField
              id="message"
              label="Message"
              multiline
              rows={5}
              variant="outlined"
              name="msgBody"
              value={message.msgBody}
              onChange={(e) => handleOnChange(e)}
            />
            {messageSent ? (
              <Typography
                variant="caption"
                component="span"
                style={{
                  textAlign: "center",
                  height: "30px",
                  paddingTop: "5px",
                }}
              >
                Message Sent!
              </Typography>
            ) : (
              <span style={{ height: "30px" }}> </span>
            )}
            {spinner ? (
              <span style={{ textAlign: "center", height: "35px" }}>
                <FontAwesomeIcon icon={faSpinner} spin size="2x" />
              </span>
            ) : (
              <Button type="submit" disabled={disabled} onClick={handleSubmit}>
                Send
              </Button>
            )}
          </FormControl>
          <Divider />
          <br />
        </Grid>
        <Grid item xs={10} className={classes.persoalDetails}>
          <Typography component="span" variant="subtitle1">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Jaipur, Rajasthan, India.
            #302031
          </Typography>
        </Grid>
        <Grid item xs={10} className={classes.persoalDetails}>
          <Typography component="span" variant="subtitle1">
            <FontAwesomeIcon icon={faEnvelope} /> tarunnsingh2019@gmail.com
          </Typography>
        </Grid>
        <Grid item xs={10} className={classes.persoalDetails}>
          <Typography component="span" variant="subtitle1">
            <FontAwesomeIcon icon={faPhoneAlt} /> 9917360131
          </Typography>
        </Grid>

        <br />
        <Grid item xs={10}>
          <Typography variant="overline">
            Leave a message or connect on other platforms
          </Typography>
        </Grid>
        <Grid item xs={10}>
          {!media
            ? null
            : media.map((social, idx) => {
                return (
                  <IconButton
                    key={idx}
                    className={classes.socialButtons}
                    href={social.url}
                  >
                    <FontAwesomeIcon icon={social.icon} />
                  </IconButton>
                );
              })}
        </Grid>
        <br />
        <br />
      </Grid>
      <Footer />
    </>
  );
};

export default ContactPaper;
