// libs
import React from "react";
// components
import DataArea from "./mains/DataArea";
import Copyright from "./mains/Copyright";
// others
import styles from "./CommonFooter.module.scss";

const CommonFooter = () => (
  <section className={styles.wrapper}>
    <div className={styles.inner}>
      <DataArea />
      <Copyright />
    </div>
  </section>
);

export default CommonFooter;
