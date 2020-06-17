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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ContactPaper.module.css";
import { makeStyles } from "@material-ui/styles";
import Footer from "../Footer/Footer";

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

const useStyles = makeStyles({
  form: {
    margin: 5,
    width: "50vw",
  },
});

const ContactPaper = () => {
  const [media, setMedia] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    setMedia(mediaList);
  }, []);
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
            <Input id="email" />
            <br />
            <TextField
              id="message"
              label="Message"
              multiline
              rows={5}
              variant="outlined"
            />

            <Button type="submit">Send</Button>
          </FormControl>
          <Divider />
          <br />
        </Grid>
        <Grid item xs={10}>
          <Typography component="span" variant="subtitle1">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Jaipur, Rajasthan, India.
            #302031
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography component="span" variant="subtitle1">
            <FontAwesomeIcon icon={faEnvelope} /> tarunnsingh2019@gmail.com
          </Typography>
        </Grid>
        <Grid item xs={10}>
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
                  <IconButton key={idx}>
                    <FontAwesomeIcon icon={social.icon} href={social.url} />
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
