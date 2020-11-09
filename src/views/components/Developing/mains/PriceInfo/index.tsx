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
      <div className={style.paymentType}>現金</div>
      {hotelPricesByKind.map((kindInfo) => (
        <HotelKind {...kindInfo} key={kindInfo.name} />
      ))}
    </div>
  );
};

export default PriceInfo;
