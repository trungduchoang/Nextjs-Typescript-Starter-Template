// libs
import React from "react";
// components
import DataArea from "@/components/CommonFooter/mains/DataArea";
import Copyright from "@/components/CommonFooter/mains/Copyright";
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
