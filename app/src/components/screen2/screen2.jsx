import { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./screen2.css";
import { MdDeleteForever  } from "react-icons/md";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const letterBackground = {};

export const Screen2 = () => {
  const navigate = useNavigate();
  const { state: inputValue } = useLocation();
  const [inputArr, setInputArr] = useState([]);
  const [currentString, setCurrentString] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (inputValue === undefined || inputValue === null) {
      navigate("/");
    } else {
      setInputArr(inputValue.split(""));
      setCurrentString(inputValue);
    }
  }, [inputValue, navigate]);

  const filterFunction = useCallback((value, key) => { 
    return inputArr.map((v, k) => {
      if (value.toLowerCase() === v.toLowerCase() && key !== k) {
        return true;
      }
      return false;
    });
  }, [inputArr]);

  const handleDelete = (value, key, e) => {
    const filterArray = filterFunction(value, key);
    const newArray = inputArr.filter((v, k) => !filterArray[k]);
    setInputArr(newArray);
    setCurrentString(newArray.join(""));
  };

  useEffect(() => {
    const isDuplicate = currentString
      .split("")
      .some((value, key) => filterFunction(value, key).includes(true));
    setShowSuccess(!isDuplicate);
  }, [currentString, filterFunction]);

  inputArr.forEach((letter) => {
    if (!letterBackground[letter]) {
      letterBackground[letter] = `rgb(${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )})`;
    }
  });

  return (
    <div className="container-screen2">
      {showSuccess && (
        <div className="success-header">
          <h1>
            Success! There are no Duplicate characters in the string 🎊
          </h1>
        </div>
      )}
      <div className="display-data">
        <h2>
          String you entered: <span className="data">{inputValue}</span>
        </h2>
        <h2>
          Current string: <span className="data">{currentString}</span>
        </h2>
      </div>

      <div className="flex-box">
        {inputArr.map((input, key) => {
          return (
            <div
              className="card"
              key={key}
              style={{ backgroundColor: letterBackground[input.toLowerCase()] }}
            >
              <div className="letter">{input}</div>
              <button
                className="delete-btn"
                onClick={() => handleDelete(input, key)}
              >
                <MdDeleteForever className="delete-icon" />
              </button>
            </div>
          );
        })}
      </div>
      <div title="This is screen 2" className="location">Screen 2</div>
      <div title="Go back" className="back-btn-div" ><IoArrowBackCircleSharp className="back-btn" onClick={() => navigate('/')} /></div>
    </div>
  );
};
