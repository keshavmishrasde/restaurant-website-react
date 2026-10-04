import "./visit.css";
import Welcome_top from "../welcome/Welcome_top.jsx";
import Outdoor from "../../assets/outdoor.png";

const HOURS = [
  { days: "Wednesday–Thursday", time: "17:00–23:00" },
  { days: "Friday", time: "17:00–23:00" },
  { days: "Saturday", time: "12:00–23:00" },
  { days: "Sunday", time: "12:00–22:00" },
  { days: "Monday–Tuesday", time: "Resting the fire" },
];

export default function ComeOnOver({ imageSrc, imageAlt }) {
  return (
    <>
      <Welcome_top />
      <section className="come-on-over">
        <div className="info">
          <p className="eyebrow">Just around the corner</p>
          <h2>Come on over.</h2>

          <div className="info-grid">
            <div className="find-us">
              <h3>Find us</h3>
              <address>48 Stoke Newington Road, London, N16 0NB</address>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
              >
                Get directions ↗
              </a>
              <p>020 7946 0828</p>
              <a href="mailto:kmishra.business@gmail.com">
                kmishra.business@gmail.com
              </a>
            </div>

            <div className="hours">
              <h3>When the fire is lit</h3>
              {HOURS.map(({ days, time }) => (
                <div className="hours-row" key={days}>
                  <span>{days}</span>
                  <span>{time}</span>
                </div>
              ))}
              <p className="note">Sunday hunch, a little slower.</p>
            </div>
          </div>
        </div>

        <figure className="photo">
          <img src={Outdoor} alt={imageAlt} />
          <figcaption>Look for the glass door. We'll be here.</figcaption>
        </figure>
      </section>
    </>
  );
}
