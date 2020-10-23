// libs
import { NAV_ITEM } from "@/types/components/NavBar";
import React, { useState } from "@/components/Home/components/SectionTitle/node_modules/@/components/CommonHeader/mains/Logo/node_modules/@/components/CommonFooter/components/BranchInfo/node_modules/react";
// components
import NavBar from "./mains/NavBar";
import NavToggle from "./mains/NavToggle";

const Menu = ({ dataSource }: { dataSource: NAV_ITEM[] }) => {
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

export default Menu;
