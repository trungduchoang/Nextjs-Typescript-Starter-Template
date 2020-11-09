// libs
import React from "react";
// components
import InformationTitle from "../../components/InformationTitle";
import ContentInformation from "../../components/ContentInformation";
// others
import style from "./GuestInformation.module.scss";

const GuestInformation = () => (
  <div className={style.wrapper}>
    <div className={style.title}>
      <InformationTitle title="自そ符" />
    </div>
    <div className={style.content}>
      <ContentInformation />
    </div>
  </div>
);

export default GuestInformation;
