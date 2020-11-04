// libs
import React from "react";
import Image from "next/image";
// others
import { ROUTES } from "@/constants";
import style from "./Logo.module.scss";

const Logo = () => (
  <a href={ROUTES.HOME}>
    <Image
      src="http://citynow.jp/citynow/images/logo/logoasia.png"
      alt="CityNow Home"
      className={style.wrapper}
      width="150"
      height="30"
    />
  </a>
);

export default Logo;
