import React from "react";

const PortfolioCard = () => {
  const data = {
    id: 1,
    imagelink: "",
    projectheading: "NetflixGpt",
    projectdescription: "A netflix clone made with",
    techtack: ["React", "Redux", "Tailwind", "Firebase"],
    githubLink: "",
    deploylink: "https://netflixgpt-ecb74.web.app/",
  };

  return (
    <div className="flex flex-wrap justify-between" >
      <div>
        <h2>{data.projectheading}</h2>
        <p>{data.projectdescription}</p>
        <div>
          <p>Tech Stacks</p>
        </div>
        <div>
          <p>github</p>
          <p>deployedlink</p>
        </div>
      </div>
      <div>
        <img src="" alt="projects snapshot" />
      </div>
    </div>
  );
};

export default PortfolioCard;
