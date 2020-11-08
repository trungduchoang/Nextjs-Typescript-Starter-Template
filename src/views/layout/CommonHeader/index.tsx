// libs
import React from "react";
// components
import GlobalMenu from "./mains/GlobalMenu";
import PageName from "./mains/PageName";
// others
import style from "./CommonHeader.module.scss";
import Icon from "@/libs/icons";

const CommonHeader = () => (
  <div className={style.wrapper}>
    <GlobalMenu />
    <PageName />
    <Icon name="Share" className={style.shareIcon} color="#266a99" size={18} />
  </div>
);

export default CommonHeader;
