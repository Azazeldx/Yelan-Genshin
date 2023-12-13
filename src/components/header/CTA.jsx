import React from "react";
import CV from "../../assets/cv_Yelan.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Build List
      </a>
      <a href="#contact" className="btn btn-primary">
        See Data
      </a>
    </div>
  );
};

export default CTA;
