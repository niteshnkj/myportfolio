import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="flex justify-center items-center w-full h-20 drop-shadow-lg shadow-xl font-semibold text-lg rounded sticky top-0 left-0 z-10 bg-white">
      <div className="flex justify-between items-end lg:items-center mx-6 lg:mx-24 w-full">
        <div className="hover:text-orange-400 font-extrabold text-3xl font-caveat hover:cursor-pointer">
          Nitesh.Dev
        </div>

        {/* Hamburger icon for mobile screens */}
        <div className="lg:hidden cursor-pointer">
          {showMenu ? (
            <FaTimes onClick={closeMenu} size={24} />
          ) : (
            <FaBars onClick={toggleMenu} size={24} />
          )}
        </div>

        {/* Container for button and menu */}
        <div
          className={`lg:flex items-center justify-center gap-1 lg:gap-12 list-none ${
            showMenu
              ? "fixed font-jost flex flex-col right-0 top-[85px] bg-gray-400 bg-opacity-50 w-[90%] left-4 rounded-lg border-slate-400 border-2"
              : "hidden"
          }`}
        >
          {/* Responsive menu */}
          <ul className="lg:flex items-center justify-center gap-12 list-none ">
            <li className="hover:text-orange-400 decoration-4">
              <NavLink to={"/"} exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="hover:text-orange-400 decoration-4">
              <NavLink to={"/about"} activeClassName="active">
                About
              </NavLink>
            </li>
            <li className="hover:text-orange-400 decoration-4">
              <NavLink to={"portfolio"} activeClassName="active">
                Portfolio
              </NavLink>
            </li>

            <li className="hover:text-orange-400 decoration-4">
              <NavLink to={"/contact"} activeClassName="active"s>
                Lets Talk...
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
