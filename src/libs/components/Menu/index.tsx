// libs
import React, { useState } from "react";
// types
import { NAV_ITEM } from "@/types/components/NavBar";
// components
import NavBar from "./mains/NavBar";
import NavToggle from "./mains/NavToggle";

type PROPS = {
  /** menuItems props */
  dataSource: NAV_ITEM[];
  /** position of Dropdown Menu */
  position?: "right" | "left"
};
/**
 * Menu
 */
export const Menu = ({ dataSource, position = "right" }: PROPS) => {
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
        position={position}
        toggleMenuVisible={toggleMenuVisible}
      />
    </div>
  );
};
