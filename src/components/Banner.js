import { useEffect, useRef } from "react";
import Typed from "typed.js";
import TechStcak from "./TechStack";
import HelloLanguageSwitcher from "./HelloLanguageSwitcher";

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
    <div className="flex justify-between items-center w-full h-[90vh]  bg-gray-100 ">
      <div className="flex flex-col-reverse gap-4 lg:gap-0 lg:flex-row justify-between items-center  mx-4 lg:mx-44 w-[90%] lg:w-full ">
        <div className="flex flex-col justify-between gap-5 items-center lg:items-start font-semibold ">
          <h1 className=" font-kalam">
            <HelloLanguageSwitcher />
          </h1>
          <h1 className="text-4xl lg:text-6xl  font-kalam">
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
              <button className="rounded-lg   bg-orange-500 text-white font-semibold h-10 w-28 text-center items-center ">
                Download CV
              </button>
            </div>
          </div>
          <div>
            <TechStcak />
          </div>
        </div>
        <div className="h-[280px] w-[280px] text-center  ">
          <img
            src="https://i.pinimg.com/originals/ef/d3/99/efd39933244be03953f3ab82a49c161a.jpg"
            alt="avatar_Image"
            className=" rounded-[100%] h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
