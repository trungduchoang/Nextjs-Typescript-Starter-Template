// libs
import React, { useState } from "react";
import dynamic from "next/dynamic";
// hooks
import { useStore } from "@/hooks";
// others
import style from "./ShowMockAPI.module.scss";

const LazyComponent = dynamic(() => import("../LazyComponent"));

const ShowMockAPI = () => {
  const { pageProps } = useStore({ page: "Home" });
  const [isShow, setIsShow] = useState(false);

  return (
    <div className={style.wrapper}>
      <button
        type="button"
        onClick={() => {
          setIsShow((prevState) => !prevState);
        }}
      >
        API
      </button>
      {isShow && <LazyComponent pageProps={pageProps} />}
    </div>
  );
};

export default ShowMockAPI;
