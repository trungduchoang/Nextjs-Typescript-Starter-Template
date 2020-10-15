// libs
import React from "react";
// components
import DocumentHead from "@/components/DocumentHead";
import SushiOrCake from "./components/SushiOrCake";
// others
import styles from "./test-on-tap.module.scss";

const HelloPage = () => (
  <div className={styles.testOnTapWrapper}>
    <DocumentHead />
    <amp-state id="foo" src="/mocks/foo.json" />
    <p data-amp-bind-text="'Hello ' + foo">Hello World</p>
    <button type="button" on="tap:AMP.setState({foo: 'Interactivity'})">
      Say Hello Interactivity
    </button>
    <SushiOrCake />
  </div>
);

export const config = { amp: true };
export default HelloPage;
