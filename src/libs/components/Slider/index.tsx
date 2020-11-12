// libs
import React, { useState } from "react";
import classNames from "classnames";
// components
import SlideItem from "./components/SlideItem";
import NextBtn from "./components/NextBtn";
import PrevBtn from "./components/PrevBtn";
// types
import { ANY_OBJECT } from "@/types/common";
// others
import style from "./Slider.module.scss";

type PROPS = {
  /** wrapper className for customizing */
  className?: string;
  /** dataSource */
  dataSource: ANY_OBJECT[];
  /** key of dataSource item */
  itemKey: string;
};
/**
 * Slider - Slider with full width depend on parent element
 */
export const Slider = ({ className, dataSource, itemKey }: PROPS) => {
  const numberOfSlide = dataSource.length;
  const [activeSlide, setActiveSlide] = useState(0);

  if (numberOfSlide < 1)
    throw Error("DataSource of Slider must has at least 1 items!");

  return (
    <div className={classNames(style.wrapper, className)}>
      {dataSource.map(({ imgSrc, [itemKey]: key }, i) => (
        <SlideItem key={key} imgSrc={imgSrc} isActive={activeSlide === i} />
      ))}
      <NextBtn setActiveSlide={setActiveSlide} numberOfSlide={numberOfSlide} />
      <PrevBtn setActiveSlide={setActiveSlide} numberOfSlide={numberOfSlide} />
    </div>
  );
};
