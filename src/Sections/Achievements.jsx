import React from "react";
import { Typography } from "@material-ui/core";
import AchievementsPaper from "../Components/AchievementsPaper/AchievementsPaper";
import BraceHeading from "../Components/braceHeading/braceHeading";
import { useState } from "react";
import { useEffect } from "react";

import Image1 from "../Static/hpair-pics/6.jpg";
import Image2 from "../Static/hpair-pics/2.jpg";
import Image3 from "../Static/hpair-pics/3.jpg";
import Image5 from "../Static/hpair-pics/5.jpg";

import Image6 from "../Static/amazon/1.jpg";
import Image7 from "../Static/amazon/2.jpg";

import { makeStyles } from "@material-ui/styles";

const achievementsList = [
  {
    name: "HPAIR 2020",
    date: `14 Feb 2020`,
    images: [
      { source: Image3 },
      { source: Image1 },
      { source: Image2 },
      { source: Image5 },
    ],
    body: `The date was 25th Nov 2019 when I got my HPAIR Acceptance confirmation the second time. The first time was in Aug 2019, which I couldn't attend. But this time it was 'Harvard' and I couldn't miss one of the biggest 
    opportunities of my life. The preparations for the conference were hectic. But then two and a half months later, there I was, standing at Boston International Airport on 13th Feb 2020. Standing on the lands of America, 
    literally 13000 km away from home. That moment was 'the moment' of my life and for the next 7 days I was going to experience something which I used to dream. Well HPAIR stands for Harvard Project for Asian and International Relations,
     which is a non-profit global-level confernece organised by the Harvard University. Delegates from around 62 coutries were present who brought with them their cultures and traditions. The confernece began and we used to have different events everyday. From panel discussions to Harvard Tour, from iNight carnival to ballroom dinner all of them had thier own flavours of amusemnet and thrill. We were also fortunate to get the second position in Stride Stars Impact Challeneg. Apart from Harvard we enjoyed staying in Boston. Roaming on the streets with international friends on the streets of America, was truly a wonderful experience. Got to know that McDonalds dosen't taste the same everywhere but Starbucks does. We observerd how helpful Americans were at every step. Actually they treat us the same way as we treat foreigners in India. I got to know so many people from all around the world and also learnt a lot from their cultures. I believe one should be a part of such conferences at least once a year if we get the opportunity. The conference was overall a great learning experience which provided me with a differnet way of looking at life.
    HPAIR is organised twice a year. In August it is organganised in an Asian Country for people from Asia and in Feb it takes place at Harvard Boston. To apply for the same you may visit the official website.`,
  },
  {
    name: "ASI 2.0",
    date: `15 Nov 2019`,
    images: [{ source: Image6 }, { source: Image7 }],
    body: `After a set of 3 interviews and a lot of speculation I was finally selected as Alexa Student Influencer. We were just 10 people selected across India as the second batch of the programme. We were invited to Bengaluru for the Orientation Day programme which took place at their magnificent Amazon Office. Our flight tickets and hotel rooms were booked by Amazon and the hospitatlity provided was awesome. The whole day we learnt plenty of new stuff from the heads of Alexa India living in the environment of a corporate office for the first time ever and that too Amazon! We enjoyed learning from them but also got to know our responsibilities as to what we will be doing next.
    Alexa Student Influencer (ASI) programme runs mostly around the year and if you are interseted you may apply at their official website.
    Thanks!`,
  },
];

const useStyles = makeStyles(() => ({
  topLine: {
    textAlign: "center",
    marginBottom: "2%",
    width: "80%",
    margin: "auto",
  },
}));

const Projects = () => {
  const classes = useStyles();
  const [achievements, setAchievements] = useState([]);
  useEffect(() => {
    setAchievements(achievementsList);
  }, []);
  return (
    <>
      <BraceHeading name={"Notable Events"} />
      <Typography className={classes.topLine} variant="subtitle2">
        In this section, I have shared few of my experiences which are some of
        the big events in my life. Although the list isn't as big but it's the
        quality of these experiences which matters. Do give it a read!{" "}
      </Typography>
      {achievements
        ? achievements.map((achievement, idx) => {
            return <AchievementsPaper info={achievement} key={idx} />;
          })
        : null}
    </>
  );
};

export default Projects;
