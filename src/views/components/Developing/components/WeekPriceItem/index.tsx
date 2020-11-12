// libs
import React from "react";
// others
import style from "./WeekPriceItem.module.scss";

type PROPS = {
  /** week */
  week: string;
  /** prices info by timezone */
  prices: {
    /** price */
    price: string;
    /** timeZone */
    timeZone: string;
  }[];
};
/**
 * WeekPriceItem
 */
const WeekPriceItem = ({ week, prices }: PROPS) => (
  <div className={style.wrapper}>
    <p className={style.week}>{week}</p>
    {prices.map(({ price, timeZone }) => (
      <div key={price + timeZone}>
        <p className={style.timeZone}>{timeZone}</p>
        <p className={style.price}>{price}</p>
      </div>
    ))}
  </div>
);
export default WeekPriceItem;
