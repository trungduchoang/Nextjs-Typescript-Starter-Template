// libs
import React from "react";
// hooks
import { useStore } from "@/hooks";
// components
import HotelKind from "../../components/HotelKind";
import HotelEquipment from "../HotelEquipment";
// others
import style from "./PriceInfo.module.scss";

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
      <HotelEquipment />
    </div>
  );
};

export default PriceInfo;
