// libs
import React from "react";
// others
import styles from "./SushiOrCake.module.scss";

const SushiOrCake = () => (
  <div className={styles.SushiOrCake}>
    <amp-state id="theFood" src="/mocks/mock.json" />
    <div
      className="greenBorder"
      data-amp-bind-class="theFood[currentMeal].style"
    >
      <p>Each food has a different border color.</p>
      <p data-amp-bind-text="'I want to eat ' + currentMeal + '.'">
        I want to eat cupcakes.
      </p>
      <amp-img width="300" height="200" src="theFood[currentMeal].imageUrl" />
      <button type="button" on="tap:AMP.setState({currentMeal: 'sushi'})">
        Set to sushi
      </button>
      <button type="button" on="tap:AMP.setState({currentMeal: 'cupcakes'})">
        Set to cupcakes
      </button>
    </div>
  </div>
);

export default SushiOrCake;
