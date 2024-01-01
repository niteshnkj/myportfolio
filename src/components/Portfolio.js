import React from "react";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  const portfolioData = {
    portfolioCards: [
      {
        id: 1,
        name: "NETFLIXGPT",
        description:
          "NetflixGpt, a cutting edge Netflix clone featuring GPT-powered search, a secure Firebase backend, and curated movie categories. Elevate your entertainment experience with the perfect blend of innovation and seamless functionality. ",
        imageUrl: "url1.jpg",
        techStack: ["React", "Firebase"],
        DemoLink: [
          "https://github.com/niteshnkj/netflixGPT",
          "https://netflixgpt-ecb74.web.app/",
        ],
      },
      {
        id: 2,
        name: "Card2",
        description: "Description for Card2 ka",
        imageUrl: "url2.jpg",
        techStack: ["Mobile App", "React Native"],
        DemoLink: ["https://demo2a.com", "https://demo2b.com"],
      },
      {
        id: 3,
        name: "Card3",
        description: "Description for Card3",
        imageUrl: "url3.jpg",
        techStack: ["Data Science", "Python"],
        DemoLink: ["https://demo3a.com", "https://demo3b.com"],
      },
      {
        id: 4,
        name: "Card4",
        description: "Description for Card4",
        imageUrl: "url4.jpg",
        techStack: ["UI/UX Design", "Figma"],
        DemoLink: ["https://demo4a.com", "https://demo4b.com"],
      },
    ],
  };

  return (
    <div className="flex flex-col justify-center items-center text-center w-full h-auto  bg-gray-100 ">
      <div className="my-8">
        <h1 className="text-orange-400 text-2xl font-bold ">MY PORTFOLIO</h1>
        <h2 className="font-semibold text-3xl ">
          Each project is a unique piece of development 🧩
        </h2>
      </div>
      <div className="w-[80%] flex flex-col items-center justify-center py-10 gap-20 rounded bg-gray-100 mb-20">
        {portfolioData.portfolioCards.map((card) => (
          <PortfolioCard key={card.id} cardData={card} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
