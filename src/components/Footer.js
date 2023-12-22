import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaHeart } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import footerImg from "../Assets/footer3.png";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 lg:gap-0 h-auto lg:h-[40vh] mb-0 w-full bg-white">
      <div className="w-[80%] gap-2">
        <div className="flex gap-4 lg:gap:0 flex-col-reverse lg:flex-row  justify-between items-center w-full">
          <div className="flex flex-col items-center lg:items-start">
            <p className="flex items-baseline font-semibold text-lg text-slate-700">
              No&nbsp;
              <span>
                <FaRegCopyright />
              </span>
              &nbsp; Copyright Issues.
            </p>
            <p className="text-slate-600">Feel free to copy.</p>
            <p className="text-slate-600">If you need any help, ping me !</p>
          </div>
          <div className="font-sacramento text-4xl lg:text-6xl flex justify-center items-center align-baseline">
            Nitesh Kumar Jha
          </div>
          <div className="flex flex-col  gap-1">
            <p className="text-slate-600 text-lg">You can find me everywhere</p>
            <div className="flex justify-center items-center w-full">
              <ul className="w-full flex justify-evenly text-3xl lg:text-5xl text-slate-600  ">
                <li>
                  <FaLinkedin className="hover:text-[#287bbc]" />
                </li>
                <li>
                  <FaGithub className="hover:text-black" />
                </li>
                <li>
                  <FaInstagram className="hover:text-[#bc2a8d]" />
                </li>
                <li className="hover:text-[#e44d26]">
                  <SiGmail />
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center  ">
          <p className="flex text-xl items-baseline font-semibold text-slate-700">
            Made with&nbsp;
            <span className=" ">
              <FaHeart className="text-red-500" />
            </span>
            &nbsp; in India
          </p>
        </div>
      </div>
      <div>
        <img src={footerImg} alt="footerimage" className="w-full" />
      </div>
    </div>
  );
};

export default Footer;
