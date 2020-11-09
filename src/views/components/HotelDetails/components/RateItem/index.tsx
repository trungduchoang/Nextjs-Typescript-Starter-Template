// libs
import React from "react";
// components
import TitleDescription from "../TitleDescription";
import RateIcon from "../RateIcon";
// others
import style from "./RateItem.module.scss";

const RateItem = () => (
  <div className={style.wrapper}>
    <TitleDescription isBackground={false} />
    <RateIcon />
  </div>
);

export default RateItem;
