// libs
import React from "@/components/Home/components/SectionTitle/node_modules/@/components/CommonHeader/mains/Logo/node_modules/@/components/CommonFooter/components/BranchInfo/node_modules/react";
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
