// libs
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// components
import Slider from "@/libs/Slider";
import CapacityInfo from "./mains/CapacityInfo";
import Mission from "./mains/Mission";
import News from "./mains/News";
import ShowMockAPI from "./components/ShowMockAPI";
// datasource, mocks
import { cityNowSlide } from "@/mocks/Home/cityNowSlide";
// actions
import { fetchHotelInfo } from "@/api/services/advertisement/fetchHotelInfo";
// others
import style from "./Home.module.scss";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHotelInfo());
  }, [dispatch]);

  return (
    <div className={style.wrapper}>
      <Slider slides={cityNowSlide} />
      <CapacityInfo />
      <Mission />
      <News />
      <ShowMockAPI />
    </div>
  );
};

export default Home;
