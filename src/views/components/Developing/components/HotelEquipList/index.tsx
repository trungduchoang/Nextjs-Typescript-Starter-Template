// libs
import React from "react";
// hooks
import { useStore } from "@/hooks";
// components
import HotelEquipItem from "../HotelEquipItem";
// others
import style from "./HotelEquipList.module.scss";

/**
 * HotelEquipList - Show element form hotel equip list
 */
const HotelEquipList = () => {
  const {
    pageData: { hotelEquipByKind },
  } = useStore({ page: "Developing" });

  return (
    <div className={style.wrapper}>
      {hotelEquipByKind.map((equipByKind) => (
        <HotelEquipItem {...equipByKind} key={equipByKind.name} />
      ))}
    </div>
  );
};
export default HotelEquipList;
