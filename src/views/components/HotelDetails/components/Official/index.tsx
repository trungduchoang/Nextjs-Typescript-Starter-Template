// libs
import React from "react";
// components
import InformationTitle from "../InformationTitle";
import ContentInformation from "../ContentInformation";
// others
import style from "./Official.module.scss";

const Official = () => (
  <div className={style.wrapper}>
    <div className={style.title}>
      <InformationTitle title="オフィシャJレサイト" />
    </div>
    <div className={style.content}>
      <ContentInformation isLight content="ホテナビサイト" />
    </div>
  </div>
);

export default Official;
