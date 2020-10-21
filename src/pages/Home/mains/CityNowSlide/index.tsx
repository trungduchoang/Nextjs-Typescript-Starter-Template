// libs
import React from "react";
// components
import Slider from "@/components/Slider";
// datasource, mocks
import { cityNowSlide } from "@/mocks/Home/cityNowSlide";
// others
import style from "./CityNowSlide.module.scss";

const CityNowSlide = () => (
  <div className={style.wrapper}>
    <Slider slides={cityNowSlide} />
  </div>
);

export default CityNowSlide;
