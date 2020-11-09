// libs
import React from "react";
// hooks
import { useStore } from "@/hooks";
// others
import style from "./PriceInfo.module.scss";
import HotelKind from "../../components/HotelKind";

/**
 * PriceInfo - Content Container of Tab Price
 */
const PriceInfo = () => {
  const {
    pageData: { hotelPricesByKind },
  } = useStore({ page: "Developing" });

  return (
    <div className={style.wrapper}>
      {hotelPricesByKind.map((kindInfo) => (
        <HotelKind {...kindInfo} />
      ))}
    </div>
  );
};
export default PriceInfo;
