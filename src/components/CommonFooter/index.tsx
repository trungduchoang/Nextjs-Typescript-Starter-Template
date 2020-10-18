// libs
import React from "react";
// components
import DataArea from "./mains/DataArea";
// others
import styles from "./CommonFooter.module.scss";

const CommonFooter = () => (
  <section className={styles.wrapper}>
    <div className={styles.inner}>
      <DataArea />
    </div>
  </section>
);

export default CommonFooter;
