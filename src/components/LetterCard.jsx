import React from 'react';
import { MdDelete } from "react-icons/md";
import "./LetterCard.css"

const LetterCart = ({ letter, backgroundColor, onClick }) => {
  return (
    <div className="crat-container">
      <div
        className="letter-cart"
        style={{ backgroundColor }}
      >
        <div className="split-text">{letter}</div>
        <button onClick={onClick}> <MdDelete /> </button>
      </div>
    </div>
  );
};

export default LetterCart;


