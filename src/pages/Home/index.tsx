// libs
import React from "react";
// components
import CapacityInfo from "@/views/pages/Home/mains/CapacityInfo";
import Mission from "@/views/pages/Home/mains/Mission";
import News from "@/views/pages/Home/mains/News";
import CityNowSlide from "@/views/pages/Home/mains/CityNowSlide";
import ShowMockAPI from "@/views/pages/Home/components/ShowMockAPI";
// actions
import { fetchHotelInfo } from "@/services/api/advertisement";
// others
import style from "./Home.module.scss";

export async function getStaticProps() {
  const mockResponse = await fetchHotelInfo();
  return { props: { mockResponse } };
}

const Home = (props: { mockResponse: Object }) => (
  <div className={style.wrapper}>
    <CityNowSlide />
    <CapacityInfo />
    <Mission />
    <News />
    <ShowMockAPI mockResponse={props.mockResponse} />
  </div>
);

export default Home;
