import { RiGithubLine } from "react-icons/ri";
import { FaExternalLinkAlt } from "react-icons/fa";

const PortfolioCard = ({ cardData }) => {
  const handleMouseEnter = () => {
    window.scrollBy({
      top: -100, 
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row lg:even:flex-row-reverse justify-between items-center w-[90%] lg:w-[80%]  rounded-xl shadow-xl bg-white font-[500]">
      <div className="flex flex-col justify-center items-center gap-4  h-full w-[40%]">
        <h2 className="font-semibold text-xl">{cardData.name}</h2>
        <p className="font-poppins text-gray-500">{cardData.description}</p>
        <div className="flex justify-between gap-2">
          {cardData.techStack.map((tech, index) => (
            <p key={index} className="border shadow-xl font-poppins bg-white text-center rounded-md p-2">
              {tech}
            </p>
          ))}
        </div>
        <div className="flex gap-4 h-12">
          <div className="flex">
            <p className="flex items-center font-poppins">
              Github
              <span>
                <a href={cardData.DemoLink[0]} target="_blank" rel="noopener noreferrer">
                  <RiGithubLine className="cursor-pointer text-base" />
                </a>
              </span>
            </p>
          </div>
          <div className="flex">
            <p className="font-poppins flex items-center">
              Live Demo
              <span>
                <a href={cardData.DemoLink[1]} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="cursor-pointer text-base" />
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="h-full w-[60%] rounded-xl shadow-2xl my-8 mx-8 ">
        <div className="flex justify-center items-center rounded-xl  ">
          <img
            src={cardData.imageUrl}
            alt="frontendimg"
            className="w-full  h-[90%] rounded-xl"
            // onMouseEnter={handleMouseEnter}
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
