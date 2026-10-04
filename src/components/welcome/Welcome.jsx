import React from "react";
import Welcome_top from "./Welcome_top";
import Welcome_hero from "./Welcome_hero";
import Welcome_footer from "./Welcome_footer";

const Welcome = () => {
  return (
    <div className="welcome">
      <Welcome_top />
      <Welcome_hero />
      <Welcome_footer />
    </div>
  );
};

export default Welcome;
