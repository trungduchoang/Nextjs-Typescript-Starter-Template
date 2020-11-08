// libs
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
// mocks
import { cityNowSlide } from "@/mocks/Home";
// others
import style from "./HotelSlider.module.scss";

/**
 * HotelSlider
 */
const HotelSlider = () => (
  <div className={style.wrapper}>
    <div className={style.inner}>
      <Slider>
        {cityNowSlide.map(({ imgSrc, key, description }) => (
          <Image
            src={imgSrc}
            key={key}
            alt={description}
            width={384}
            height={216}
            layout="responsive"
          />
        ))}
      </Slider>
    </div>
  </div>
);

export default HotelSlider;
