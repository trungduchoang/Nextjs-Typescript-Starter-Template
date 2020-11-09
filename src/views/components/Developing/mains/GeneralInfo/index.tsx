// libs
import React from "react";
import Image from "next/image";
import Icon from "@/libs/icons";
// others
import style from "./GeneralInfo.module.scss";

/**
 * GeneralInfo
 */
const GeneralInfo = () => (
  <div className={style.wrapper}>
    <div className={style.stayLogo}>
      <Image
        src="https://www.linkpicture.com/q/topBlueSquare-1.webp"
        width={36}
        height={36}
        alt="Happy hotel"
      />
    </div>
    <div className={style.info}>
      <div className={style.time}>
        <div>11/06</div>
        <div>17:03</div>
      </div>
      <h1 className={style.hotelName}>ハッピー</h1>
    </div>
    <div className={style.favoriteIcon}>
      <Icon name="Heart" size={28} />
    </div>
  </div>
);

export default GeneralInfo;
