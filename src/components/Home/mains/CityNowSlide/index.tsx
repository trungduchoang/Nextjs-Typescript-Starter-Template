// libs
import React from "@/components/CommonHeader/mains/Logo/node_modules/@/components/CommonFooter/components/BranchInfo/node_modules/react";
// components
import Slider from "@/components/Slider";
// datasource, mocks
import { cityNowSlide } from "@/mocks/Home";
// others
import style from "./CityNowSlide.module.scss";

const CityNowSlide = () => (
  <div className={style.wrapper}>
    <Slider slides={cityNowSlide} />
  </div>
);

export default CityNowSlide;
