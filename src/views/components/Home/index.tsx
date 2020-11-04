// libs
import React from "react";
// components
import CapacityInfo from "./mains/CapacityInfo";
import Mission from "./mains/Mission";
import News from "./mains/News";
import CityNowSlide from "./mains/CityNowSlide";
import ShowMockAPI from "./components/ShowMockAPI";

const Home = () => (
  <>
    <CityNowSlide />
    <CapacityInfo />
    <Mission />
    <News />
    <ShowMockAPI />
  </>
);

export default Home;
