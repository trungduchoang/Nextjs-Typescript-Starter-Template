// libs
import React from "react";
// components
import Slider from "@/components/Slider";
import CapacityInfo from "./mains/CapacityInfo";
import Mission from "./mains/Mission";
import News from "./mains/News";
import ShowMockAPI from "./components/ShowMockAPI";
// datasource, mocks
import { cityNowSlide } from "@/mocks/Home/cityNowSlide";
// actions
import { fetchHotelInfo } from "@/services/api/advertisement/fetchHotelInfo";
// others
import style from "./Home.module.scss";

export async function getStaticProps() {
  const mockResponse = await fetchHotelInfo();
  return { props: { mockResponse } };
}

const Home = (props) => (
  <div className={style.wrapper}>
    <Slider slides={cityNowSlide} />
    <CapacityInfo />
    <Mission />
    <News />
    <ShowMockAPI mockResponse={props.mockResponse} />
  </div>
);

export default Home;
