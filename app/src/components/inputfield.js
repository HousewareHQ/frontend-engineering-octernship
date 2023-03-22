import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./inputfield.css";

export let inputvalue = "";
export let initialcount = 0;

export default function Inputfield() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    inputvalue = input;

    let flag = 0;
    for (let i = 0; i < inputvalue.length; i++) {
      if (inputvalue[i] !== " " && inputvalue.length !== 0) {
        flag = 1;
      }
    }

    if (flag === 1) {
      navigate("/screen2");
    } else {
      alert("Input is empty, please enter a non-empty value");
    }
  };

  return (
    <div className="inputfield_container">
      <h1 className="inputfield">Inputfield</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          className="input_box"
          placeholder="Enter a value"
        />
        <button type="submit" className="submit_button">
          Submit
        </button>
      </form>
    </div>
  );
}
