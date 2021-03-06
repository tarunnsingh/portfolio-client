import axios from "axios";

export default {
  sendMessage: (message) => {
    return axios
      .post(
        "https://portfolio-server-mernapp.herokuapp.com/api/message/newmessage",
        { message }
      )
      .then((res) => {
        if (res.status == 200) {
          console.log("RES : ", res);
          return res;
        }
      })
      .then((res) => {
        console.log("RESponsw : ", res);
        return res;
      })
      .catch((error) => error);
  },
};
