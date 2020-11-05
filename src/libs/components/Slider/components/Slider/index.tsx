// libs
import React, { useState } from "react";
import classNames from "classnames";
// others
import { SliderContext } from "../../SliderContext";
import style from "./Slider.module.scss";

export const Slider = ({
  children,
  className,
}: {
  children: JSX.Element | JSX.Element[];
  className?: string;
}) => {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <SliderContext.Provider value={{ activeSlide, setActiveSlide }}>
      <div className={classNames(style.wrapper, className)}>{children}</div>
      <button
        type="button"
        onClick={() => {
          setActiveSlide(2);
        }}
      >
        zzzzz
      </button>
    </SliderContext.Provider>
  );
};
