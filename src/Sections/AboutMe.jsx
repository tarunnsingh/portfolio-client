import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import banner from "../Static/banner.jpg";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Me from "../Static/me.jpg";

const useStyles = makeStyles((theme) => ({
  aboutText: {
    color: "white",
  },
  imgStyle: {
    height: "50vh",
  },
}));

const AboutMe = () => {
  const classes = useStyles();
  return (
    <Fragment>
      {/* <ParallaxLayer
        offset={1}
        speed={0.5}
        style={{ backgroundColor: "#011173" }}
      /> */}
      <Grid container direction="row">
        <Grid item xs={6}>
          <img className={classes.imgStyle} src={`${Me}`} />
        </Grid>
        <Grid item xs={6}>
          <Typography className={classes.aboutText}>
            Hi, I am Tarun. Currently persuing B.Tech (CSE) from The LNM
            Institute of Information Technology, Jaipur. I work in MERN Stack
            for development and also love to explore the concepts of Data
            Science. Currently persuing B.Tech (CSE) from The LNM Institute of
            Information Technology, Jaipur. I work in MERN Stack for development
            and also love to explore the concepts of Data Science. Currently
            persuing B.Tech (CSE) from The LNM Institute of Information
            Technology, Jaipur. I work in MERN Stack for development and also
            love to explore the concepts of Data Science.Currently persuing
            B.Tech (CSE) from The LNM Institute of Information Technology,
            Jaipur. I work in MERN Stack for development and also love to
            explore the concepts of Data Science.
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="h4">About</Typography>
    </Fragment>
  );
};

export default AboutMe;

// class AboutMe extends React.Component {
//   render() {
//     return (
//       <Parallax pages={3}>
//         <ParallaxLayer
//           offset={1}
//           speed={1}
//           style={{ backgroundColor: "#805E73" }}
//         />
//         <ParallaxLayer
//           offset={2}
//           speed={1}
//           style={{ backgroundColor: "#87BCDE" }}
//         />

//         <ParallaxLayer
//           offset={0}
//           speed={0}
//           factor={3}
//           style={{
//             backgroundImage: `url(${banner})`,
//             width: "100vw",
//             backgroundPosition: "center center",
//             backgroundSize: "100vw 90%",
//           }}
//         />

//         <ParallaxLayer
//           offset={1.3}
//           speed={-0.3}
//           style={{ pointerEvents: "none" }}
//         >
//           <img
//             src="../Static/banner.jpg"
//             style={{ width: "15%", marginLeft: "70%" }}
//           />
//         </ParallaxLayer>

//         <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
//           <img
//             src={url("cloud")}
//             style={{ display: "block", width: "20%", marginLeft: "55%" }}
//           />
//           <img
//             src={url("cloud")}
//             style={{ display: "block", width: "10%", marginLeft: "15%" }}
//           />
//         </ParallaxLayer>

//         <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
//           <img
//             src={url("cloud")}
//             style={{ display: "block", width: "20%", marginLeft: "70%" }}
//           />
//           <img
//             src={url("cloud")}
//             style={{ display: "block", width: "20%", marginLeft: "40%" }}
//           />
//         </ParallaxLayer>

//         <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
//           <img
//             src={url("cloud")}
//             style={{ display: "block", width: "10%", marginLeft: "10%" }}
//           />
//           <img
//             src={url("cloud")}
//             style={{ display: "block", width: "20%", marginLeft: "75%" }}
//           />
//         </ParallaxLayer>

//         <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
//           <img
//             src={url("cloud")}
//             style={{ display: "block", width: "20%", marginLeft: "60%" }}
//           />
//           <img
//             src={url("cloud")}
//             style={{ display: "block", width: "25%", marginLeft: "30%" }}
//           />
//           <img
//             src={url("cloud")}
//             style={{ display: "block", width: "10%", marginLeft: "80%" }}
//           />
//         </ParallaxLayer>

//         <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
//           <img
//             src={url("cloud")}
//             style={{ display: "block", width: "20%", marginLeft: "5%" }}
//           />
//           <img
//             src={url("cloud")}
//             style={{ display: "block", width: "15%", marginLeft: "75%" }}
//           />
//         </ParallaxLayer>

//         <ParallaxLayer
//           offset={2.5}
//           speed={-0.4}
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             pointerEvents: "none",
//           }}
//         >
//           <img src={url("earth")} style={{ width: "60%" }} />
//         </ParallaxLayer>

//         <ParallaxLayer
//           offset={2}
//           speed={-0.3}
//           style={{
//             backgroundSize: "80%",
//             backgroundPosition: "center",
//             backgroundImage: url("clients", true),
//           }}
//         />

//         <ParallaxLayer
//           offset={0}
//           speed={0.1}
//           onClick={() => this.parallax.scrollTo(1)}
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <img src={url("server")} style={{ width: "20%" }} />
//         </ParallaxLayer>

//         <ParallaxLayer
//           offset={1}
//           speed={0.1}
//           onClick={() => this.parallax.scrollTo(2)}
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <img src={url("bash")} style={{ width: "40%" }} />
//         </ParallaxLayer>

//         <ParallaxLayer
//           offset={2}
//           speed={-0}
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//           onClick={() => this.parallax.scrollTo(0)}
//         >
//           <img src={url("clients-main")} style={{ width: "40%" }} />
//         </ParallaxLayer>
//       </Parallax>
//     );
//   }
// }

// export default AboutMe;
