// libs
import React from "react";
import { BackgroundImage } from "@/libs/components";
// others
import style from "./AboutBanner.module.scss";

const AboutBanner = () => (
  <section className={style.wrapper}>
    <BackgroundImage
      src="http://citynow.vn/citynow/images/page/introduction/collaboration-community-cooperation-872955.jpg"
      className={style.background}
    >
      <div className={style.content}>
        <h1 className={style.header}>
          CUNG CẤP GIẢI PHÁP PHẦN MỀM <br /> DU HỌC VÀ GIỚI THIỆU VIỆC LÀM NHẬT
          BẢN
        </h1>
        <h2 className={style.subHeader}>
          Citynow - Nâng tầm Công nghệ thông tin giữa Việt Nam với Thế giới
        </h2>
        <p className={style.description}>
          Góp phần đưa Việt Nam hòa nhập Thế giới thông qua các dịch vụ giới
          thiệu việc làm, tư vấn du học và cung ứng lập trình viên, tạo ra nhiều
          cơ hội học tập và làm việc cho các bạn trẻ ở Việt Nam.
        </p>
      </div>
    </BackgroundImage>
  </section>
);

export default AboutBanner;
