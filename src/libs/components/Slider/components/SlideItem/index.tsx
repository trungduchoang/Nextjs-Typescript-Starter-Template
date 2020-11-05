// libs
import React from "react";
import Image from "next/image";
import classNames from "classnames";
// others
import style from "./SlideItem.module.scss";
import { useSlider } from "../../SliderContext";

export const SlideItem = ({
  imgSrc,
  className,
  id,
}: {
  imgSrc: string;
  className?: string;
  id: string | number;
}) => {
  const { activeSlide } = useSlider();

  return (
    <div className={classNames(style.wrapper, className)}>
      <div
        className={classNames(style.inner, {
          [style.active]: activeSlide === id,
        })}
      >
        <Image src={imgSrc} layout="fill" />
      </div>
    </div>
  );
};
