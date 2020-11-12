// libs
import React from "react";
// hooks
import { useStore } from "@/hooks";
// components
import HotelEquipItem from "../../components/HotelEquipItem";
// others
import style from "./HotelEquipment.module.scss";

/**
 * HotelEquipment
 */
const HotelEquipment = () => {
  const {
    pageData: { hotelEquipByKind },
  } = useStore({ page: "Developing" });

  return (
    <div className={style.wrapper}>
      <h2 className={style.equipLabel}>装置</h2>
      {hotelEquipByKind.map((equipByKind) => (
        <HotelEquipItem {...equipByKind} key={equipByKind.name} />
      ))}
    </div>
  );
};

export default HotelEquipment;
