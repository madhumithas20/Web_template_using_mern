import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { RiRedditLine } from "react-icons/ri";
import "./ShortCuts.css";

export default function ShortCuts() {
  let iconStyle = {
    fontSize: "30px",
  };
  return (
    <div className="shortcut-conts">
      <ul>
        <li>
          <a href="https://www.facebook.com" target="_blank" rel="n">
            <FaFacebookSquare style={iconStyle} className="icon-fb" />
          </a>
        </li>
        <li>
          <a href="https://web.whatsapp.com/" target="_blank">
            <BsWhatsapp style={iconStyle} className="icon-wa" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank">
            <FaInstagram style={iconStyle} className="icon-insta" />
          </a>
        </li>
        <li>
          <a href="https://www.reddit.com/" target="_blank">
            <RiRedditLine style={iconStyle} className="icon-reddit" />
          </a>
        </li>
      </ul>
    </div>
  );
}
