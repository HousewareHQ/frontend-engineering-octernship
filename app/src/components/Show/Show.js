import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "antd";
import Showchar from "../Showchar/Showchar";
import { nanoid } from "nanoid";
import { BsFillArrowLeftSquareFill, BsCheckCircleFill } from "react-icons/bs";
import "./Show.css";

function Show() {
  const location = useLocation();
  const data = location.state.info;
  const navigate = useNavigate();
  const [name, setName] = useState(data);
  const [showSuccess, setShowSuccess] = useState(false);

  const newData = Array.from(name);
  let cnt = 0;

  //to apply same background color for same characters

  const colorMap = {};
  for (let i = 0; i < newData.length; i++) {
    if (!colorMap[newData[i]]) {
      let value = Math.floor(Math.random() * 16777215).toString(16);
      colorMap[newData[i]] = `#${value}`;
    }
  }

  //Go Back
  function handleRoute() {
    navigate("/");
  }

  function handleDelete(id) {
    const char = newData[id];
    let newString = "";
    for (let i = 0; i < newData.length; i++) {
      if (newData[i] !== char) {
        newString += newData[i];
      } else {
        if (i === id) {
          newString += newData[i];
        }
      }
    }

    // it will iterate through the newString and checks if there are any duplicate characters if not then it displays success.
    let charArray = {};
    for (let i = 0; i < newString.length; i++) {
      charArray[newString.charAt(i)] = charArray[newString.charAt(i)]
        ? charArray[newString.charAt(i)] + 1
        : 1;
    }
    let check = true;
    for (let i in charArray) {
      if (charArray[i] > 1) {
        check = false;
        break;
      }
    }
    if (check) {
      setShowSuccess(true);
    }

    setName(newString);
  }

  return (
    <div className="container">
      <div className="nav">
        <button className="icon route" onClick={handleRoute}>
          <BsFillArrowLeftSquareFill />
        </button>
        <div className="top">
          <Card className="info" title={data} bordered={false}>
            {name}
          </Card>
        </div>
        {showSuccess && (
          <div className="icon success">
            <BsCheckCircleFill />
          </div>
        )}
      </div>
      <div className="card">
        {newData.map((item) => (
          <Showchar
            key={nanoid()}
            handleDelete={handleDelete}
            data={{
              name: item,
              string: name,
              color: colorMap,
              id: cnt++,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Show;
