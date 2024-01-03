import { useEffect, useRef } from "react";
import Typed from "typed.js";
import TechStack from "./TechStack";
import HelloLanguageSwitcher from "./HelloLanguageSwitcher";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Nitesh Kumar Jha.",
        "a Frontend Developer.",
        "a Proud Indian.",
      ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 120,
      backDelay: 120,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex justify-between items-center w-full h-auto lg:h-[90vh]  bg-gray-100 ">
      <div className="flex flex-col-reverse gap-4 lg:gap-0 lg:flex-row justify-between items-center  mx-4 mt-4 lg:mx-44 w-[90%] lg:w-full ">
        <div className="flex flex-col justify-between gap-5 items-center lg:items-start font-semibold ">
          <h1 className=" font-kalam">
            <HelloLanguageSwitcher />
          </h1>
          <h1 className="text-2xl lg:text-6xl  font-kalam">
            I'm <span ref={el}></span>
          </h1>
          <p className="text-xl  text-gray-500">
            A passionate Frontend React Developer based in Madhubani, Bihar. 📍
          </p>
          <div className="flex gap-6 ">
            {/* <div>
            <button className="rounded-lg shadow-xl shadow-orange-200  bg-orange-500 text-white h-10 w-28 text-center items-center pt-1">
              Hire Me
            </button>
          </div> */}
            <div>
              <a
                href="https://drive.google.com/file/d/1h4njgqwk9PAzwuJX8YQdeJCfIlz4ip7H/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="rounded-lg bg-orange-500 text-white font-semibold h-10 w-28 text-center items-center ">
                  Download CV
                </button>
              </a>
            </div>
          </div>
          <div className="flex text-center justify-center gap-2 cursor-pointer text-4xl">
            <a
              href="https://www.linkedin.com/in/nitesh-kumar-j-0347b0b7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-[#287bbc]" />
            </a>
            <a
              href="https://github.com/niteshnkj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className=" hover:fill-white hover:bg-black hover:rounded-full hover:border-white" />
            </a>
          </div>
          <div>
            <TechStack />
          </div>
        </div>
        <div className="h-[30%] w-[30%] text-center  ">
          <img
            src="https://res.cloudinary.com/do9s5cxxl/image/upload/v1703925295/Portfolio/bannerimg.png"
            alt="avatar_Image"
            className=" rounded-[100%] h-full w-full shadow-2xl "
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
