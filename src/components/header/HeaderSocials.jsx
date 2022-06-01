import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com" target="_blank">
        <FaGithub />
      </a>
      <a href="https://twitter.com" target="_blank">
        <BsTwitter />
      </a>
      <a href="https://instagram.com" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
