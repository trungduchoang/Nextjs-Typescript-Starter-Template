// libs
import React, { useState } from "react";
import classNames from "classnames";
// components
import { SlideItem } from "./components/SlideItem";
// types
import { ANY_OBJECT } from "@/types/common";
// others
import style from "./Slider.module.scss";

export const Slider = ({
  className,
  dataSource,
  itemKey,
}: {
  className?: string;
  dataSource: ANY_OBJECT[];
  itemKey: string;
}) => {
  const numberOfSlide = dataSource.length;
  const [activeSlide, setActiveSlide] = useState(0);

  if (numberOfSlide < 1)
    throw Error("DataSource of Slider must has at least 1 items!");

  const goToNextSlide = () => {
    setActiveSlide((currentSlideIndex) => {
      let nextIndex = currentSlideIndex + 1;
      if (nextIndex === numberOfSlide) nextIndex = 0;
      return nextIndex;
    });
  };

  const goToPreviousSlide = () => {
    setActiveSlide((currentSlideIndex) => {
      let prevIndex = currentSlideIndex - 1;
      if (prevIndex === -1) prevIndex = numberOfSlide - 1;
      return prevIndex;
    });
  };

  return (
    <>
      <div className={classNames(style.wrapper, className)}>
        {dataSource.map(({ imgSrc, [itemKey]: key }, i) => (
          <SlideItem key={key} imgSrc={imgSrc} isActive={activeSlide === i} />
        ))}
      </div>
      <button type="button" onClick={goToNextSlide}>
        next
      </button>
      <button type="button" onClick={goToPreviousSlide}>
        prev
      </button>
    </>
  );
};
