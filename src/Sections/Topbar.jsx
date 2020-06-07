import React from "react";
import TopNavBar from "../Components/TopNavBar/TopNavBar";
import { ParallaxLayer } from "react-spring/renderprops-addons";
const Topbar = () => {
  return (
    <React.Fragment>
      {/* <ParallaxLayer
        offset={0}
        speed={0}
        style={{
          backgroundColor: "#80F073",
          height: "8vh",
        }}
      /> */}
      <TopNavBar />
    </React.Fragment>
  );
};

export default Topbar;
