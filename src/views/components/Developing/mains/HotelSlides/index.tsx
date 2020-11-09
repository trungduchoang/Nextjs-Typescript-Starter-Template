// libs
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
// hooks
// import { useStore } from "@/hooks";
// mocks
import { hotelDetailSlide } from "@/mocks/Developing/hotelDetailSlide";
// others
import style from "./HotelSlider.module.scss";

/**
 * HotelSlider
 */
const HotelSlider = () => (
  // const {
  //   pageData: { hotelSlides },
  // } = useStore({ page: "Developing" });

  <div className={style.wrapper}>
    <Slider>
      {hotelDetailSlide.map(({ name, imgSrc, alt }) => (
        <Image
          src={imgSrc}
          key={name}
          alt={alt}
          width={2000}
          height={1333}
          layout="responsive"
        />
      ))}
    </Slider>
  </div>
);
export default HotelSlider;
