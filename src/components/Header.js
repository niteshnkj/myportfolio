import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Header = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Let's Talk..."],
      startDelay: 300,
      typeSpeed: 300,
      backSpeed: 300,
      backDelay: 300,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "",
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex  justify-between w-full px-6 py-7 drop-shadow-lg shadow-xl font-semibold text-lg rounded sticky top-0 overflow-hidden z-10">
      <div className="hover:text-orange-400 pt-1 font-extrabold text-2xl">
        Nitesh.Dev
      </div>
      <ul className="flex  gap-8 list-none ">
        <li className="hover:text-orange-400 hover:underline decoration-4 pt-2">
          Home
        </li>
        <li className="hover:text-orange-400 hover:underline decoration-4 pt-2">
          About
        </li>
        <li className="hover:text-orange-400 hover:underline decoration-4 pt-2">
          Portfolio
        </li>
      </ul>
      <div className="rounded-lg shadow-xl shadow-orange-200  bg-orange-500 text-white h-10 w-28 text-center items-center ">
        <button className="pb-2" ref={el}></button>
      </div>
    </div>
  );
};

export default Header;
