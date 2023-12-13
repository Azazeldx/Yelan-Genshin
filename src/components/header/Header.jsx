import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me2.png";
import HeaderMedsos from "./headerMedsos";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 style={{ marginTop: "3rem" }}>Hello I'm</h5>
        <h1>Yelan Valley Orchid</h1>
        <h5 className="text_light">Hydro character in Genshin Impact</h5>
        <CTA />
        <HeaderMedsos />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
