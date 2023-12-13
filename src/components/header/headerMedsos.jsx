import React from "react";
import { GiPerspectiveDiceSixFacesOne } from "react-icons/gi";
import { GiLightningBow } from "react-icons/gi";
import { GiStrikingClamps } from "react-icons/gi";

const headerMedsos = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank" rel="norefferer noopener">
        <GiPerspectiveDiceSixFacesOne />
      </a>
      <a href="https://github.com" target="_blank" rel="norefferer noopener">
        <GiLightningBow />
      </a>
      <a href="https://anievo.id" target="_blank" rel="norefferer noopener">
        <GiStrikingClamps />
      </a>
    </div>
  );
};

export default headerMedsos;
