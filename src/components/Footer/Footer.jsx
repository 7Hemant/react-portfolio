import React from "react";
import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="icons">
        <FaFacebookSquare className="icon" />
        <GrInstagram className="icon" />
        <FaTwitter className="icon" />
        <FaLinkedin className="icon" />
      </div>
      <p>Copyright ©2022 All rights reserved</p>
    </footer>
  );
};

export default Footer;
