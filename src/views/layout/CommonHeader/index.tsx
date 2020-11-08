// libs
import React from "react";
// components
import GlobalMenu from "./mains/GlobalMenu";
import PageName from "./mains/PageName";
// icons
import { ShareAltOutlined } from "@ant-design/icons";
// others
import style from "./CommonHeader.module.scss";

const CommonHeader = () => (
  <div className={style.wrapper}>
    <GlobalMenu />
    <PageName />
    <ShareAltOutlined className={style.iconShare} translate={null} />
  </div>
);

export default CommonHeader;
