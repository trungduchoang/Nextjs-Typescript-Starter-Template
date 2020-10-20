// libs
import React from "react";
// components
import Carousel from "@/components/Carousel";
import CapacityInfo from "./mains/CapacityInfo";
// datasource, mocks
import { cityNowSlide } from "@/mocks/Home/cityNowSlide";
// others
import style from "./Home.module.scss";

const Home = () => (
  <div className={style.wrapper}>
    <Carousel slides={cityNowSlide} />
    <CapacityInfo />
  </div>
);

export default Home;
