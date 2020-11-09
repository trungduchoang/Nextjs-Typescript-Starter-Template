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
const WeekPrices = ({ priceByWeek }: PROPS) => {
  const tempPriceByWeek = priceByWeek.map((week, i) => ({ week, key: i }));

  return (
    <div className={style.wrapper}>
      {tempPriceByWeek.map(({ week, key }) => (
        <WeekPriceItem key={key} {...week} />
      ))}
    </div>
  );
};
export default WeekPrices;
