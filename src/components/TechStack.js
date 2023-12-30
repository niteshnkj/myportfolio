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
          <div key={index} className=" group group-hover:hover:fill-orange-400 relative">
            {item.icon}
            <div className="absolute -top-6 w-full text-sm left-0 right-0 bg-white text-black text-center opacity-0 transition-opacity group-hover:opacity-100">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
