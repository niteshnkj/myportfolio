import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-8  gap-10 px-60 pt-6">
      <div className="col-span-4 ">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=1060&t=st=1702576648~exp=1702577248~hmac=aa956481af4cc08e1f7600cf78b778bd6d70f547a46ddf2dba61693207cf363c"
          alt="frontendimg"
          className="w-full h-full rounded-xl shadow-lg"
        />
      </div>
      <div className="col-span-4 ">
        <h3 className="text-orange-400 text-2xl font-bold">ABOUT ME</h3>
        <h2 className="font-semibold text-3xl">
          A dedicated Front-end Developer based in Madhubani, Bihar. 📍
        </h2>
        <p className="font-medium text-gray-400 text-base">
          As a Junior Front-End Developer, I possess an impressive arsenal of
          skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in
          designing and maintaining responsive websites that offer a smooth user
          experience. My expertise lies in crafting dynamic, engaging interfaces
          through writing clean and optimized code and utilizing cutting-edge
          development tools and techniques. I am also a team player who thrives
          in collaborating with cross-functional teams to produce outstanding
          web applications.
        </p>
      </div>
    </div>
  );
};

export default About;
