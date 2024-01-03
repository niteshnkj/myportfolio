import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaArrowRight } from "react-icons/fa";
import { MdError } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [currentField, setCurrentField] = useState("name");
  const [showButton, setShowButton] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const form = useRef();

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData((prevData) => ({ ...prevData, [currentField]: value }));
    setShowButton(value.trim() !== "");
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateInput()) {
      return;
    }

    // Switch to the next input field
    switch (currentField) {
      case "name":
        setCurrentField("email");
        break;
      case "email":
        setCurrentField("message");
        break;
      case "message":
        setCurrentField("");
        break;
      default:
        break;
    }

    setProgress((prevProgress) => prevProgress + 1);
    setShowButton(false);

    // If all steps are completed, send the email
    if (progress === 2) {
      // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' with your actual Email.js credentials
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          function (response) {
            // console.log("Email sent!", response.status, response.text);
            // console.log(formData);
            alert("Email sent successfully!");
          },
          function (error) {
            console.error("Error sending email:", error);
            alert("Oops! Something went wrong.");
          }
        );
    }
  };

  const getLabelForField = () => {
    switch (currentField) {
      case "name":
        return "Your Name";
      case "email":
        return "Your Email";
      case "message":
        return "Write a message for me below";
      default:
        return "";
    }
  };

  const progressBarStyle = {
    width: `${(progress / 3) * 100}%`,
  };

  const validateInput = () => {
    let isValid = true;

    // Regex patterns for validation
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    switch (currentField) {
      case "name":
        isValid = nameRegex.test(formData.name);
        break;
      case "email":
        isValid = emailRegex.test(formData.email);
        break;
      case "message":
        break;
      default:
        break;
    }

    if (!isValid) {
      setError(`Enter a valid ${currentField}`);
    }

    return isValid;
  };

  return (
    <div className="flex justify-center items-center w-full h-[60vh] bg-white" id="contact">
      <div className="flex flex-col items-center w-[90%] lg:w-[80%] gap-14">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl lg:text-3xl text-orange-400 font-bold">
            GET IN TOUCH
          </h1>
          <p className="text-lg lg:text-2xl text-gray-500">
            I am always excited to work on some awesome projects, ping me and
            let's discuss over a message.
          </p>
        </div>
        <form className="w-full" ref={form} onSubmit={handleSubmit}>
          {progress === 3 ? (
            <div className="flex flex-col gap-2 items-center">
              <p className="text:4xl lg:text-5xl font-semibold text-center text-orange-400">
                Thank You! I'll contact you soon!
              </p>
            </div>
          ) : (
            <div className="flex flex-col justify-center gap-0">
              <div className="flex justify-center items-start">
                <p className="text-2xl text-slate-600 w-[90%] lg:w-[85%] flex items-start">
                  {getLabelForField()}
                </p>
              </div>
              <div className="flex justify-center items-start">
                <input
                  type="text"
                  name={currentField}
                  className="w-[90%] lg:w-[80%] h-[60px] bg-slate-300 mr-0 focus:outline-none py-1 px-2 text-lg"
                  value={formData[currentField]}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="w-[5%] bg-slate-300 h-[60px] ml-0 flex justify-center items-center py-1 text-xl text-slate-600  font-extrabold"
                >
                  {showButton && <FaArrowRight className="w-[90%] h-[90%]" />}
                </button>
              </div>
              <div className="flex justify-center items-start">
                <div className="w-[90%] lg:w-[85%] flex items-start h-2  bg-gray-400 ">
                  <div
                    className="h-full w-full bg-green-600"
                    style={progressBarStyle}
                  />
                </div>
              </div>
              <div className="flex justify-center items-start">
                <div className="w-[90%] lg:w-[85%] flex items-start justify-between">
                  <div className="text-gray-500 text-lg w-[85%]">
                    {error && (
                      <p className="flex gap-1">
                        <span>
                          <MdError className="" />
                        </span>
                        {error}
                      </p>
                    )}
                  </div>
                  <p className="text-lg text-gray-500 text-md">{`${progress}/3`}</p>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
