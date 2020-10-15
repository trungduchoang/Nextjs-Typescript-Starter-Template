// libs
import React from "react";
import DocumentHead from "@/components/DocumentHead";
// others
import styles from "./hello-pages.module.scss";

const HelloPage = () => (
  <div className={styles.helloPagesWrapper}>
    <DocumentHead />
    <amp-img
      alt="A view of the sea"
      src="https://simonpaulhair.co.uk/wp-content/uploads/2014/03/320x320.gif"
      width="320"
      height="320"
      layout="responsive"
    />
  </div>
);

export const config = { amp: true };
export default HelloPage;
