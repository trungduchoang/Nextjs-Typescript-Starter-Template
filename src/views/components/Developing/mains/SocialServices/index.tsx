// libs
import React from "react";
import Image from "next/image";
// hooks
import { useStore } from "@/hooks";
// others
import style from "./SocialServices.module.scss";

/**
 * SocialServices
 */
const SocialServices = () => {
  const {
    pageData: { socialServices, message },
  } = useStore({ page: "Developing" });

  return (
    <div className={style.wrapper}>
      <div className={style.title}>オフィシャルSNS</div>
      <div className={style.servicesWrapper}>
        {socialServices.map(({ iconSrc, url }, i) => (
          <span className={style.service} key={i}>
            <Image
              src={iconSrc}
              width={50}
              height={50}
              alt="Social network"
              onClick={() => {
                window.open(url);
              }}
            />
          </span>
        ))}
      </div>
      <div className={style.message}>{message}</div>
    </div>
  );
};

export default SocialServices;
