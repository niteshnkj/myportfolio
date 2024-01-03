import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
// import { DarkModeSwitch } from "react-toggle-dark-mode";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-center items-center w-full h-20 drop-shadow-lg shadow-xl font-semibold text-lg rounded sticky top-0 left-0 z-10 bg-white">
      <div className="flex justify-between items-end lg:items-center mx-6 lg:mx-24 w-full">
        <NavLink>
          <div
            className="hover:text-orange-400 font-extrabold text-3xl font-caveat hover:cursor-pointer "
            onClick={goTop}
          >
            Nitesh.Dev
          </div>
        </NavLink>

        {/* Hamburger icon for mobile screens */}
        <div className="lg:hidden cursor-pointer">
          {showMenu ? (
            <FaTimes onClick={closeMenu} size={24} />
          ) : (
            <FaBars onClick={toggleMenu} size={24} />
          )}
        </div>

       
        <div
          className={`lg:flex items-center justify-center gap-1 lg:gap-12 list-none ${
            showMenu
              ? "fixed font-jost flex flex-col right-0 top-[85px] bg-gray-400 bg-opacity-50 w-[90%] left-4 rounded-lg border-slate-400 border-2"
              : "hidden"
          }`}
        >
          <ul className="lg:flex items-center justify-center gap-12 list-none hover:cursor-pointer">
            <li className="hover:text-orange-400 decoration-4">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                exact
                activeClassName="active"
              >
                Home
              </Link>
            </li>
            <li className="hover:text-orange-400 decoration-4">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70} 
                duration={500}
                activeClassName="active"
              >
                About
              </Link>
            </li>
            <li className="hover:text-orange-400 decoration-4">
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70} 
                duration={500}
                activeClassName="active"
              >
                Portfolio
              </Link>
            </li>

            <li className="hover:text-orange-400 decoration-4">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70} 
                duration={500}
                activeClassName="active"
              >
                Lets Talk...
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
