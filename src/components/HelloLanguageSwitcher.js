import React, { useState, useEffect } from "react";
import { LiaPrayingHandsSolid } from "react-icons/lia";
import { PiHandWaving } from "react-icons/pi";

const HelloLanguageSwitcher = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const greetings = ["Hello", "नमस्ते"]; // Add more greetings as needed

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);

  const isHello = greetings[greetingIndex] === "Hello";

  return (
    <div
      className={`transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex font-kalam">
        <h3>{greetings[greetingIndex]}</h3>
        <span>{isHello ? <PiHandWaving /> : <LiaPrayingHandsSolid />}</span>
      </div>
    </div>
  );
};

export default HelloLanguageSwitcher;
