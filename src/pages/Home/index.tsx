// libs
import React from "react";
// components
import CapacityInfo from "@/components/Home/mains/CapacityInfo";
import Mission from "@/components/Home/mains/Mission";
import News from "@/components/Home/mains/News";
import CityNowSlide from "@/components/Home/mains/CityNowSlide";
import ShowMockAPI from "@/components/Home/components/ShowMockAPI";
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
