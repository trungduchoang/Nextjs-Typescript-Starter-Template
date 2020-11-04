// libs
import React from "react";
import { BackgroundImage, SectionTitle } from "@/libs/components";
// others
import style from "./CompanyImages.module.scss";

const CompanyImages = () => (
  <section className={style.wrapper}>
    <SectionTitle title="GÓC ẢNH" />
    <BackgroundImage
      src="http://citynow.vn/citynow/images/page/introduction/T%E1%BA%ADp%20th%E1%BB%83%20nh%C3%A2n%20vi%C3%AAn%20c%C3%B4ng%20ty%20Citynow%20v%C3%A0%20%C4%91%E1%BB%91i%20t%C3%A1c%20Nh%E1%BA%ADt.jpg"
      className={style.background}
    />
  </section>
);

export default CompanyImages;
