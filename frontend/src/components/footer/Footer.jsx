import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { BiUserCircle } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { MdSend } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import Logo from "../../assets/logo.svg";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="fcontainer">
        <div className="container1">
          <Link to="/">
            <img className="img-foot-centr" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="container2">
          <ul className="no-bullets">
            <li>
              <BiUserCircle className="f_icon" />
              <span className="i-text">Agro-Buddy</span>
            </li>
            <li>
              <MdLocationOn className="f_icon" />
              <span className="i-text"> NIT Silchar</span>
            </li>
            <li>
              <BsFillTelephoneFill className="f_icon" />
              <span className="i-text">+91 6263 943 064</span>
            </li>
          </ul>
        </div>

        <div className="container3">
          <h2 className="h2">
            <span className="s_head">Social</span>
          </h2>
          <a href="/" className="footer_social_Logo">
            <FacebookIcon />
            <span className="i-text">Facebook</span>
          </a>
          <a href="/" className="footer_social_Logo" id="link_ln">
            <LinkedInIcon />
            <span className="i-text">Linkedln</span>
          </a>
          <a href="/" className="footer_social_Logo">
            <InstagramIcon className="foot_insta" />
            <span className="i-text">Instagram</span>
          </a>
        </div>
        <div className="container5">
          <p className="p2">All Rights Reserved @Agro-Buddy</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;