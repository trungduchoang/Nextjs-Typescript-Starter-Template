// libs
import React from "react";
// components
import Slider from "@/libs/Slider";
import CapacityInfo from "./mains/CapacityInfo";
import Mission from "./mains/Mission";
import News from "./mains/News";
// datasource, mocks
import { cityNowSlide } from "@/mocks/Home/cityNowSlide";
// others
import style from "./Home.module.scss";

const Home = () => {
  // eslint-disable-next-line no-console
  console.log("Dont forget Reset head");
  return (
    <div className={style.wrapper}>
      <Slider slides={cityNowSlide} />
      <CapacityInfo />
      <Mission />
      <News />
    </div>
  );
};

export default Home;
