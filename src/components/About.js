import React from "react";
const About = () => {
  return (
    <div className="flex justify-between items-center w-full h-auto lg:h-[90vh] bg-white">
      <div className="flex flex-col lg:flex-row mx-4 lg:mx-44  justify-between items-center lg:items-start">
        <div className=" h-full w-[90%] lg:w-1/2 ">
          <img
            src="https://res.cloudinary.com/do9s5cxxl/image/upload/v1703978104/Portfolio/about_pic_lnpg0j.png"
            alt="frontendimg"
            className="flex justify-center items-center h-full px-6 py-12 rounded-[2rem]"
          />
        </div>
        <div className="flex flex-col items-center lg:items-start gap-1 w-[90%] lg:w-1/2 h-full p-6">
          <h3 className="text-orange-400 text-2xl font-bold">ABOUT ME</h3>
          <h2 className="font-semibold text-xl lg:text-2xl">
            A dedicated Front-end Developer based in Madhubani, Bihar. 📍
          </h2>
          <p className="font-medium text-lg text-gray-500 ">
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
