import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaHeart } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 lg:gap-0 h-auto lg:h-[40vh] mb-0 w-full bg-white">
      <div className="w-[80%] gap-2">
        <div className="flex gap-4 lg:gap:0 flex-col-reverse lg:flex-row justify-between items-center w-full">
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
          <div className="flex flex-col gap-1">
            <p className="text-slate-600 text-lg">You can find me everywhere</p>
            <div className="flex justify-center items-center w-full">
              <ul className="w-full flex justify-evenly text-3xl lg:text-5xl text-slate-600  ">
                <li>
                  <a
                    href="https://www.linkedin.com/in/nitesh-kumar-j-0347b0b7/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="hover:text-[#287bbc]" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/niteshnkj"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="hover:fill-white hover:bg-black hover:rounded-full m-0 hover:border-white" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/nitesh.nkj"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="hover:text-[#bc2a8d]" />
                  </a>
                </li>
                <li>
                  <a href="mailto:niteshkrjha.nkj@gmail.com">
                    <SiGmail className="hover:text-[#e44d26]" />
                  </a>
                </li>
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
        <img
          src="https://res.cloudinary.com/do9s5cxxl/image/upload/v1704235393/Portfolio/footer3_a7jtfc.png"
          alt="footerimage"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Footer;
