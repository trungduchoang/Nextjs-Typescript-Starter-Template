// libs
import React from "react";
// dataSources, mocks
import { navigationItems } from "@/dataSources/CommonHeader";
// components
import { Menu } from "@/libs/components";

const GlobalMenu = () => <Menu dataSource={navigationItems} />;

export default GlobalMenu;
