// libs
import React from "react";
// components
import { Slider } from "@/libs/components";
// datasource, mocks
import { cityNowSlide } from "@/mocks/Home";
// others
import style from "./CityNowSlide.module.scss";

const CityNowSlide = () => (
  <section className={style.wrapper}>
    <Slider slides={cityNowSlide} />
  </section>
);

export default CityNowSlide;
