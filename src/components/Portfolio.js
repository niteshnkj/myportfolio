import React from "react";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <div className="min-w-full h-44 px-60 pt-6  bg-gray-200 shadow-lg rounded-lg ">
      <div>
        <h1 className="text-orange-400 text-2xl font-bold">MY PORTFOLIO</h1>
        <h2 className="font-semibold text-3xl">
          SUBHEADING Lorem ipsum dolor sit amet consectetur adipisicing elit.🧩
        </h2>
      </div>
      <div>
        <PortfolioCard />
      </div>
    </div>
  );
};

export default Portfolio;
