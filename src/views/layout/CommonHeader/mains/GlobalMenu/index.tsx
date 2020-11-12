// libs
import React from "react";
import { Menu } from "@/libs/components/Menu";
// dataSources, mocks
import { navigationItems } from "@/dataSources/CommonHeader";

const GlobalMenu = () => <Menu dataSource={navigationItems} />;

export default GlobalMenu;
