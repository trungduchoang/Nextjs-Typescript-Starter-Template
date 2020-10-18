// libs
import React from "react";
// hooks
import { useStore } from "@/hooks";

const Home = () => {
  const { hotelInfo } = useStore(({ Home }) => Home.specialHotelReducer);

  return (
    <pre>
      <code>{JSON.stringify(hotelInfo, null, 2)}</code>
    </pre>
  );
};

export default Home;
