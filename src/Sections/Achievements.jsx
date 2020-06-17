import React from "react";
import { Typography } from "@material-ui/core";
import AchievementsPaper from "../Components/AchievementsPaper/AchievementsPaper";
import BraceHeading from "../Components/braceHeading/braceHeading";
import { useState } from "react";
import { useEffect } from "react";
import ImageOne from "../Static/banner.jpg";

const achievementsList = [
  {
    name: "HPAIR 2020 - 1st Runner-Up Impact Challenge",
    date: `14 Feb 2020`,
    images: [{ source: ImageOne }, { source: ImageOne }, { source: ImageOne }],
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Sagittis vitae et leo duis. Feugiat vivamus at augue eget arcu
    dictum varius duis at. Consectetur lorem donec massa sapien
    faucibus et. Mauris pellentesque pulvinar pellentesque habitant
    morbi tristique senectus et netus. Sagittis eu volutpat odio
    facilisis. Nunc mi ipsum faucibus vitae. Lectus urna duis
    convallis convallis tellus id interdum velit laoreet. Adipiscing
    at in tellus integer feugiat scelerisque varius morbi. Posuere
    morbi leo urna molestie at elementum. Purus in mollis nunc sed id
    semper risus in hendrerit. At auctor urna nunc id cursus metus
    aliquam. Risus quis varius quam quisque. Ornare suspendisse sed
    nisi lacus. Urna neque viverra justo nec ultrices. Gravida rutrum
    quisque non tellus orci ac auctor. Dolor morbi non arcu risus quis
    varius. Sagittis aliquam malesuada bibendum arcu. Curabitur
    gravida arcu ac tortor dignissim convallis aenean et.`,
  },
  {
    name: "Alexa Student Influencer 2.0",
    date: `15 Nov 2019`,
    images: [{ source: ImageOne }, { source: ImageOne }, { source: ImageOne }],
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Sagittis vitae et leo duis. Feugiat vivamus at augue eget arcu
    dictum varius duis at. Consectetur lorem donec massa sapien
    faucibus et. Mauris pellentesque pulvinar pellentesque habitant
    morbi tristique senectus et netus. Sagittis eu volutpat odio
    facilisis. Nunc mi ipsum faucibus vitae. Lectus urna duis
    convallis convallis tellus id interdum velit laoreet. Adipiscing
    at in tellus integer feugiat scelerisque varius morbi. Posuere
    morbi leo urna molestie at elementum. Purus in mollis nunc sed id
    semper risus in hendrerit. At auctor urna nunc id cursus metus
    aliquam. Risus quis varius quam quisque. Ornare suspendisse sed
    nisi lacus. Urna neque viverra justo nec ultrices. Gravida rutrum
    quisque non tellus orci ac auctor. Dolor morbi non arcu risus quis
    varius. Sagittis aliquam malesuada bibendum arcu. Curabitur
    gravida arcu ac tortor dignissim convallis aenean et.`,
  },
];

const Projects = () => {
  const [achievements, setAchievements] = useState([]);
  useEffect(() => {
    setAchievements(achievementsList);
  }, []);
  return (
    <>
      <BraceHeading name={"Achievements"} />
      {achievements
        ? achievements.map((achievement, idx) => {
            return <AchievementsPaper info={achievement} key={idx} />;
          })
        : null}
    </>
  );
};

export default Projects;
