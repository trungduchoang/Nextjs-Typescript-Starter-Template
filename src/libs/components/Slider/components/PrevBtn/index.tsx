// libs
import React from "react";
// components
import ControlBtn from "../ControlBtn";

const NextBtn = ({
  setActiveSlide,
  numberOfSlide,
}: {
  setActiveSlide: (cb: (T: number) => number) => void;
  numberOfSlide: number;
}) => {
  const goToPreviousSlide = () => {
    setActiveSlide((currentSlideIndex) => {
      let prevIndex = currentSlideIndex - 1;
      if (prevIndex === -1) prevIndex = numberOfSlide - 1;
      return prevIndex;
    });
  };

  return <ControlBtn onClick={goToPreviousSlide} />;
};

export default NextBtn;
/// //////////Copy PrevBtn form outside index.tsx to done this
