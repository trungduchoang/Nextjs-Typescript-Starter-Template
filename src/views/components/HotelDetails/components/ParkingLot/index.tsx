// libs
import React from "react";
// components
import InformationTitle from "../InformationTitle";
import ContentInformation from "../ContentInformation";
// others
import style from "./ParkingLot.module.scss";

const ParkingLot = () => (
  <div className={style.wrapper}>
    <div className={style.title}>
      <InformationTitle title="駐車場" />
    </div>
    <div className={style.content}>
      <ContentInformation content="有0:25台 ハイルーフ可：25台" />
    </div>
  </div>
);

export default ParkingLot;
