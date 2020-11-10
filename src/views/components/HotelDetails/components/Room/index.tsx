// libs
import React from "react";
// components
import InformationTitle from "../InformationTitle";
// others
import style from "./Room.module.scss";

const Room = () => (
  <div className={style.wrapper}>
    <InformationTitle title="部屋 " subTitle="20室" />
  </div>
);

export default Room;
