import React, { useState, useEffect } from "react";
import "./card.css";
import { inputvalue } from "../components/inputfield";
import { useNavigate } from "react-router-dom";

export let deletechar = "";
export let afterDeleteInputValue = "";
export let newInputValue = "";
let isFirstTime;

export default function Card(props) {
  isFirstTime = props.check;

  const [isDeleted, setIsDeleted] = useState(false);
  const navigate = useNavigate();

  const handleClick = (index) => {
    if (index !== -1) {
      if (isFirstTime) {
        afterDeleteInputValue = inputvalue;
        isFirstTime = false;
      }

      const beforeindex = afterDeleteInputValue.substring(0, index);
      const afterindex = afterDeleteInputValue.substring(index + 1);

      deletechar = props.value;

      let newBeforeIndex = "";
      let newAfterIndex = "";

      for (let i = 0; i < beforeindex.length; i++) {
        if (beforeindex[i] !== deletechar) {
          newBeforeIndex += beforeindex[i];
        }
      }

      for (let i = 0; i < afterindex.length; i++) {
        if (afterindex[i] !== deletechar) {
          newAfterIndex += afterindex[i];
        }
      }

      const newInputValue = newBeforeIndex + deletechar + newAfterIndex;

      if (newInputValue.length !== afterDeleteInputValue.length) {
        setIsDeleted(true);
      }

      console.log("newInputValue: " + newInputValue);
      console.log("afterDeleteInputValue: " + afterDeleteInputValue);
      afterDeleteInputValue = newInputValue;
    }
  };

  useEffect(() => {
    if (isDeleted) {
      const timeout = setTimeout(() => {
        setIsDeleted(false);
        navigate("/afterdelete");
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isDeleted, navigate]);

  if (props.duplicate) {
    return (
      <div className="card">
        <button
          className="card_body_d"
          onClick={() => handleClick(props.index)}
          style={{ backgroundColor: props.color }}
        >
          {props.value}
          <i class="fa fa-trash delete-icon"></i>
        </button>
        {isDeleted && <div className="delete-text">Success</div>}
      </div>
    );
  } else {
    return (
      <div className="card">
        <button
          className="card_body_nd"
          onClick={() => handleClick(props.index)}
          style={{ backgroundColor: props.color }}
        >
          {props.value}
          <i class="fa fa-trash delete-icon"></i>
        </button>
        {isDeleted && <div className="success-message">Success</div>}
      </div>
    );
  }
}
