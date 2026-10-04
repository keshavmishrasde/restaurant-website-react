import React from "react";
import Menu_top from "./Menu_top.jsx";
import Menu_hero from "./Menu_hero.jsx";
import Menu_footer from "./Menu_footer.jsx";
import Welcome_top from "../welcome/Welcome_top.jsx";

const Menu = () => {
  return (
    <div className="menu">
      <Welcome_top />
      <Menu_top />
      <Menu_hero />
      <Menu_footer />
    </div>
  );
};

export default Menu;
