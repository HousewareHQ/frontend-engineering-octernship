import React, { useState,useRef,useEffect } from "react";
import { useNavigate, createSearchParams, Link } from "react-router-dom";

const Home = () => {
  const [text, setText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);


  const enterPressed = (e) => {
    if (e.keyCode === 13) {
      openOutput(text);
    }
  }

  const openOutput = (text) => {
    if (text === "") {
      setShowModal(true);
      return;
    }
    navigate({
      pathname: "/output",
      search: createSearchParams({ text }).toString(),
    });
  };
  return (
    <>
      <div className="flex justify-center h-screen bg-gray-100">
        <div className="w-full max-w-3xl  flex flex-col gap-5 justify-center">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div>
              <h2 className="text-3xl font-bold text-center text-gray-800 my-4 underline decoration-wavy">
                Remove Duplicate Character
              </h2>
              <div className="flex border border-gray-200 rounded-full p-4 shadow text-xl">
                <input
                  type="text"
                  className="w-full outline-none px-3"
                  placeholder="Enter the word"
                  onChange={(e) => setText(e.target.value)}
                  onKeyDown={(e) => enterPressed(e)}
                  ref={inputRef}
                />
              </div>
              <div className="mt-8 text-center">
                <button className="mr-3 bg-sky-500 border border-gray-300 py-3 px-4 rounded hover:bg-sky-900 hover:border-gray-500 text-white"
                onClick={() => openOutput(text)}
                >
                  Submit
                </button>
               
              </div>
            </div>

            
          </div>
        </div>
      </div>
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
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-red-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="mt-2 text-center sm:ml-4 sm:text-left">
                  <h4 className="text-lg font-medium text-gray-800">
                    Blank Input Error
                  </h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                    You can't submit empty text to the output page. Please input
                    some text.
                  </p>
                  <div className="items-center gap-2 mt-3 sm:flex">
                    <button
                      className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Home;
