// libs
import React from "react";
// components
import InformationTitle from "../InformationTitle";
import ContentInformation from "../ContentInformation";
// others
import style from "./NumberOfUser.module.scss";

const NumberOfUser = () => (
  <div className={style.wrapper}>
    <div className={style.title}>
      <InformationTitle title="利用人数" />
    </div>
    <div className={style.content}>
      <ContentInformation content="1人利用可3人以上利用可" />
    </div>
  </div>
);

export default NumberOfUser;
