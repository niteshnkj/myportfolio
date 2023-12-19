import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
// import { TbBrandNextjs } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
const TechStak = () => {
  return (
    <div className="flex gap-6 justify-center items-center w-[100%]">
      <div className="flex justify-center items-center gap-4">
        <p className="text-xl ">Tech Stack</p>
        <p className="text-3xl items-center text-gray-500 pb-1">|</p>
      </div>
      <div className="flex text-4xl gap-5">
        <div className="hover:text-orange-400">
          <FaHtml5 />
        </div>
        <div className="hover:text-orange-400">
          <FaCss3Alt />
        </div>
        <div className="hover:text-orange-400">
          <SiTailwindcss />
        </div>
        <div className="hover:text-orange-400">
          <BiLogoJavascript />
        </div>
        <div className="hover:text-orange-400">
          <FaReact />
        </div>
        {/* <div className="hover:text-orange-400">
          <TbBrandNextjs />
        </div> */}
        <div className="hover:text-orange-400">
          <SiRedux />
        </div>
        <div className="hover:text-orange-400">
          <SiFirebase />
        </div>
      </div>
    </div>
  );
};

export default TechStak;
