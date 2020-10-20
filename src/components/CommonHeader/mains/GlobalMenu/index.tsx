// libs
import React from "react";
// dataSources, mocks
import { navigationItems } from "../../dataSources/navigationItems";
// components
import NavBar from "../../components/NavBar";

const GlobalMenu = () => <NavBar items={navigationItems} />;

export default GlobalMenu;
