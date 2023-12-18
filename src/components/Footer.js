import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaHeart } from "react-icons/fa";
import footerImg from "../Assets/ancientvaranashi.jpg";

const Footer = () => {
  return (
    <div className="px-60 pt-6">
      <div className="flex justify-between">
        <div>
          <p>copyright</p>
        </div>
        <div>signature</div>
        <div>
          <div>you can find me everywhere</div>
          <div>
            <ul className="flex">
              <li>
                <FaLinkedin />
              </li>
              <li>
                <FaGithub />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <SiGmail />
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center align-middle">
        <p className="flex">
          Made with &nbsp;
          <span className="">
            <FaHeart className="text-red-500" />
          </span>
          &nbsp; in India
        </p>
      </div>
      <div className="">
        <img src={footerImg} alt="footerimg" className="h-44 w-full" />
      </div>
    </div>
  );
};

export default Footer;
