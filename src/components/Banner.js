import { useEffect, useRef } from "react";
import Typed from "typed.js";
import TechStak from "./TechStak";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Nitesh Kumar Jha .",
        "a Frontend Developer .",
        "a Proud Indian .",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 120,
      backDelay: 120,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-wrap justify-between  px-60 pt-6 bg-gray-100   ">
      <div className="font-semibold col-span-2">
        <h1 className="text-6xl mt-2">Hello👋🏻 </h1>
        <h1 className="text-6xl mt-2">
          I'm <span ref={el}></span>
        </h1>
        <p className="text-xl mt-2 text-gray-400">
          A passionate Frontend React Developer based in Madhubani, Bihar. 📍
        </p>
        <div className="flex gap-6 mt-2">
          {/* <div>
            <button className="rounded-lg shadow-xl shadow-orange-200  bg-orange-500 text-white h-10 w-28 text-center items-center pt-1">
              Hire Me
            </button>
          </div> */}
          <div>
            <button className="rounded-lg shadow-xl shadow-orange-100  bg-orange-500 text-white font-semibold h-10 w-28 text-center items-center pt-1">
              Download CV
            </button>
          </div>
        </div>
        <div>
          <TechStak />
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
  );
};

export default Banner;
