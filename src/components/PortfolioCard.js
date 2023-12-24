import { RiGithubLine } from "react-icons/ri";
import { FaExternalLinkAlt } from "react-icons/fa";

const PortfolioCard = () => {
  return (
    <div className="flex justify-between items-center w-[80%]  rounded-xl shadow-xl bg-white font-[500]">
      <div className="flex flex-col justify-center items-center gap-4  h-full w-[40%]">
        <h2 className="font-semibold text-xl">NETFLIXGPT</h2>
        <p className="font-poppins text-gray-500">
          NetflixGpt, a cutting edge Netflix clone featuring GPT-powered search,
          a secure Firebase backend, and curated movie categories. Elevate your
          entertainment experience with the perfect blend of innovation and
          seamless functionality.
        </p>
        <div className="flex justify-between gap-2">
          <p className="border shadow-lg font-poppins ">React</p>
          <p className="border shadow-lg font-poppins">Firebase</p>
        </div>
        <div className="flex gap-2 h-12">
          <div className="flex">
            <p className="flext items-center font-poppins">
              Github
              <span>
                <RiGithubLine />
              </span>
            </p>
          </div>
          <div className="flex">
            <p className="font-poppins flex items-center">
              Live Demo
              <span>
                <FaExternalLinkAlt />
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="h-full w-[60%] rounded-xl shadow-2xl my-8 mx-8 ">
        <div className="flex justify-center items-center  ">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=1060&t=st=1702576648~exp=1702577248~hmac=aa956481af4cc08e1f7600cf78b778bd6d70f547a46ddf2dba61693207cf363c"
            alt="frontendimg"
            className="w-[90%] h-[90%] m-2"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
