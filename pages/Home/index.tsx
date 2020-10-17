// libs
import React from "react";
// hooks
import { useStore } from "@/hooks";
// others
import styles from "./hello-pages.module.scss";

const Home = () => {
  const { hotelInfo } = useStore(({ Home }) => Home.specialHotelReducer);

  return (
    <pre className={styles.hotelInfo}>
      <code>{JSON.stringify(hotelInfo, null, 2)}</code>
    </pre>
  );
};

export default Home;
