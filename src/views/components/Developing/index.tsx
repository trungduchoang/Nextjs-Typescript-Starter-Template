// libs
import React from "react";
import { TabPane, Tabs } from "@/libs/components/Tabs";
// components
import GeneralInfo from "./mains/GeneralInfo";
import HotelSlider from "./mains/HotelSlides";
import SubDescription from "./mains/SubDescription";
import SocialServices from "./mains/SocialServices";
import ReviewArea from "./mains/ReviewArea";
import HotelAddress from "./mains/HotelAddress";
import GuestInformation from "./mains/GuestInformation";
import PriceInfo from "./mains/PriceInfo";
// others
import style from "./Developing.module.scss";

const Developing = () => (
  <div className={style.wrapper}>
    <GeneralInfo />
    <div className={style.mainWrapper}>
      <HotelSlider />
      <SubDescription />
      <div className={style.tabWrapper}>
        <Tabs defaultActiveTab={1}>
          <TabPane id={1} name="基本情報">
            <ReviewArea />
            <HotelAddress />
            <GuestInformation />
            <SocialServices />
          </TabPane>
          <TabPane id={2} name="料金・設備">
            <PriceInfo />
          </TabPane>
        </Tabs>
      </div>
    </div>
  </div>
);

export default Developing;
