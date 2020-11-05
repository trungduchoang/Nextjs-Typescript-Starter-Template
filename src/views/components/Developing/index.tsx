// libs
import React from "react";
import { SlideItem, Slider } from "@/libs/components/Slider";
// mocks
import { cityNowSlide } from "@/mocks/Home";
// others
import style from "./Developing.module.scss";

const Developing = () => (
  <div className={style.wrapper}>
    <div className={style.sliderWrapper}>
      <Slider>
        {cityNowSlide.map(({ key, imgSrc }) => (
          <SlideItem key={key} imgSrc={imgSrc} id={key} />
        ))}
      </Slider>
    </div>
  </div>
);

export default Developing;
