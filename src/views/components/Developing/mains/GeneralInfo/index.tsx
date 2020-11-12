// libs
import React from "react";
import Image from "next/image";
import { HeartIcon } from "@/libs/icons";
import dayjs from "dayjs";
// hooks
import { useStore } from "@/hooks";
// others
import style from "./GeneralInfo.module.scss";

/**
 * GeneralInfo
 */
const GeneralInfo = () => {
  const {
    pageData: { hotelName, emptyUpDate, emptyUpTime },
  } = useStore({ page: "Developing" });

  return (
    <div className={style.wrapper}>
      <div className={style.stayLogo}>
        <Image
          src="https://www.linkpicture.com/q/topBlueSquare.png"
          width={36}
          height={36}
          alt="Happy hotel"
        />
      </div>
      <div className={style.info}>
        <div className={style.time}>
          <div>{dayjs(emptyUpDate, "YYYYMMDD").format("MM/DD")}</div>
          <div>
            {dayjs(`${emptyUpDate} ${emptyUpTime}`, "YYYYMMDD HHmm").format(
              "HH:mm"
            )}
          </div>
        </div>
        <h1 className={style.hotelName}>{hotelName}</h1>
      </div>
      <div className={style.favoriteIcon}>
        <HeartIcon size={28} />
      </div>
    </div>
  );
};

export default GeneralInfo;
