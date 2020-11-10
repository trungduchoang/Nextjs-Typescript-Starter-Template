// libs
import React from "react";
// components
import InformationTitle from "../InformationTitle";
// others
import style from "./InformationInline.module.scss";

type PROPS = {
  title: string;
  subTitle: string;
};

const InformationInline = ({ title, subTitle }: PROPS) => (
  <div className={style.wrapper}>
    <InformationTitle title={title} subTitle={subTitle} />
  </div>
);

export default InformationInline;
