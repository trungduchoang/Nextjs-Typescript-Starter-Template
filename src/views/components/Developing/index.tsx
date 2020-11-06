// libs
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { TabPane, Tabs } from "@/libs/components";
// mocks
import { cityNowSlide } from "@/mocks/Home";
// others
import style from "./Developing.module.scss";

const Developing = () => (
  <div className={style.wrapper}>
    <div className={style.sliderWrapper}>
      <Slider>
        {cityNowSlide.map(({ imgSrc, key, description }) => (
          <Image
            src={imgSrc}
            key={key}
            alt={description}
            width={325}
            height={230}
          />
        ))}
      </Slider>
    </div>
    <div className={style.mapouter}>
      <div className={style.gmap_canvas}>
        <iframe
          title="happy hotel address"
          width="600"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=3%20Chome-37-25%20Mukojima%2C%20Sumida%20City%2C%20Tokyo%20131-0033%2C%20Japan&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
        />
      </div>
    </div>
    <div>
      <Tabs defaultActiveKey={2}>
        <TabPane key={1} id={1}>
          Tab 1
        </TabPane>
        <TabPane key={2} id={2}>
          Tab 2
        </TabPane>
      </Tabs>
    </div>
  </div>
);

export default Developing;
