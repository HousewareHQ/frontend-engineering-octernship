import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import colors from "../colors";
import Modal from "./Model";

import GreenTickIcon from "../assets/GreenTickIcon";

const Output = () => {
  const { text } = useParams();
  const [charArray, setCharArray] = useState([...text]);
  const [showModal, setShowModal] = useState(false);
  const set = new Set(charArray);

  const deleteDuplicateLetter = (charArray, char) => {
    let result = [];
    const index = charArray.indexOf(char);

    for (let i = 0; i <= index; i++) {
      result.push(charArray[i]);
    }
    for (let i = index; i < charArray.length; i++) {
      if (charArray[i] !== char) {
        result.push(charArray[i]);
      }
    }
    setCharArray(result);
  };

  const checkDuplicateLetter = (charArray) => {
    if (+charArray.length === +set.size) {
      for (let i = 0; i < charArray.length; i++) {
        if (!set.has(charArray[i])) {
          return true;
        }
      }
      return false;
    }
    return true;
  };

  useEffect(() => {
    if (!checkDuplicateLetter(charArray)) {
      setShowModal(true);
    }
  }, [charArray]);

  return (
    <section className="output__section section">
      <h2>Output</h2>
      <header className="output__header">
        <h3>
          Original Text : <span>{text}</span>
        </h3>
        <h3>
          Edited Text : <span>{charArray}</span>
        </h3>
        <Link to="/">
          <button className="btn btn--success">Back to Home</button>
        </Link>
      </header>

      {showModal && (
        <OutputModal
          setShowModal={setShowModal}
          text={text}
          charArray={charArray}
        />
      )}

      <div className="row cards">
        {charArray?.length > 0 &&
          charArray.map((char, index) => (
            <Card
              char={char}
              deleteDuplicateLetter={deleteDuplicateLetter}
              charArray={charArray}
              key={index}
            />
          ))}
      </div>
    </section>
  );
};

function Card({ char, deleteDuplicateLetter, charArray }) {
  return (
    <div className="card">
      <article
        className="card__inner"
        style={{ background: `${colors[char].bgColor}` }}
      >
        <div className="font" style={{ color: `${colors[char].fontColor}` }}>
          {char}
        </div>
        <button
          className="btn small__btn"
          onClick={() => deleteDuplicateLetter(charArray, char)}
        >
          Delete
        </button>
      </article>
    </div>
  );
}

function OutputModal({ setShowModal, text, charArray }) {
  return (
    <Modal>
      <section className="output__modal">
        <span className="greentick__icon">
          <GreenTickIcon />
        </span>
        <div>
          <h4>Yeah Hooray ! You did it !🎉</h4>
          <p>You just remove the all duplicate value from the text</p>
          <div className="output">
            <h4>Original Text : {text}</h4>
            <h4>
              Edited Text : <span className="primary--dark">{charArray}</span>
            </h4>
          </div>
          <div className="btns">
            <button
              className="btn show__btn"
              onClick={() => setShowModal(false)}
            >
              Show Letters
            </button>
            <Link to="/">
              <button className="btn sucess__btn">Back to Home</button>
            </Link>
          </div>
        </div>
      </section>
    </Modal>
  );
}

export default Output;
