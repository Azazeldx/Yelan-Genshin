import React, { useState } from "react";
import "./service.css";
import Starconch from "../../assets/Starconch.svg";
import Varunada from "../../assets/Varunada-Lazurite-Sliver.svg";
import Insignia from "../../assets/Recruit's-Insignia.svg";
import RunicFang from "../../assets/Runic-Fang.svg";
import VarunadaFrag from "../../assets/Varunada-Lazurite-Fragment.svg";
import SergeantInsignia from "../../assets/Sergeant's-Insignia.svg";
import VarunadaLazurite from "../../assets/Varunada-Lazurite-Chunk.svg";
import LieutenantInsignia from "../../assets/Lieutenant's-Insignia.svg";
import heroswit from "../../assets/hero's-wit.svg";
import Mora from "../../assets/Mora.svg";
import TeachingsofProsperity from "../../assets/Teachings-of-Prosperity.svg";
import GuidetoProsperity from "../../assets/Guide-to-Prosperity.svg";
import PhilosophiesofProsperity from "../../assets/Philosophies-of-Prosperity.svg";
import GildedScale from "../../assets/Gilded-Scale.svg";
import crownofinsight from "../../assets/crown-of-insight.svg";
import AquaSimulacra from "../../assets/Aqua-Simulacra.svg";
import PolarStar from "../../assets/Polar-Star.svg";
import ThunderingPulse from "../../assets/Thundering-Pulse.svg";
import TheStringless from "../../assets/The Stringless.svg";
import FavoniusWarbow from "../../assets/Favonius-Warbow.svg";
import ElegyfortheEnd from "../../assets/Elegy-for-the-End.svg";
import SkywardHarp from "../../assets/Skyward-Harp.svg";
import MouunsMoon from "../../assets/Mouun's-Moon.svg";
import SacrificialBow from "../../assets/Sacrificial-Bow.svg";

const Service = () => {
  const [modalOpened, setModalOpened] = useState({ isOpened: false, selectedModal: null });

  const handleModalOpen = () => {};

  const data = [
    {
      title: "Varunada",
      Image: Varunada,
      className: "Rare",
      Desc: "Varunada Lazurite Sliver ×1",
    },
    {
      title: "Starconch",
      Image: Starconch,
      className: "Common",
      Desc: "Starconch ×168",
    },
    {
      title: "Insignia",
      Image: Insignia,
      className: "Common",
      Desc: "Recruit's-Insignia ×18",
    },
    {
      title: "VarunadaFrag",
      Image: VarunadaFrag,
      className: "MoreRare",
      Desc: "Varunada Lazurite Fragment ×9",
    },
    {
      title: "RunicFang",
      Image: RunicFang,
      className: "purple",
      Desc: "Runic Fang ×46",
    },
    {
      title: "SergeantInsignia",
      Image: SergeantInsignia,
      className: "Rare",
      Desc: "Sergeant's Insignia ×30",
    },
    {
      title: "VarunadaLazurite",
      Image: VarunadaLazurite,
      className: "purple",
      Desc: "Varunada Lazurite Chunk ×9",
    },
    {
      title: "LieutenantInsignia",
      Image: LieutenantInsignia,
      className: "MoreRare",
      Desc: "Lieutenant's Insignia ×36",
    },
    {
      title: "heroswit",
      Image: heroswit,
      className: "purple",
      Desc: "hero's wit ×419",
    },
    {
      title: "mora",
      Image: Mora,
      className: "MoreRare",
      Desc: "Mora ×2,794,405",
    },
  ];

  const Talent = [
    {
      title: "TeachingsofProsperity",
      Image: TeachingsofProsperity,
      className: "Rare",
      Desc: "Teachings of Prosperity ×9",
    },
    {
      title: "GuidetoProsperity",
      Image: GuidetoProsperity,
      className: "MoreRare",
      Desc: "Guide to Prosperity ×63",
    },
    {
      title: "PhilosophiesofProsperity",
      Image: PhilosophiesofProsperity,
      className: "purple",
      Desc: "Philosophies of Prosperity ×114",
    },
    {
      title: "GildedScale",
      Image: GildedScale,
      className: "Gold",
      Desc: "Gilded Scale ×18",
    },
    {
      title: "crownofinsight",
      Image: crownofinsight,
      className: "Gold",
      Desc: "crown of insight ×3",
    },
    {
      title: "Insignia",
      Image: Insignia,
      className: "Common",
      Desc: "Recruit's-Insignia ×18",
    },
    {
      title: "SergeantInsignia",
      Image: SergeantInsignia,
      className: "Rare",
      Desc: "Sergeant's Insignia ×30",
    },
    {
      title: "LieutenantInsignia",
      Image: LieutenantInsignia,
      className: "MoreRare",
      Desc: "Lieutenant's Insignia ×36",
    },
    {
      title: "mora",
      Image: Mora,
      className: "MoreRare",
      Desc: "Mora ×4,950,000",
    },
  ];

  const Weapon = [
    {
      title: "Aqua Simulacra",
      Image: AquaSimulacra,
      className: "Gold",
      Desc: "Aqua Simulacra",
    },
    {
      title: "Polar Star",
      Image: PolarStar,
      className: "Gold",
      Desc: "Polar Star",
    },
    {
      title: "Thundering Pulse",
      Image: ThunderingPulse,
      className: "Gold",
      Desc: "Thundering Pulse",
    },
    {
      title: "The Stringless",
      Image: TheStringless,
      className: "purple",
      Desc: "The Stringless",
    },
    {
      title: "Favonius Warbow",
      Image: FavoniusWarbow,
      className: "purple",
      Desc: "Favonius Warbow",
    },
    {
      title: "Elegy for the End",
      Image: ElegyfortheEnd,
      className: "Gold",
      Desc: "Elegy for the End",
    },
    {
      title: "Skyward Harp",
      Image: SkywardHarp,
      className: "Gold",
      Desc: "Skyward Harp",
    },
    {
      title: "Mouuns Moon",
      Image: MouunsMoon,
      className: "purple",
      Desc: "Mouun's Moon",
    },
    {
      title: "SacrificialBow",
      Image: SacrificialBow,
      className: "purple",
      Desc: "Sacrificial Bow",
    },
  ];

  return (
    <section id="services">
      <h5>Yelan</h5>
      <h2>Material Ascension, Talent And Weapon</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Yelan Ascension Materials</h3>
          </div>

          <ul className="service__list">
            {data.map((item) => (
              <li className={item.className}>
                <img src={item.Image} alt="Skill Image" className="service__list-icon" style={{ width: "2rem", height: "2rem" }} />
                <p>{item.title}</p>
              </li>
            ))}
          </ul>
        </article>
        {/* End of Ascend Material */}
        <article className="service">
          <div className="service__head">
            <h3>Yelan Talent Materials</h3>
          </div>

          <ul className="service__list">
            {Talent.map((item) => (
              <li className={item.className}>
                <img src={item.Image} alt="Skill Image" className="service__list-icon" style={{ width: "2rem", height: "2rem" }} />
                <p>{item.title}</p>
              </li>
            ))}
          </ul>
        </article>
        {/* End of Talent Material */}
        <article className="service">
          <div className="service__head">
            <h3>Yelan Weapon Recommendation</h3>
          </div>

          <ul className="service__list">
            {Weapon.map((item) => (
              <li className={item.className}>
                <img src={item.Image} alt="Skill Image" className="service__list-icon" style={{ width: "2rem", height: "2rem" }} />
                <p>{item.title}</p>
              </li>
            ))}
          </ul>
        </article>
        {/* End of Weapon Recommendation */}
      </div>
    </section>
  );
};

export default Service;
