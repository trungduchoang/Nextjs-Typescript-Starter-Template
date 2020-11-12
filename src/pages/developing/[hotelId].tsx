// libs
import React from "react";
// types
import { GetStaticPaths } from "next";
import { GET_STATIC_PROPS } from "@/types/common";
// api
import { fetchHotelDetail } from "@/api/hotel";
// components
import DevelopingLayout from "@/views/components/Developing";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ["542711", "542713"].map((hotelId) => ({
    params: { hotelId },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GET_STATIC_PROPS = async ({ params }) => {
  const apiResponse = await fetchHotelDetail({
    payload: {
      hotel_id: params.hotelId,
      sponsor_code: "1",
    },
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
