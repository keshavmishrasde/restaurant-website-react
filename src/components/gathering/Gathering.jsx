import React from "react";

import { ArrowRight } from "lucide-react";
import "./Gathering.css";
import Welcome_top from "../welcome/Welcome_top.jsx";

const Gathering = () => {
  return (
    <>
      <Welcome_top />
      <div className="gathering">
        <h4>A REASON TO GATHER</h4>
        <h2>Your People.</h2>
        <h2>Our Table.</h2>
        <p>
          Birthdays, small celebrations, or just a good excuse. Bring your
          favourite people together over a generous sharing menu, made
          especially for your evening.
        </p>
        <h4>GROUP TABLES FOR 6–12 · PRIVATE DINING UP TO 24</h4>
        <button className="gathering-button">
          Plan A Gathering <ArrowRight />
        </button>
      </div>
    </>
  );
};

export default Gathering;
