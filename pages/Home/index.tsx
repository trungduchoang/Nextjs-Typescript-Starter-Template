// libs
import React from "react";
import DocumentHead from "@/components/DocumentHead";
// hooks
import { useStore } from "@/hooks";
// others
import styles from "./hello-pages.module.scss";

const HelloPage = () => {
  const { hotelInfo } = useStore(({ Home }) => Home.specialHotelReducer);
  console.log({ hotelInfo });

  return (
    <div>
      <DocumentHead />
      <hr />
      <p className={styles.justP}>Im a p</p>
    </div>
  );
};

export default HelloPage;
