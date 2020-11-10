// libs
import React from "react";
// components
import InformationTitle from "../InformationTitle";
import ContentInformation from "../ContentInformation";
// others
import style from "./RoomService.module.scss";

const RoomService = () => (
  <div className={style.wrapper}>
    <div className={style.title}>
      <InformationTitle title="メンバー特典" />
    </div>
    <div className={style.content}>
      <ContentInformation content="あり：" />
    </div>
  </div>
);

export default RoomService;
