// libs
import React, { useState } from "react";
import classNames from "classnames";
// hooks
import { useStore } from "@/hooks";
// others
import style from "./ShowMockAPI.module.scss";

const ShowMockAPI = () => {
  const { hotelInfo } = useStore(({ Home }) => Home.specialHotelReducer);
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
      <pre className={classNames(style.content, { [style.isShow]: isShow })}>
        <code>{JSON.stringify(hotelInfo.data, null, 2)}</code>
      </pre>
    </div>
  );
};

export default ShowMockAPI;
