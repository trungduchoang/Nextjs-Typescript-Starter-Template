// libs
import React, { useState } from "react";
// types
import { NAV_ITEM } from "@/types/components/NavBar";
// components
import NavBar from "./mains/NavBar";
import NavToggle from "./mains/NavToggle";

/**
 * Menu
 */
export const Menu = ({ dataSource }: { dataSource: NAV_ITEM[] }) => {
  const [visible, setVisible] = useState(false);

  const toggleMenuVisible = () => {
    setVisible((currentStatus) => !currentStatus);
  };

  return (
    <div>
      <NavToggle onClick={toggleMenuVisible} />
      <NavBar
        menuItems={dataSource}
        isVisibled={visible}
        toggleMenuVisible={toggleMenuVisible}
      />
    </div>
  );
};
