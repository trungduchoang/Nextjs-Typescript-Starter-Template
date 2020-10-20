// libs
import React from "react";
// dataSources, mocks
import { navigationItems } from "../../dataSources/navigationItems";
// components
import Menu from "@/libs/Menu";

const GlobalMenu = () => <Menu dataSource={navigationItems} />;

export default GlobalMenu;
