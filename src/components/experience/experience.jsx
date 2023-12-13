import React from "react";
import "./experience.css";
import BOW from "../../assets/panah.svg";
import LingeringLifeline from "../../assets/Lingering Lifeline.svg";
import DEPTH from "../../assets/Depth-Clarion Dice.svg";
import TURN from "../../assets/Turn Control.svg";
import ADAPT from "../../assets/Adapt With Ease.svg";
import CALCULATION from "../../assets/Necessary_Calculation.svg";
import ENTER from "../../assets/Enter the Plotters.svg";
import TAKING from "../../assets/Taking All Comers.svg";
import BEWARE from "../../assets/Beware-the-Trickster's-Dice.svg";
import BAIT from "../../assets/Bait-and-Switch.svg";
import WINNER from "../../assets/Winner-Takes-All.svg";

const experience = () => {
  return (
    <section id="experience">
      <h5>What Skill I Have</h5>
      <h2>My Skill</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h2>Talents</h2>
          <div className="experience__content">
            <article className="experience__details">
              <img src={BOW} alt="Skill Image" className="experience__icon" style={{ width: "2rem", height: "2rem" }} />
              <div>
                <h4>Stealthy Bowshot</h4>
                <small className="text-light">Normal Attack</small>
              </div>
            </article>
            <article className="experience__details">
              <img src={LingeringLifeline} alt="Skill Image" className="experience__icon" style={{ width: "2rem", height: "2rem" }} />
              <div>
                <h4>Lingering Lifeline</h4>
                <small className="text-light">Elemental Skill</small>
              </div>
            </article>
            <article className="experience__details">
              <img src={DEPTH} alt="Skill Image" className="experience__icon" style={{ width: "2rem", height: "2rem" }} />
              <div>
                <h4>Depth Clarion Dice</h4>
                <small className="text-light">Elemental Burst</small>
              </div>
            </article>
            <article className="experience__details">
              <img src={TURN} alt="Skill Image" className="experience__icon" style={{ width: "2rem", height: "2rem" }} />
              <div>
                <h4>Turn Control</h4>
                <small className="text-light">1st Ascension Passive</small>
              </div>
            </article>
            <article className="experience__details">
              <img src={ADAPT} alt="Skill Image" className="experience__icon" style={{ width: "2rem", height: "2rem" }} />
              <div>
                <h4>Adapt With Ease</h4>
                <small className="text-light">4th Ascension Passive</small>
              </div>
            </article>
            <article className="experience__details">
              <img src={CALCULATION} alt="Skill Image" className="experience__icon" style={{ width: "2rem", height: "2rem" }} />
              <div>
                <h4>Necessary Calculation</h4>
                <small className="text-light">Utility Passive</small>
              </div>
            </article>
          </div>
        </div>

        {/* END OF TALENTS */}
        <div className="experience__backend">
          <h2>Constellation</h2>
          <div className="experience__content">
            <article className="experience__details">
              <img src={ENTER} alt="Skill Image" className="experience__icon" style={{ width: "2rem", height: "2rem" }} />
              <div>
                <h4>Enter the Plotters</h4>
                <small className="text-light">Level 1</small>
              </div>
            </article>
            <article className="experience__details">
              <img src={TAKING} alt="Skill Image" className="experience__icon" style={{ width: "2rem", height: "2rem" }} />
              <div>
                <h4>Taking All Comers</h4>
                <small className="text-light">Level 2</small>
              </div>
            </article>
            <article className="experience__details">
              <img src={BEWARE} alt="Skill Image" className="experience__icon" style={{ width: "2rem", height: "2rem" }} />
              <div>
                <h4>Beware the Trickster's Dice</h4>
                <small className="text-light">Level 3</small>
              </div>
            </article>
            <article className="experience__details">
              <img src={BAIT} alt="Skill Image" className="experience__icon" style={{ width: "2rem", height: "2rem" }} />
              <div>
                <h4>Bait and Switch</h4>
                <small className="text-light">Level 4</small>
              </div>
            </article>
            <article className="experience__details">
              <img src={LingeringLifeline} alt="Skill Image" className="experience__icon" style={{ width: "2rem", height: "2rem" }} />
              <div>
                <h4>Dealer's Sleight</h4>
                <small className="text-light">Level 5</small>
              </div>
            </article>
            <article className="experience__details">
              <img src={WINNER} alt="Skill Image" className="experience__icon" style={{ width: "2rem", height: "2rem" }} />
              <div>
                <h4>Winner Takes All</h4>
                <small className="text-light">Level 6</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
