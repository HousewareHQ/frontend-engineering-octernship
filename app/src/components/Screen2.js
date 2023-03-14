import React, { useEffect, useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/fontawesome-free-solid";

export const Screen2 = ({ originalText, setText }) => {
  const [textArray, setTextArray] = useState([]);
  const [checkUnique, setCheckUnique] = useState(false);

  useEffect(() => {
    var tempTextArray = [];
    originalText.split("").forEach((char) => {
      const findChar = tempTextArray.filter(
        (ch) => ch.text.toLowerCase() === char.toLowerCase()
      );
      if (findChar.length > 0) {
        tempTextArray = [
          ...tempTextArray,
          { text: char, color: findChar[0].color },
        ];
      } else {
        tempTextArray = [
          ...tempTextArray,
          { text: char, color: generateRandomColor() },
        ];
      }
    });
    setTextArray(tempTextArray);
  }, []);

  useEffect(() => {
    var hashmap = {};
    var check = true;
    textArray.forEach((textObj) => {
      if (textObj.text in hashmap) {
        check = false;
        return;
      }
      hashmap[textObj.text] = 1;
    });
    setCheckUnique(check);
  }, [textArray]);

  const handleDeleteLetterInstance = (text, index) => {
    const tempTextArray = [...textArray].filter(
      (charObj, pos) =>
        charObj.text.toLowerCase() !== text.toLowerCase() || pos === index
    );
    setTextArray(tempTextArray);
  };
  const generateRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const showResultantString = () => {
    const newString = textArray.map((textObj) => textObj.text).join("");
    return newString;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "50%",
        margin: "1rem auto",
      }}
    >
      <h2>Screen 2</h2>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        {textArray.map((data, index) => (
          <Card
            style={{
              width: "100px",
              border: "1px solid grey",
              padding: "1rem",
              height: "50px",
              borderRadius: "0.5rem",
              position: "relative",
              background: data.color,
            }}
          >
            <Card.Body>
              <Card.Title>Letter {index + 1}</Card.Title>
              <Card.Text>{data.text}</Card.Text>
            </Card.Body>
            <FontAwesomeIcon
              icon={faTrash}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                padding: "5px 10px",
                cursor: "pointer",
              }}
              className="deleteLetter"
              onClick={() => handleDeleteLetterInstance(data.text, index)}
            />
          </Card>
        ))}
      </div>
      {checkUnique && (
        <Alert
          key={"success"}
          variant={"success"}
          style={{ margin: "1rem 0", color: "green" }}
        >
          Hurray! We have all unique letters
        </Alert>
      )}
      {checkUnique && (
        <div>
          Original String : {originalText} , New Resultant String :{" "}
          {showResultantString()}
        </div>
      )}
      <Link to="/" style={{ margin: "1rem 0" }} onClick={() => setText("")}>
        <Button variant="primary">Go to Screen 1</Button>
      </Link>
    </div>
  );
};
