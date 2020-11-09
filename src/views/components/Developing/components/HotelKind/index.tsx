// libs
import React from "react";
// components
import WeekPrices from "../WeekPrices";
// others
import style from "./HotelKind.module.scss";

type PROPS = {
  /** kind name */
  name: string;
  /** kind remarks */
  remarks: string;
  /** hotel prices info by week */
  priceByWeek: {
    /** week */
    week: string;
    /** prices info */
    prices: {
      price: string;
      timeZone: string;
    }[];
  }[];
};
/**
 * HotelKind
 */
const HotelKind = ({ name, remarks, priceByWeek }: PROPS) => (
  <div className={style.wrapper}>
    <h2 className={style.name}>{name}</h2>
    <WeekPrices priceByWeek={priceByWeek} />
    <pre className={style.remarks}>{remarks}</pre>
  </div>
);

export default HotelKind;
