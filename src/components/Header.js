import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

const Header = () => {
  const el = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
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
    //logic fr menu items in mobile devices
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-20 drop-shadow-lg shadow-xl font-semibold text-lg rounded sticky top-0 left-0 z-10 bg-white ">
      <div className="flex justify-between items-center mx-24 w-full ">
        <div className="hover:text-orange-400  font-extrabold text-3xl font-caveat hover:cursor-pointer">
          Nitesh.Dev
        </div>
        <ul className="flex items-center justify-center gap-12 list-none hover:cursor-pointer">
          <li className="hover:text-orange-400 decoration-4 ">Home</li>
          <li className="hover:text-orange-400 decoration-4 ">About</li>
          <li className="hover:text-orange-400 decoration-4 ">Portfolio</li>
        </ul>
        <div className="rounded-lg bg-orange-500 text-white h-10 w-32 flex items-center justify-center">
          <button ref={el}></button>
        </div>
      </div>
    </div>
  );
};

export default Header;
