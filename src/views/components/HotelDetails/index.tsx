// libs
import React from "react";
// components
import HotelSlide from "./mains/HotelSlide";
import TabbarInfo from "./mains/TabbarInfo";
import ReviewArea from "./mains/ReviewArea";
import HotelLocation from "./mains/HotelLocation";
import DetailedInformation from "./mains/DetailedInformation";
// others
import style from "./HotelDetailsLayout.module.scss";

const HotelDetailsLayout = () => (
  <div className={style.wrapper}>
    <div className={style.innder}>
      <HotelSlide />
      <TabbarInfo />
      <ReviewArea />
      <HotelLocation />
      <DetailedInformation />
    </div>
  </div>
);

export default HotelDetailsLayout;
