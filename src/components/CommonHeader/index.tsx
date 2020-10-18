// libs
import React from "react";
// components
import Logo from "./mains/Logo";
import NavigationArea from "./mains/NavigationArea";
// others
import style from "./CommonHeader.module.scss";

const CommonHeader = () => (
  <section className={style.wrapper}>
    <Logo />
    <NavigationArea />
  </section>
);

export default CommonHeader;
