// libs
import React from "react";
// others
import style from "./InformationTitle.module.scss";

type PROPS = {
  title: string;
  subTitle?: string;
};

const InformationTitle = ({ title, subTitle }: PROPS) => (
  <div className={style.wrapper}>
    <h2 className={style.informationTitle}>{title}</h2>
    {subTitle ? <p className={style.subTitle}>{subTitle}</p> : null}
  </div>
);

export default InformationTitle;
