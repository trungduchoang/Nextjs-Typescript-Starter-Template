// libs
import React from "react";
import { TabPane, Tabs } from "@/libs/components";
import dynamic from "next/dynamic";
// components
import GeneralInfo from "./mains/GeneralInfo";
import HotelSlider from "./mains/HotelSlides";
import SubDescription from "./mains/SubDescription";
// others
import style from "./Developing.module.scss";

const HotelEquipment = dynamic(() => import("./mains/HotelEquipment"));
const LazyPriceInfo = dynamic(() => import("./mains/PriceInfo"));

const Developing = () => (
  <div className={style.wrapper}>
    {/*
    <div className={style.mapWrapper}>
      <div className={style.mapInner}>
        <iframe
          title="happy hotel address"
          width="600"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=3%20Chome-37-25%20Mukojima%2C%20Sumida%20City%2C%20Tokyo%20131-0033%2C%20Japan&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
        />
      </div>
    </div> */}
    <GeneralInfo />
    <div className={style.mainWrapper}>
      <HotelSlider />
      <SubDescription />
      <div className={style.tabWrapper}>
        <Tabs defaultActiveTab={2}>
          <TabPane id={1} name="サンプル">
            <HotelEquipment />
          </TabPane>
          <TabPane id={2} name="サンプル 2">
            <LazyPriceInfo />
          </TabPane>
        </Tabs>
      </div>
    </div>
    {/* https://www.linkpicture.com/q/GgMap.webp */}
  </div>
);

export default Developing;
