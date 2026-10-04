import React from "react";
import "./Welcome.css";
import { Sparkle } from "lucide-react";
const Welcome_footer = () => {
  return (
    <div className="welcome_footer">
      <div className="welcome_footer_essential">
        <h5>
          <Sparkle /> SEASONAL BY NATURE
        </h5>
      </div>
      <div className="welcome_footer_essential">
        <h5>
          <Sparkle /> COOKED OVER FIRE
        </h5>
      </div>
      <div className="welcome_footer_essential">
        <h5>
          <Sparkle /> INDEPENDENT IN SPIRIT
        </h5>
      </div>
      <div className="welcome_footer_essential">
        <h5>
          <Sparkle /> EVERYONE IS WELCOME
        </h5>
      </div>
    </div>
  );
};

export default Welcome_footer;
