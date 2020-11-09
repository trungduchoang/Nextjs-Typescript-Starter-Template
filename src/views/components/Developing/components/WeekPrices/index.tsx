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
const WeekPrices = ({ priceByWeek }: PROPS) => {
  const tempPriceByWeek = priceByWeek.map((item, i) => ({ ...item, key: i }));

  return (
    <div className={style.wrapper}>
      {tempPriceByWeek.map(({ week, key }) => (
        <div key={key}>{week}</div>
      ))}
    </div>
  );
};
export default WeekPrices;
