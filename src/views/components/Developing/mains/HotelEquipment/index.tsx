// libs
import React from "react";
// components
import HotelEquipList from "../../components/HotelEquipList";
// others
import style from "./HotelEquipment.module.scss";

/**
 * HotelEquipment - Content Container of Tab Price
 */
const HotelEquipment = () => (
  <div className={style.wrapper}>
    <HotelEquipList />
  </div>
);

export default HotelEquipment;
