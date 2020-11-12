// libs
import React from "react";
import { ShareIcon } from "@/libs/icons";
// components
import GlobalMenu from "./mains/GlobalMenu";
import PageName from "./mains/PageName";
// others
import style from "./CommonHeader.module.scss";

const CommonHeader = () => (
  <div className={style.wrapper}>
    <GlobalMenu />
    <PageName />
    <ShareIcon className={style.shareIcon} color="#266a99" size={18} />
  </div>
);

export default CommonHeader;
