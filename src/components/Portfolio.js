import React from "react";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  const portfolioData = {
    portfolioCards: [
      {
        id: 1,
        name: "NetflixGPT",
        description:
          "NetflixGpt, a cutting edge Netflix clone featuring GPT-powered search, a secure Firebase backend, and curated movie categories. Elevate your entertainment experience with the perfect blend of innovation and seamless functionality. ",
        imageUrl:
          "https://res.cloudinary.com/do9s5cxxl/image/upload/v1704211290/Portfolio/NetflixGPT_rbueuo.png",
        techStack: ["React", "Firebase"],
        DemoLink: [
          "https://github.com/niteshnkj/netflixGPT",
          "https://netflixgpt-ecb74.web.app/",
        ],
      },
      {
        id: 2,
        name: "Vuwalens",
        description:
          "A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals.",
        imageUrl:
          "https://res.cloudinary.com/do9s5cxxl/image/upload/v1704227793/Portfolio/Fitness-App_eh0qcb.png",
        techStack: ["React", "Css"],
        DemoLink: [
          "https://vuwalens.netlify.app/",
          "https://github.com/niteshnkj/fitnessapp",
        ],
      },
      {
        id: 3,
        name: "Nitesh.Dev",
        description:
          "Welcome to my digital showcase! Explore my creative journey and diverse projects, showcasing passion, innovation, and a commitment to excellence.",
        imageUrl:
          "https://res.cloudinary.com/do9s5cxxl/image/upload/v1704229728/Portfolio/portfolio.png",
        techStack: ["React", "Tailwind"],
        DemoLink: ["https://demo2a.com", "https://demo2b.com"],
      },

      {
        id: 4,
        name: "Swaad Safari (Comming Soon)",
        description:
          "Your culinary journey begins here. Explore a world of flavors, delivered to your doorstep with our food app.",
        imageUrl:
          "https://res.cloudinary.com/do9s5cxxl/image/upload/v1704228707/Portfolio/upcoming_gqfjzf.png",
        techStack: ["React", "Redux"],
        DemoLink: ["https://demo4a.com", "https://demo4b.com"],
      },
    ],
  };

  return (
    <div
      className="flex flex-col justify-center items-center text-center w-full h-auto  bg-gray-100"
      id="portfolio"
    >
      <div className="my-8">
        <h1 className="text-orange-400 text-2xl font-bold ">MY PORTFOLIO</h1>
        <div className="flex gap-2">
          <h2 className="font-semibold text-3xl ">
            Each project is a unique piece of development
          </h2>
          <div>
            <svg
              width="36px"
              height="36px"
              viewBox="0 0 1024.00 1024.00"
              className="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              stroke="#000000"
              strokeWidth="0.01024"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="6.144"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M854.7 828.1H169.9c-38.9 0-70.5-31.6-70.5-70.5v-499c0-38.9 31.6-70.5 70.5-70.5h684.7c38.9 0 70.5 31.6 70.5 70.5v499c0.1 38.9-31.5 70.5-70.4 70.5z"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="M885.2 258.1c0-16.5-13.5-30-30-30H169.4c-16.5 0-30 13.5-30 30v120.1h745.7V258.1z m-649.7 96.1c-28.2 0-51.2-23-51.2-51.2s23-51.2 51.2-51.2 51.2 23 51.2 51.2-22.9 51.2-51.2 51.2z m281.8-6.8H374.7c-24.1 0-43.7-19.6-43.7-43.7s19.6-43.7 43.7-43.7h142.6c24.1 0 43.7 19.6 43.7 43.7s-19.6 43.7-43.7 43.7z"
                  fill="#E6E6E6"
                ></path>
                <path
                  d="M213.3 752.8h298.8c5.5 0 10-4.5 10-10s-4.5-10-10-10H213.3c-8.5 0-15.4-6.9-15.4-15.4V524.6c0-5.5-4.5-10-10-10s-10 4.5-10 10v192.9c0.1 19.4 15.9 35.3 35.4 35.3z"
                  fill="#06F3FF"
                ></path>
                <path
                  d="M235.5 271.8c-17.2 0-31.2 14-31.2 31.2s14 31.2 31.2 31.2 31.2-14 31.2-31.2-14-31.2-31.2-31.2z"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="M235.5 251.8c-28.2 0-51.2 23-51.2 51.2s23 51.2 51.2 51.2 51.2-23 51.2-51.2-22.9-51.2-51.2-51.2z m0 82.4c-17.2 0-31.2-14-31.2-31.2s14-31.2 31.2-31.2 31.2 14 31.2 31.2-14 31.2-31.2 31.2z"
                  fill="#686a6e"
                ></path>
                <path
                  d="M517.3 280.1H374.7c-13 0-23.7 10.6-23.7 23.7s10.6 23.7 23.7 23.7h142.6c13 0 23.7-10.6 23.7-23.7s-10.7-23.7-23.7-23.7z"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="M517.3 260.1H374.7c-24.1 0-43.7 19.6-43.7 43.7s19.6 43.7 43.7 43.7h142.6c24.1 0 43.7-19.6 43.7-43.7s-19.6-43.7-43.7-43.7z m0 67.3H374.7c-13 0-23.7-10.6-23.7-23.7s10.6-23.7 23.7-23.7h142.6c13 0 23.7 10.6 23.7 23.7s-10.7 23.7-23.7 23.7z"
                  fill="#686a6e"
                ></path>
                <path
                  d="M855.2 188.1H169.4c-38.6 0-70 31.4-70 70v500c0 38.6 31.4 70 70 70h685.7c38.6 0 70-31.4 70-70v-500c0.1-38.6-31.3-70-69.9-70z m30 570c0 16.5-13.5 30-30 30H169.4c-16.5 0-30-13.5-30-30V398.2h745.7v359.9z m0-379.9H139.5V258.1c0-16.5 13.5-30 30-30h685.7c16.5 0 30 13.5 30 30v120.1z"
                  fill="#686a6e"
                ></path>
                <path
                  d="M459.9 624.6l-114.3-45.3 114.3-43.7v-46.5L296.1 560v39.5l163.8 71.2zM568.7 454.8h-34.4L475.1 702h33.8zM747.9 560.3l-164-70.9v45.8l114.4 44.5-114.4 45v46.2l164-71.4z"
                  fill="#686a6e"
                ></path>
              </g>
            </svg>
          </div>
        </div>
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
