import React from "react";
import styles from "./braceHeading.module.css";
import { useState } from "react";
import { useEffect } from "react";

const BraceHeading = (props) => {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(props.name);
  }, []);
  console.log("PROPS IN CONTACT HEAD: ", props);
  return (
    <div className={styles.container}>
      <div className={styles.document}>
        <h1>{name}</h1>
        <hr className={styles.brace} />
      </div>
    </div>
  );
};

export default BraceHeading;
