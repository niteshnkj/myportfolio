import React from "react";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center w-full h-auto  bg-gray-100 ">
      <div className="my-8">
        <h1 className="text-orange-400 text-2xl font-bold ">MY PORTFOLIO</h1>
        <h2 className="font-semibold text-3xl ">
          Each project is a unique piece of development 🧩
        </h2>
      </div>
      <div className="w-[80%] flex flex-col items-center justify-center py-10 gap-10 rounded bg-gray-100 mb-20">
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </div>
  );
};

export default Portfolio;
