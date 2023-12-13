import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">
        Genshin Impact
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skill</a>
        </li>
        <li>
          <a href="#services">Material</a>
        </li>
        <li>
          <a href="#portofolio">How To Use</a>
        </li>
        <li>
          <a href="#testimonial">Thoughts</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
        <a href="https://twitter.com">
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Hoyoverse. All rights reversed</small>
      </div>
    </footer>
  );
};

export default footer;
