// libs
import React from "react";
// types
import { GET_STATIC_PROPS } from "@/types/common";
// components
import HomeLayout from "@/views/components/Home";
// api
import { fetchHotelInfo } from "@/api/advertisement";

export async function getStaticProps(): Promise<GET_STATIC_PROPS> {
  const apiResponse = await fetchHotelInfo({ payload: { limit: "1" } });

  return {
    props: {
      page: "Home",
      apiResponse,
    },
  };
}

const Home = () => <HomeLayout />;

export default Home;
