// libs
import React from "react";
import { Redirect } from "@/libs/components";
// others
import { ROUTES } from "@/constants";

const Home = () => <Redirect to={ROUTES.HOTEL_DETAIL} />;

export default Home;
