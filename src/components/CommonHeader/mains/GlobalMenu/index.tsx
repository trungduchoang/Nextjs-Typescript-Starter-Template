// libs
import React from "@/components/CommonFooter/components/BranchInfo/node_modules/react";
// dataSources, mocks
import { navigationItems } from "@/dataSources/CommonHeader";
// components
import Menu from "@/components/Menu";

const GlobalMenu = () => <Menu dataSource={navigationItems} />;

export default GlobalMenu;
