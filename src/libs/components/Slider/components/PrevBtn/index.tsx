// libs
import React from "react";
// components
import ControlBtn from "../ControlBtn";

type PROPS = {
  /** parent setState callback */
  setActiveSlide: (cb: (T: number) => number) => void;
  /** numberOf slides */
  numberOfSlide: number;
};
/**
 * PrevBtn
 */
const PrevBtn = ({ setActiveSlide, numberOfSlide }: PROPS) => {
  const goToPreviousSlide = () => {
    setActiveSlide((currentSlideIndex) => {
      let prevIndex = currentSlideIndex - 1;
      if (prevIndex === -1) prevIndex = numberOfSlide - 1;

      return prevIndex;
    });
  };

  return <ControlBtn onClick={goToPreviousSlide} position="right" />;
};

export default PrevBtn;
