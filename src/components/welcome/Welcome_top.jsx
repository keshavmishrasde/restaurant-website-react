import { Link } from "react-router-dom";
import "./Welcome.css";
import WelcomeImg from "../../assets/welcome.png";
import { ArrowUpRight } from "lucide-react";

const Welcome_top = () => {
  return (
    <div className="welcome_top">
      <div className="welcome_top_left">
        <Link to="/" className="logo_link">
          <img src={WelcomeImg} alt="image" />
          <h2>Ember & Olive</h2>
        </Link>
      </div>
      <div className="welcome_top_right">
        <div className="welcome_top_right_navigatonlinks">
          <Link to="/menu">our menu</Link>
          <Link to="/story">our story</Link>
          <Link to="/gatherings">Gatherings</Link>
          <Link to="/visit">Visit Us</Link>
        </div>
        <div className="welcome_top_right_buttons">
          <button>
            Reserve A Table <ArrowUpRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome_top;
