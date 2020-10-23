// libs
import React, { useEffect, useState } from "react";
import classNames from "classnames";

const IMAGE_PARTS = 4;
const AUTO_CHANGE_TIME = 4000;

const Slider = ({ slides }: { slides: Array<any> }) => {
  const totalSlide = slides.length;
  const [activeSlide, setActiveSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(-1);
  const [isReady, _] = useState(true);

  const changeSlide = (unit: number) => {
    let nextSlide = activeSlide + unit;
    if (nextSlide < 0) nextSlide = totalSlide - 1;
    if (nextSlide >= totalSlide) nextSlide = 0;
    setActiveSlide(nextSlide);
    setPrevSlide(activeSlide);
  };
  const goToNextSlide = () => {
    changeSlide(1);
  };
  const goToPrevSlide = () => {
    changeSlide(-1);
  };

  useEffect(() => {
    const slideTimer = setTimeout(goToNextSlide, AUTO_CHANGE_TIME);
    return () => clearTimeout(slideTimer);
  });

  return (
    <div className={classNames("sliderWrapper", { isReady })}>
      <div className="sliderContainer">
        {slides.map((slide, index) => (
          <div
            className={classNames("slide", {
              isActive: activeSlide === index,
              isPrev: prevSlide === index,
            })}
            key={slide.key}
          >
            <div className="slideContent">
              <h2 className="slideHeading">
                {slide.companyName
                  .split("")
                  .map((letter: string, i: number) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <span className="letter" key={i}>
                      {letter === " " ? <>&nbsp;</> : letter}
                    </span>
                  ))}
              </h2>
              <h3 className="slideSubHeading">{slide.description}</h3>
              <p className="readmore">read more</p>
            </div>
            <div className="bgPartContainer">
              {[...Array(IMAGE_PARTS).keys()].map((id) => (
                <div className="bgPart" key={id}>
                  <div
                    className="bgPartInner"
                    style={{ backgroundImage: `url(${slide.imgSrc})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="sliderControl" onClick={goToPrevSlide} />
      <div
        className="sliderControl sliderControlRight"
        onClick={goToNextSlide}
      />
    </div>
  );
};

export default Slider;
