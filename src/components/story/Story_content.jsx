import React from "react";
import Ourpicture from "../../assets/ourpicture.png";
import { ArrowRight } from "lucide-react";
import "./Story.css";

const Story_content = () => {
  return (
    <div className="story_content">
      <div className="story_content_image">
        <img src={Ourpicture} alt="Our Picture" />
      </div>
      <div className="story_content_text">
        <h3>OUR STORY</h3>
        <h2>A small Kitchen</h2>
        <h2>An Open-Hearted Table</h2>
        <p>
          Ember & Olive began with a simple wish: to make the kind of place we’d
          want at the end of our own street. Somewhere unhurried, full of
          warmth, with food worth coming back for.
        </p>
        <p>
          Our chef, Keshav , cooks with the seasons and a little instinct. Our
          host, Her , believes the best hospitality feels like friendship.
          Together, we’ve made a home for long dinners and everyday
          celebrations.
        </p>
        <h1>Keshav & Her</h1>
        <h5>
          A little more about us <ArrowRight />
        </h5>
      </div>
    </div>
  );
};

export default Story_content;
