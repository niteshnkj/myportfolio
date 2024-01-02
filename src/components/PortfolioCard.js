// PortfolioCard.jsx

import React from "react";
import { RiGithubLine } from "react-icons/ri";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./portfolioCard.css";

const PortfolioCard = ({ cardData }) => {
  return (
    <div className="portfolio-card flex flex-col-reverse lg:flex-row lg:even:flex-row-reverse justify-between items-center w-[90%] lg:w-[80%] rounded-xl shadow-xl bg-white font-[500]">
      <div className="flex flex-col justify-center items-center gap-4 h-full w-[40%]">
        <h2 className="font-semibold text-xl">{cardData.name}</h2>
        <p className="font-poppins text-gray-500">{cardData.description}</p>
        <div className="flex justify-between gap-2">
          {cardData.techStack.map((tech, index) => (
            <p
              key={index}
              className="border shadow-xl font-poppins bg-white text-center rounded-md p-2"
            >
              {tech}
            </p>
          ))}
        </div>
        <div className="flex gap-4 h-12">
          <div className="flex">
            <p className="flex items-center font-poppins">
              Github
              <span>
                <a
                  href={cardData.DemoLink[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiGithubLine className="cursor-pointer text-base" />
                </a>
              </span>
            </p>
          </div>
          <div className="flex">
            <p className="font-poppins flex items-center">
              Live Demo
              <span>
                <a
                  href={cardData.DemoLink[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt className="cursor-pointer text-base" />
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="hover-container h-72 w-[60%] shadow-2xl my-8 mx-8">
        <div className="image-wrapper flex justify-center items-center rounded-xl overflow-hidden border-black border">
          <img
            src={cardData.imageUrl}
            alt="frontendimg"
            className="portfolio-image w-full h-full object-cover rounded-xl hover-upward"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
