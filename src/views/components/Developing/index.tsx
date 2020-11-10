// libs
import React from "react";
import { Slider } from "@/libs/components/Slider";
// mocks
import { cityNowSlide } from "@/mocks/Home";
// others
import style from "./Developing.module.scss";

const Developing = () => (
  <div className={style.wrapper}>
    <div className={style.sliderWrapper}>
      <Slider dataSource={cityNowSlide} itemKey="key" />
    </div>
  </div>
);

export default Developing;
