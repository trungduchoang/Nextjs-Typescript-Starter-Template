// libs
import React from "react";
// others
import style from "./WeekPrices.module.scss";

type PROPS = {
  /** List price Info by Week  */
  priceByWeek: {
    /** week */
    week: string;
    /** prices info by timezone */
    prices: {
      /** price */
      price: string;
      /** timeZone */
      timeZone: string;
    }[];
  }[];
};
/**
 * WeekPrices
 */
const WeekPrices = ({ priceByWeek }: PROPS) => (
  <div className={style.wrapper}>
    {priceByWeek.map(({ week }) => (
      <div>{week}</div>
    ))}
  </div>
);
export default WeekPrices;
