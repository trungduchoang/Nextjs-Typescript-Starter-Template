// libs
import React from "react";
// components
import InformationTitle from "../InformationTitle";
import ContentInformation from "../ContentInformation";
// others
import style from "./HotelGroup.module.scss";

const HotelGroup = () => (
  <div className={style.wrapper}>
    <div className={style.title}>
      <InformationTitle title="ホテルグループ" />
    </div>
    <div className={style.content}>
      <ContentInformation isLight content="系列店" />
    </div>
  </div>
);

export default HotelGroup;
