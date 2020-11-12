// libs
import React from "react";
import WeekPriceItem from "../WeekPriceItem";
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
    {priceByWeek.map((priceInfo, i) => (
      <WeekPriceItem key={i} {...priceInfo} />
    ))}
  </div>
);
export default WeekPrices;
