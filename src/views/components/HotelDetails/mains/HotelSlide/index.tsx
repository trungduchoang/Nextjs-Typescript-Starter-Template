// libs
import React from "react";
// components
import TitleSlide from "../../components/TitleSlide";
import MainSlide from "../../components/MainSlide";
import SubDescription from "../../components/SubDescription";
// others
import style from "./HotelSlide.module.scss";

const HotelSlide = () => (
  <div className={style.wrapper}>
    <TitleSlide />
    <MainSlide />
    <SubDescription />
  </div>
);

export default HotelSlide;
