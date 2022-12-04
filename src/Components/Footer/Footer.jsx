import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="Footer-container" id="footer">
      <hr />
      <div className="back-home">
        <span>
          <Link to="home" smooth={true}>
            back to home
          </Link>
        </span>
      </div>

      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={LinkedIn} alt="" />
        </div>

        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
        <div className="cright">
          <span>©2022 Developed by ALHAD.T.M</span>
        </div>
      </div>
      <div className="blur blur-footer-1"></div>
      <div className="blur blur-footer-2"></div>
    </div>
  );
};

export default Footer;
