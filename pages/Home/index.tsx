// libs
import React from "react";
import DocumentHead from "@/components/DocumentHead";
// others
import styles from "./hello-pages.module.scss";

const HelloPage = () => (
  <div className={styles.helloPagesWrapper}>
    <DocumentHead />
    <amp-state id="products" src="/mocks/mock.json" />
    <amp-img
      src="/mocks/discover-electronic-scene.jpg"
      width="60"
      height="30"
      layout="responsive"
      alt="discover-electronic-scene"
    />
  </div>
);

export const config = { amp: true };
export default HelloPage;
