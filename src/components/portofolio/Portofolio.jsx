import React from "react";
import "./portofolio.css";
import show1 from "../../assets/show.gif";
import show2 from "../../assets/show2.gif";
import show3 from "../../assets/show3.gif";
import show4 from "../../assets/show4.gif";
import show5 from "../../assets/show5.gif";
import show6 from "../../assets/show6.gif";
import jpg1 from "../../assets/show.jpg";
import jpg2 from "../../assets/show2.jpg";
import jpg3 from "../../assets/show3.jpg";
import jpg4 from "../../assets/show4.jpg";
import jpg5 from "../../assets/show5.jpg";
import jpg6 from "../../assets/show6.jpg";

const data = [
  {
    id: 1,
    image: show1,
    title: "Deal AoE DMG with Special Charged Attacks",
    desc: "When Yelan is off-field, she will enter a Breakthrough state. Breakthrough allows her to have a huge decrease in her Charged Attack cooldown and deal AoE Hydro DMG to enemies.",
    seeMore: "https://genshin.com",
  },
  {
    id: 2,
    image: show2,
    title: "On the Hunt with Elemental Skill",
    desc: "Yelan's Elemental Skill, Lingering Lifeline, lets Yelan speed up. Touching enemies will mark them Lifeline, which will explode and deal Hydro DMG once the skill has ended.",
    seeMore: "https://genshin.com",
  },
  {
    id: 3,
    image: show3,
    title: "Off-Field Hydro DMG with Elemental Burst",
    desc: "Yelan's Elemental Burst, Depth-Clarion Dice, functions similarly to Xingqiu's Elemental Burst. When used, Yelan deals Hydro DMG to opponents and summons a Dice that will attack enemies...",
    seeMore: "https://genshin.com",
  },
  {
    id: 4,
    image: show4,
    title: "Optimal Builds, Weapons, Artifacts",
    desc: "This Main DPS Yelan build focuses on maximizing her Skill, Burst, and Barbed Charge Attack DMG This can also be used as a Sub-DPS Artifact set if Yelan only needs around 140-160%...",
    seeMore: "https://genshin.com",
  },
  {
    id: 5,
    image: show5,
    title: "Deal More Damage With Combo Attack",
    desc: "Engages in continuous, swift movement, during which Yelan's resistance to interruption is increased During this time, Yelan can control this rapid movement and end it by using this Skill again.",
    seeMore: "https://genshin.com",
  },
  {
    id: 6,
    image: show6,
    title: "Yelan Best Team Comp",
    desc: "Yelan can act as an on-field or off-field unit in an Electro-Charged team comp. Electro-Charged teams still does very good damage in the current meta, given how much reactions are triggered...",
    seeMore: "https://genshin.com",
  },
];

const portofolio = () => {
  return (
    <section id="portofolio">
      <h5>More About</h5>
      <h2>How To Use Yelan</h2>

      <div className="container portofolio__container">
        {data.map(({ id, image, title, desc, seeMore }) => {
          return (
            <article key={id} className="portofolio__item">
              <div className="portofolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h2>{title}</h2>
              <p>{desc}</p>
              <a href={seeMore} className="btn" target="_blank">
                See More
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portofolio;
