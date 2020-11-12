// libs
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// hooks
import { useStore } from "@/hooks";
// others
import style from "./HotelSlider.module.scss";

/**
 * HotelSlider
 */
const HotelSlider = () => {
  const {
    pageData: { hotelSlides },
  } = useStore({ page: "Developing" });

  return (
    <div className={style.wrapper}>
      <Swiper loop className={style.containerModifierClass}>
        {hotelSlides.map(({ imgSrc, alt }, i) => (
          <SwiperSlide key={i}>
            <Image
              src={imgSrc}
              alt={alt}
              width={2000}
              height={1333}
              layout="responsive"
              quality={29}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HotelSlider;
