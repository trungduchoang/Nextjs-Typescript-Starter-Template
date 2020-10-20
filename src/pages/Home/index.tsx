// libs
import React from "react";
// components
import Slider from "@/components/Slider";
import CapacityInfo from "./mains/CapacityInfo";
// datasource, mocks
import { cityNowSlide } from "@/mocks/Home/cityNowSlide";
// others
import style from "./Home.module.scss";

const Home = () => (
  <div className={style.wrapper}>
    <Slider slides={cityNowSlide} />
    <CapacityInfo />
  </div>
);

export default Home;
