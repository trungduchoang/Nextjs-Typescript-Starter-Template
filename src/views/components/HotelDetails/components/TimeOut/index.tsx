// libs
import React from "react";
// components
import InformationTitle from "../InformationTitle";
import ContentInformation from "../ContentInformation";
// others
import style from "./TimeOut.module.scss";

const TimeOut = () => (
  <div className={style.wrapper}>
    <div className={style.title}>
      <InformationTitle title="途中外出" />
    </div>
    <div className={style.content}>
      <ContentInformation content="0" />
    </div>
  </div>
);

export default TimeOut;
