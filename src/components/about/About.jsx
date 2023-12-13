import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import HYDRO from "../../assets/cco5k8t01.svg";
import { GiDualityMask } from "react-icons/gi";
import { HiBriefcase } from "react-icons/hi";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <img src={HYDRO} alt="About Image" className="about__icon" style={{ width: "2rem", height: "auto", margin: "auto", marginBottom: "1.4rem" }} />
              <h5>Hydro</h5>
              <small>Playable Hydro Character In Liyue</small>
            </article>
            <article className="about__card">
              {/* <img src={HYDRO} alt="About Image" /> */}
              <HiBriefcase className="about__icon" />
              <h5>Ministry</h5>
              <small>works for the Ministry of Civil Affair</small>
            </article>
            <article className="about__card">
              {/* <img src={HYDRO} alt="About Image" /> */}
              <GiDualityMask className="about__icon" />
              <h5>mysterious</h5>
              <small>Yelan is said to be quite secretive and mysterious</small>
            </article>
          </div>
          <p>
            Yelan is said to be quite secretive and mysterious; while claiming to work for the Ministry of Civil Affairs, she's frequently absent from work most of the year. Despite this, Ningguang tolerates her general absence while Keqing
            appreciates her work, although the latter wonders as to where she gets her intelligence from. She employs psychological tactics to catch her targets and get all the information she needs from them.{" "}
          </p>

          <a href="#contact" className="btn btn-primary">
            More Lore
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
