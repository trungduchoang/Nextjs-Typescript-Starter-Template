// libs
import React from "react";
// components
import DataArea from "./mains/DataArea";
import Copyright from "./mains/Copyright";
// others
import styles from "./CommonFooter.module.scss";

const CommonFooter = () => (
  <div className={styles.wrapper}>
    <div className={styles.inner}>
      <DataArea />
      <Copyright />
    </div>
  </div>
);

export default CommonFooter;
