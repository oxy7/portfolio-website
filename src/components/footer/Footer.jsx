import React from "react";
import "./footer.css";
import { BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Okan Elagoz
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com" target="_blank">
          <BsInstagram />
        </a>
        <a href="https://Github.com" target="_blank">
          <FaGithub />
        </a>
        <a href="https://twitter.com" target="_blank">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Okan Elagoz. All Rights Reserved </small>
        <small>Credit for design: Egator </small>
      </div>
    </footer>
  );
};

export default Footer;
