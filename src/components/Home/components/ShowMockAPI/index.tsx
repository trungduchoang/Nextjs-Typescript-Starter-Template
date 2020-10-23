// libs
import React, { useState } from "@/components/CommonHeader/mains/Logo/node_modules/@/components/CommonFooter/components/BranchInfo/node_modules/react";
import classNames from "classnames";
// hooks
import { useStore } from "@/hooks";
// others
import style from "./ShowMockAPI.module.scss";

const ShowMockAPI = ({ mockResponse }: { mockResponse: Object }) => {
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
      <div className={classNames(style.content, { [style.isShow]: isShow })}>
        <p>Redux:</p>
        <pre>
          <code>{JSON.stringify(hotelInfo, null, 2)}</code>
        </pre>
        <p>Services API response:</p>
        <pre>
          <code>{JSON.stringify(mockResponse, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
};

export default ShowMockAPI;
