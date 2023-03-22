import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import  "./page2.css";
import { MdDelete } from "react-icons/md";
import {BsFillSkipBackwardCircleFill } from "react-icons/bs";

const letterBackground = {};
//const navigate = useNavigate();


export const Page2 = () => {
    const navigateTo = useNavigate();
    const { state: inputValue } = useLocation();
    const [inputArray, setInputArray] = useState([]);
    const [currentString, setCurrentString] = useState("");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);


    const getFilteredArray = (value, key) => {
        return inputArray.map((val, id) => {
            if (value.toLowerCase() === val.toLowerCase() && key !== id) {
                return true;
            }
            return false;
        });
    };


    const handleDelete = (value, key) => {
        const filteredArray = getFilteredArray(value, key);
        const newArray = inputArray.filter((val, id) => !filteredArray[id]);
        setInputArray(newArray);
        setCurrentString(newArray.join(""));
    };

    const handleGoBack = () => {
        navigateTo('/page1');
      };

    inputArray.forEach((letter) => {
        if (!letterBackground[letter]) {
          letterBackground[letter] = `rgb(${Math.floor(
            Math.random() * 256
          )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * 256
          )})`;
        }
      });

    
    

    useEffect(() => {
        if (inputValue === undefined || inputValue === null) {
            navigateTo("/");
        } else {
            setInputArray(inputValue.split(""));
            setCurrentString(inputValue);
        }
    }, [inputValue, navigateTo]);

    useEffect(() => {
        const hasDuplicate = currentString
            .split("")
            .some((value, key) => getFilteredArray(value, key).includes(true));
        setShowSuccessMessage(!hasDuplicate);
    }, [currentString, getFilteredArray]);



    return (
        <div className="Container">
            {showSuccessMessage && (
                <div className="success-header">
                <h1>All duplicate characters are Successfully Removed!</h1>
                </div>
            )}
            <h2 className="screen2-h1">Page 2</h2> 
            <div className="table">
            <p className="p-text">Original string:  {inputValue}</p>
            <hr />
            <p className="p-text current">Current string:   {currentString}</p>
            </div>

            <div className="letter-container">
                {inputArray.map((input, key) => {
                    return (
                        <div className="crat-container">
                        <div 
                            key={key}
                            className="letter-cart"
                            style={{ backgroundColor: letterBackground[input.toLowerCase()] }}
                            >
                            <div className="split-text">{input}</div>
                            <button onClick={() => handleDelete(input, key)}> <MdDelete /> </button>
                        </div>
                        </div>
                    
                    );
                })}
            </div>
            <div className="back-btn">
            <button onClick={handleGoBack} > <span className="back-icon"> <BsFillSkipBackwardCircleFill /> </span>Go Back</button>
            </div>
        </div>
    );
};







