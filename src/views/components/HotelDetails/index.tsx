// libs
import React from "react";
// components
import HotelSlide from "./mains/HotelSlide";
import TabbarInfo from "./mains/TabbarInfo";
import ReviewArea from "./mains/ReviewArea";
import HotelLocation from "./mains/HotelLocation";
import DetailedInformation from "./mains/DetailedInformation";
import GuestInformation from "./mains/GuestInformation";
import Footer from "./mains/Footer";
// others
import style from "./HotelDetailsLayout.module.scss";

const HotelDetailsLayout = () => (
  <div className={style.wrapper}>
    <div className={style.inner}>
      <HotelSlide />
      <TabbarInfo />
      <ReviewArea />
      <HotelLocation />
      <DetailedInformation />
      <GuestInformation />
      <Footer />
    </div>
  </div>
);

export default HotelDetailsLayout;
