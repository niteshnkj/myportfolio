import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
  const [inputValue, setInputValue] = useState("");
  const [currentField, setCurrentField] = useState("name");
  const [showButton, setShowButton] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setShowButton(value.trim() !== ""); // Show button if the input is not empty after trimming whitespace
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log("this", result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // Add your logic here to handle the values based on the current field
    console.log(
      `${currentField.charAt(0).toUpperCase() + currentField.slice(1)}:`,
      inputValue
    );

    // Switch to the next input field
    switch (currentField) {
      case "name":
        setCurrentField("email");
        setInputValue(""); // Clear the input for the next field
        break;
      case "email":
        setCurrentField("message");
        setInputValue(""); // Clear the input for the next field
        break;
      case "message":
        setCurrentField(""); // Reset to an empty string after submitting the message
        setInputValue(""); // Clear the input for the next field
        break;
      default:
        break;
    }

    setShowButton(false); // Hide the button after submission
  };

  const getLabelForField = () => {
    switch (currentField) {
      case "name":
        return "Your Name";
      case "email":
        return "Your Email";
      case "message":
        return "Your Message";
      default:
        return "";
    }
  };

  return (
    <form className="flex px-60 py-6" ref={form} onSubmit={handleSubmit}>
      <h1>Get In Touch</h1>
      {currentField === "" ? (
        <p className="text-5xl font-semibold text-center text-orange-400">
          Thank You! I'll contact you soon!
        </p>
      ) : (
        <div className="flex flex-col w-full">
          <label htmlFor="inputValue" className="">
            {getLabelForField()}
          </label>
          <div className="flex">
            <input
              type="text"
              name="inputValue"
              placeholder={`Enter ${
                currentField.charAt(0).toUpperCase() + currentField.slice(1)
              }`}
              className="w-full h-12 border-black border-2 rounded-md"
              value={inputValue}
              onChange={handleChange}
            />
            {showButton && (
              <button type="submit" className="">
                <FaArrowRight />
              </button>
            )}
          </div>
        </div>
      )}
    </form>
  );
};

export default Contact;
