// libs
import React from "react";
// others
import style from "./InformationTitle.module.scss";

type PROPS = {
  title?: string;
};

const InformationTitle = ({ title }: PROPS) => (
  <div className={style.wrapper}>
    <h2 className={style.informationTitle}>{title}</h2>
    <p className={style.subTitle}></p>
  </div>
);

export default InformationTitle;
