// libs
import React from "react";
// components
import InformationTitle from "../InformationTitle";
import ContentInformation from "../ContentInformation";
// others
import style from "./OtherService.module.scss";

const OtherService = () => (
  <div className={style.wrapper}>
    <div className={style.title}>
      <InformationTitle title="Jしームサーピス" />
    </div>
    <div className={style.content}>
      <ContentInformation content="あり：有名店のラーメンや本格力レー等のメニューが充実！ " />
    </div>
  </div>
);

export default OtherService;
