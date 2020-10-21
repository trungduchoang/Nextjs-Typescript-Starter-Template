// libs
import React from "react";
// components
import NavBar from "./mains/NavBar";
import NavToggle from "./mains/NavToggle";

const Menu = ({ dataSource }) => (
  <>
    <NavBar items={dataSource} />
    <NavToggle />
  </>
);

export default Menu;
