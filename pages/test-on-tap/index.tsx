// libs
import React from "react";
import DocumentHead from "@/components/DocumentHead";
// others
import styles from "./test-on-tap.module.scss";

const HelloPage = () => (
  <div className={styles.testOnTapWrapper}>
    <DocumentHead />
    <amp-state id="products" src="/mocks/mock.json" />
    <amp-img
      on="tap:AMP.setState({ productId: 0})"
      src="/mocks/discover-electronic-scene.jpg"
      width="60"
      height="40"
      role="button"
      tabindex="0"
    />
  </div>
);

export const config = { amp: true };
export default HelloPage;
