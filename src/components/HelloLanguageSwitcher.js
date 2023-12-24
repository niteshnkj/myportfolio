import React, { useState, useEffect } from "react";
import { LiaPrayingHandsSolid } from "react-icons/lia";
import { PiHandWaving } from "react-icons/pi";

const HelloLanguageSwitcher = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const greetings = ["Hello", "नमस्ते"]; 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const isHello = greetings[greetingIndex] === "Hello";

  return (
    <div
      className={`transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex justify-center gap-3 font-kalam">
        <h3 className="text-4xl lg:text-6xl ">{greetings[greetingIndex]}</h3>
        <span className="text-3xl lg:text-5xl">{isHello ? <PiHandWaving /> : <LiaPrayingHandsSolid />}</span>
      </div>
    </div>
  );
};

export default HelloLanguageSwitcher;
