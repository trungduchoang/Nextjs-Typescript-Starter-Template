// libs
import React, { useEffect, useState } from "@/components/Home/components/SectionTitle/node_modules/@/components/CommonHeader/mains/Logo/node_modules/@/components/CommonFooter/components/BranchInfo/node_modules/react";
import classNames from "@/components/Home/components/ShowMockAPI/node_modules/classnames";
// others
import style from "./slider.module.scss";

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
    <div
      className={classNames(style.sliderWrapper, { [style.isReady]: isReady })}
    >
      <div className={style.sliderContainer}>
        {slides.map((slide, index) => (
          <div
            className={classNames(style.slide, {
              [style.isActive]: activeSlide === index,
              [style.isPrev]: prevSlide === index,
            })}
            key={slide.key}
          >
            <div className={style.slideContent}>
              <h2 className={style.slideHeading}>
                {slide.companyName
                  .split("")
                  .map((letter: string, i: number) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <span className={style.letter} key={i}>
                      {letter === " " ? <>&nbsp;</> : letter}
                    </span>
                  ))}
              </h2>
              <h3 className={style.slideSubHeading}>{slide.description}</h3>
              <p className={style.readmore}>read more</p>
            </div>
            <div className={style.bgPartContainer}>
              {[...Array(IMAGE_PARTS).keys()].map((id) => (
                <div className={style.bgPart} key={id}>
                  <div
                    className={style.bgPartInner}
                    style={{ backgroundImage: `url(${slide.imgSrc})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={style.sliderControl} onClick={goToPrevSlide} />
      <div
        className={classNames(style.sliderControl, style.sliderControlRight)}
        onClick={goToNextSlide}
      />
    </div>
  );
};

export default Slider;
