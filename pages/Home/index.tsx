// libs
import React from "react";
import DocumentHead from "@/components/DocumentHead";
// others
import styles from "./hello-pages.module.scss";

const HelloPage = () => (
  <div>
    <DocumentHead />
    <hr />
    <p className={styles.justP}>Im a p</p>
  </div>
);

export default HelloPage;
