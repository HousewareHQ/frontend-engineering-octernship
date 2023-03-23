import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./page2.css";
import SuccessHeader from "./SuccessHeader";

import LetterCart from "./LetterCard";

import GoBackButton from "./GoBackButton";


const letterBackground = {};

export const Page2 = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { state: inputStringValue } = useLocation();
    const [inputArray, setInputArray] = useState([]);
    const [currentString, setCurrentString] = useState("");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const getFilteredIndexes = (value, index) => {
        return inputArray.map((val, id) => {
            if (value.toLowerCase() === val.toLowerCase() && index !== id) {
                return true;
            }
            return false;
        });
    };

    const handleGoBack = () => {
        navigate('/page1');
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
        if (location.state === undefined || location.state === null) {
            navigate("/");
        } else {
            setInputArray(location.state.split(""));
            setCurrentString(location.state);
        }
    }, [location.state, navigate]);

    useEffect(() => {
        const hasDuplicate = currentString
            .split("")
            .some((value, index) => getFilteredIndexes(value, index).includes(true));
        setShowSuccessMessage(!hasDuplicate);
    }, [currentString, getFilteredIndexes]);

    const handleDeletefunction = (value, index) => {
        const filteredIndexes = getFilteredIndexes(value, index);
        const newArray = inputArray.filter((val, id) => !filteredIndexes[id]);
        setInputArray(newArray);
        setCurrentString(newArray.join(""));
    };


    return (
        <div className="Container">
            {showSuccessMessage && (<SuccessHeader />)}

            <h2 className="screen2-h1">Page 2</h2>
            <div className="table">
                <p className="p-text">Original string:  {inputStringValue}</p>
                <hr />
                <p className="p-text current">Current string:   {currentString}</p>
            </div>

            <div className="letter-container">
               
                {inputArray.map((input, key) => (

                    <LetterCart
                        key={key}
                        letter={input}
                        backgroundColor={letterBackground[input.toLowerCase()]}
                        onClick={() => handleDeletefunction(input, key)}
                    />
                ))}

            </div>
            
            <GoBackButton onClick={handleGoBack} />

        </div>
    );
};







