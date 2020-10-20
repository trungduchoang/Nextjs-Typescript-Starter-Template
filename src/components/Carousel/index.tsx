// libs
import React, { useEffect, useState } from "react";
import classNames from "classnames";
// others
import style from "./Carousel.module.scss";

const IMAGE_PARTS = 4;
const AUTO_CHANGE_TIME = 4000;

const Carousel = ({ slides }: { slides: Array<any> }) => {
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
    <div className={classNames(style.wrapper, { [style.isReady]: isReady })}>
      <div className={style.sliderContainer}>
        {slides.map((slide, index) => (
          <div
            className={classNames(style.slide, {
              [style.isActive]: activeSlide === index,
              [style.isPrev]: prevSlide === index && totalSlide > 1,
            })}
            key={slide.companyName}
          >
            <div className={style.slideContent}>
              <h2 className={classNames(style.slideHeading)}>
                {slide.companyName.split("").map((letter, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <span className={classNames(style.letter)} key={i}>
                    {letter}
                  </span>
                ))}
              </h2>
              <h3 className={classNames(style.slideSubHeading)}>
                {slide.description}
              </h3>
              <p className={classNames(style.readmore)}>Xem thêm</p>
            </div>
            <div className={style.bgPartContainer}>
              {[...Array(IMAGE_PARTS).keys()].map((id) => (
                <div className={style.bgPart} key={id}>
                  <div
                    className={style.bgPartInner}
                    style={{ background: `url(${slide.imgSrc})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={style.slideControl} onClick={goToPrevSlide} />
      <div
        className={classNames(style.slideControl, style.slideControlRight)}
        onClick={goToNextSlide}
      />
    </div>
  );
};

export default Carousel;
