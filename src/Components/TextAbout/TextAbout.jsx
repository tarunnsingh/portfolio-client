import React from "react";
import styles from "./TextAbout.module.css";

const TextAbout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.document}>
        <h1>About Me</h1>
        <hr className={styles.brace} />
      </div>
    </div>
  );
};

export default TextAbout;