import React, { useState, useEffect } from "react";
import { useSearchParams, Link,redirect } from "react-router-dom";
import { colors } from "./color";


const Output = () => {
  const [searchParams] = useSearchParams();
  const [text, setText] = useState(searchParams.get("text").split(""));
  const [showModal, setShowModal] = useState(false);

  const getFontColor = (letter) => {
    let color = colors.filter((color) => color.letter === letter);
    return color[0].fontColor;
  }

  const getBackgroundColor = (letter) => {
    let color = colors.filter((color) => color.letter === letter);
    return color[0].bgColor;
  }

  const checkDuplicateLetter = (text) => {
    for (let i = 0; i < text.length; i++) {
      for (let j = i + 1; j < text.length; j++) {
        if (text[i] === text[j]) {
          return true;
        }
      }
    }
    return false;
  };

  const deleteDuplicateLetter = (text, character) => {
    let result = [];
    let idx = text.indexOf(character);
    for (let i = 0; i <= idx; i++) {
      result.push(text[i]);
    }
    for (let i = idx; i < text.length; i++) {
      if (text[i] !== character) {
        result.push(text[i]);
      }
    }
    setText(result);
  };

  useEffect(() => {
    if (!checkDuplicateLetter(text)) {
      setShowModal(true);
    }
  }, [text]);

  return (
    <>
      {showModal ? (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div
            className="fixed inset-0 w-full h-full bg-black opacity-40"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="flex items-center min-h-screen px-4 py-8">
            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
              <div className="mt-3 sm:flex">
                <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-red-100 rounded-full">
                  <svg
                    class="ft-green-tick"
                    xmlns="http://www.w3.org/2000/svg"
                    height="100"
                    width="100"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <circle
                      class="circle"
                      fill="#5bb543"
                      cx="24"
                      cy="24"
                      r="22"
                    />
                    <path
                      class="tick"
                      fill="none"
                      stroke="#FFF"
                      stroke-width="6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="M14 27l5.917 4.917L34 17"
                    />
                  </svg>
                </div>
                <div className="mt-2 text-center sm:ml-4 sm:text-left">
                  <h4 className="text-lg font-medium text-gray-800">
                    Yeahh ! You did it ! <span className="text-2xl"> 😀🎉</span>
                  </h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                    You just remove the all duplicate value from the text
                  </p>
                  <div className="items-center gap-4 mt-3 flex">
                    <h2 className="text-xl text-center w-1/2 text-gray-800 my-4">
                      {" "}
                      Original Word <br /> <span className="text-red-500 text-2xl font-bold">{searchParams.get("text")}{" "} </span>
                    </h2>
                    <h2 className="text-xl text-center w-1/2 text-gray-800 my-4">
                      {" "}
                      Edited Word <br /> <span className="text-green-500 text-2xl font-bold">{text}{" "} </span>
                    </h2>
                  </div>
                  <div className="items-center gap-2 mt-3 sm:flex">
                    <button
                      className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                      onClick={() => setShowModal(false)}
                    >
                      Show Letters
                    </button>

                    <Link
                      className="w-full mt-2 p-2.5 flex-1 text-white bg-green-600 rounded-md outline-none ring-offset-2 ring-sky-600 focus:ring-2 text-center"
                      to={"/"}
                    >
                      Back to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="bg-gray-100 w-full p-10 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-center text-gray-800 my-4">
          {" "}
          Output{" "}
        </h2>
        <hr />
        <h3 className="text-2xl font-bold text-center text-gray-500 my-4">
          {" "}
          Original Text :{" "}
          <span className="text-3xl text-sky-400">
            {searchParams.get("text")}
          </span>{" "}
        </h3>
        <hr />
        <h3 className="text-2xl font-bold text-center text-gray-500 my-4">
          {" "}
          Edited Text : <span className="text-3xl text-sky-400">
            {text}
          </span>{" "}
        </h3>
        <hr />
        <div className="flex justify-center w-2/3">
          {!checkDuplicateLetter(text) ? (
            <Link
              to={"/"}
              className="w-full mt-2 p-2.5 flex-1 text-white bg-green-600 rounded-md outline-none ring-offset-2 ring-sky-600 focus:ring-2 text-center"
            >
              Back to Home
            </Link>
          ) : null}
        </div>

        <div className="flex justify-center gap-3 flex-wrap w-full">
          {text.map((item, index) => (
            <div className="w-full max-w-xs" key={index}>
              <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 my-32" style={{backgroundColor: getBackgroundColor(item)}}>
                <h2 className="text-2xl font-bold text-center my-4" style={{color: getFontColor(item)}}>
                  {item}
                </h2>
                <div className="flex items-center justify-center">
                  <button
                    className="bg-red-700 hover:bg-red-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex gap-3"
                    type="button"
                    onClick={() => deleteDuplicateLetter(text, item)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}{" "}
        </div>
      </div>
    </>
  );
};

export default Output;
