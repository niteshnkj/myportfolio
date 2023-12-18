import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
  const [inputValue, setInputValue] = useState("");
  const [currentField, setCurrentField] = useState("name");
  const [showButton, setShowButton] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setShowButton(value.trim() !== ""); // Show button if the input is not empty after trimming whitespace
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
        return "Your Name:";
      case "email":
        return "Your Email:";
      case "message":
        return "Your Message:";
      default:
        return "";
    }
  };

  return (
    <form className="flex px-60 py-6" onSubmit={handleSubmit}>
      {currentField === "" ? (
        <p className="text-5xl font-semibold text-center text-orange-400">
          Thank You! I'll contact you soon!
        </p>
      ) : (
        <>
          <label htmlFor="inputValue" className="">
            {getLabelForField()}
          </label>
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
        </>
      )}
    </form>
  );
};

export default Contact;
