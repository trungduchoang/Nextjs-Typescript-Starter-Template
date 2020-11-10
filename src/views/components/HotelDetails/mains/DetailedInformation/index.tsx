// libs
import React from "react";
// components
import InformationTitle from "../../components/InformationTitle";
// others
import style from "./DetailedInformation.module.scss";

const DetailedInformation = () => (
  <div className={style.wrapper}>
    <InformationTitle title="自そ符" />
    <span className={style.information}>自そ符</span>
  </div>
);

export default DetailedInformation;
