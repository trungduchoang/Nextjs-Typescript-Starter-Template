// libs
import React from "react";
// components
import { Carousel } from "@/libs/components";
// datasource, mocks
import { cityNowSlide } from "@/mocks/Home";
// others
import style from "./CityNowSlide.module.scss";

const CityNowSlide = () => (
  <section className={style.wrapper}>
    <Carousel slides={cityNowSlide} />
  </section>
);

export default CityNowSlide;
