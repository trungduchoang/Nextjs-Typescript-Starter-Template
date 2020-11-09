// libs
import React from "react";
// others
import style from "./HotelEquipItem.module.scss";

type PROPS = {
  /** kind name */
  name: string;
  /** kind equips */
  equips: string;
};
/**
 * HotelEquipItem - equip items
 */
const HotelEquipItem = ({ name, equips }: PROPS) => (
  <div className={style.wrapper}>
    <h2 className={style.title}>{name}</h2>
    <div className={style.equips}>
      {equips.split(",").map((item, index) => (
        <span className={style.item} key={index}>
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default HotelEquipItem;
