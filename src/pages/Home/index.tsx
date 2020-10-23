// libs
import React from "@/components/Home/components/SectionTitle/node_modules/@/components/CommonHeader/mains/Logo/node_modules/@/components/CommonFooter/components/BranchInfo/node_modules/react";
// components
import CapacityInfo from "./mains/CapacityInfo";
import Mission from "./mains/Mission";
import News from "./mains/News";
import ShowMockAPI from "../../components/Home/components/ShowMockAPI";
import CityNowSlide from "./mains/CityNowSlide";
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
