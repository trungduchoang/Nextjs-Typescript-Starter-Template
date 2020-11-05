// libs
import React from "react";
import Image from "next/image";
// others
import { ROUTES } from "@/constants";

const Logo = () => (
  <a href={ROUTES.HOME}>
    <Image src="/images/logo.webp" alt="CityNow Home" width={128} height={33} />
  </a>
);

export default Logo;
