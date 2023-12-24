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
        return "Your Email or Phone Number";
      case "message":
        return "Write a message below Message";
      default:
        return "";
    }
  };

  return (
    //
    <div className="flex justify-center items-center w-full h-[60vh]  bg-white">
      <div className="flex flex-col items-center w-[90%] lg:w-[80%] gap-14 ">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl lg:text-3xl text-orange-400 font-bold">
          {/* text-orange-400 text-2xl font-bold */}
            GET IN TOUCH
          </h1>
          <p className="text-lg lg:text-2xl text-gray-500">
            I am always excited to work on some awesome projects, ping me and
            let's discuss over message.
          </p>
        </div>
        <form className="w-full" ref={form} onSubmit={handleSubmit}>
          {currentField === "" ? (
            <p className="text:4xl lg:text-5xl font-semibold text-center text-orange-400">
              Thank You! I'll contact you soon!
            </p>
          ) : (
            <div className="flex flex-col gap-2">
              <div className="flex justify-center items-start">
                <p className="text-2xl  text-slate-600 w-[90%] lg:w-[85%] flex items-start ">
                  {getLabelForField()}
                </p>
              </div>
              <div className="flex justify-center items-start">
                <input
                  type="text"
                  name="inputValue"
                  // placeholder={`Enter ${
                  //   currentField.charAt(0).toUpperCase() + currentField.slice(1)
                  // }`}
                  className="w-[90%] lg:w-[80%] h-[60px] bg-slate-300 mr-0 focus:outline-none py-1 px-2 text-lg"
                  value={inputValue}
                  onChange={handleChange}
                />

                <button
                  type="submit"
                  className="w-[5%] bg-slate-300 h-[60px] ml-0 flex justify-center items-center py-1 text-xl text-slate-600  font-extrabold"
                >
                  {showButton && <FaArrowRight className="w-[90%] h-[90%]" />}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
