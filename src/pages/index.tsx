// libs
import React from "react";
// types
import { GET_STATIC_PROPS } from "@/types/common";
// api
import { fetchHotelDetail } from "@/api/hotel";
// components
import DevelopingLayout from "@/views/components/Developing";

export const getStaticProps:GET_STATIC_PROPS = async () => {
  const apiResponse = await fetchHotelDetail({
    payload: { hotel_id: "542711", sponsor_code: "1" },
  });

  return {
    props: {
      page: "Developing",
      apiResponse,
    },
  };
};

const Developing = () => <DevelopingLayout />;

export default Developing;
