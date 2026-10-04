import React from "react";
import "./Welcome.css";
import restaurantImg from "../../assets/restaurant.png";
import { MapPin } from "lucide-react";

const Welcome_hero = () => {
  return (
    <div className="welcome_hero">
      <div className="welcome_hero_invitation">
        <div className="welcome_hero_invitation_headline">
          <h3> A little fire.</h3>
          <h3>A lot of soul.</h3>
        </div>
        <div className="welcome_hero_invitation_description">
          <p>
            Season-led plates, good wine, and the warmth of a table that feels
            like yours. Welcome to Ember & Olive.
          </p>
        </div>
        <div className="welcome_hero_invitation_actions">
          <button>Find Your Table</button>
          <button>Explore The Menu</button>
        </div>
        <div className="welcome_hero_invitation_location">
          <p>
            <MapPin /> A little corner of Stoke Newington, London
          </p>
        </div>
      </div>
      <div className="welcome_hero_potrait">
        <img src={restaurantImg} alt="image" />
      </div>
    </div>
  );
};

export default Welcome_hero;
