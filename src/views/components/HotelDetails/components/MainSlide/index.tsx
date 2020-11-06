// libs
import React from "react";
import Image from "next/image";
// others
import style from "./MainSlide.module.scss";

const MainSlide = () => (
  <div className={style.wrapper}>
    <Image
      src="https://blisssaigon.com/wp-content/uploads/2019/10/Untitled.jpg"
      alt="blisssaigon"
      width={320}
      height={275}
      layout="responsive"
    />
  </div>
);

export default MainSlide;
