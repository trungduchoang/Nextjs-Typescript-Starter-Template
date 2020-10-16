// libs
import React from "react";
// hooks
import { useStore } from "@/hooks";
// others
import styles from "./hello-pages.module.scss";

const HelloPage = () => {
  const { hotelInfo } = useStore(({ Home }) => Home.specialHotelReducer);
  console.log({ hotelInfo });

  return (
    <div>
      <hr />
      <p className={styles.justP}>Im a p</p>
    </div>
  );
};

export default HelloPage;
