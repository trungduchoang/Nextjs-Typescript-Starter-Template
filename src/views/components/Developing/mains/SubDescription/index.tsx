// libs
import React from "react";
import Image from "next/image";
// others
import style from "./SubDescription.module.scss";

/**
 * SubDescription
 */
const SubDescription = () => (
  <div className={style.wrapper}>
    <div className={style.inner}>
      <Image
        src="https://www.linkpicture.com/q/RedWith18.png"
        alt="icon"
        width={35}
        height={32}
      />
      <div className={style.tag}>
        <span>モック</span>
      </div>
      <div className={style.tag}>
        <span>モック</span>
      </div>
    </div>
  </div>
);

export default SubDescription;
