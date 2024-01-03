import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiFirebase } from "react-icons/si";

const TechStack = () => {
  const iconData = [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <BiLogoJavascript />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiFirebase />, name: "Firebase" },
  ];

  return (
    <div className="flex gap-1 lg:gap-6 justify-center items-center w-[100%]">
      <div className="flex justify-center items-center gap-1 lg:gap-4">
        <p className="lg:text-xl">Tech Stack</p>
        <p className="text-3xl items-center text-gray-500 pb-1">|</p>
      </div>
      <div className="flex relative text-2xl lg:text-4xl gap-0 lg:gap-5">
        {iconData.map((item, index) => (
          <div
            key={index}
            className="relative group hover:text-orange-400"
          >
            {item.icon}
            <div className="absolute m-0 -top-12 z-10 left-1/2 transform -translate-x-1/2 bg-orange-300 text-black text-center text-sm p-2 rounded-md  opacity-0 transition-opacity group-hover:opacity-100">
              {item.name}
              <div className="absolute w-0 h-0 m-0 border-t-8 border-l-4 border-r-4 border-l-transparent border-r-transparent border-solid border-orange-300 bg-transparent  bottom-[-8px] left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
