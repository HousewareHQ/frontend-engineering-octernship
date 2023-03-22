import React from "react";
import { afterDeleteInputValue } from "../UI/card";
import Card from "../UI/card";
import "./afterdelete.css";
import { inputvalue } from "./inputfield";
import { useNavigate } from "react-router-dom";

let check = false;

export default function Afterdelete() {
  const characters = afterDeleteInputValue.split("");
  const navigate = useNavigate();

  const handle_back = () => {
    navigate("/");
  };

  const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
  };

  let duplicate = [];
  let nonduplicate = [];
  let duplicatecolor = [];
  let nonduplicatecolor = [];

  for (let i = 0; i < characters.length; i++) {
    if (!nonduplicate.includes(characters[i])) {
      nonduplicate.push(characters[i]);
    } else {
      if (!duplicate.includes(characters[i])) {
        duplicate.push(characters[i]);
      }
    }
  }
  for (let i = 0; i < duplicate.length; i++) {
    nonduplicate.splice(nonduplicate.indexOf(duplicate[i]), 1);
  }

  for (let i = 0; i < duplicate.length; i++) {
    let mycolor = randomColor();
    if (
      !duplicatecolor.includes(mycolor) &&
      !nonduplicatecolor.includes(mycolor)
    ) {
      duplicatecolor.push(mycolor);
    } else {
      i--;
    }
  }

  for (let i = 0; i < nonduplicate.length; i++) {
    let mycolor = randomColor();

    if (
      !duplicatecolor.includes(mycolor) &&
      !nonduplicatecolor.includes(mycolor)
    ) {
      nonduplicatecolor.push(mycolor);
    } else {
      i--;
    }
  }
  const handleduplicatecolor = (value) => {
    let index = duplicate.indexOf(value);
    return duplicatecolor[index];
  };

  const handlenonduplicatecolor = (value) => {
    let index = nonduplicate.indexOf(value);
    return nonduplicatecolor[index];
  };

  console.log(duplicatecolor);
  console.log(nonduplicatecolor);

  return (
    <div className="card">
      <div className="character_container">
        <button className="back_button" onClick={handle_back}>
          Back
        </button>
        <h1 className="character_title">Characters-After Delete</h1>

        {characters.map((character, index) => {
          if (nonduplicate.includes(character)) {
            return (
              <Card
                key={index}
                value={character}
                className="character_card"
                index={index}
                check={check}
                duplicate={false}
                color={handlenonduplicatecolor(character)}
              />
            );
          } else {
            return (
              <Card
                key={index}
                value={character}
                className="character_card"
                index={index}
                check={check}
                duplicate={true}
                color={handleduplicatecolor(character)}
              />
            );
          }
        })}
        <div className="original_characters">
          <h2 className="original_string"> Original String was:- </h2>
          <h2 className="original_string_value"> {inputvalue}</h2>
        </div>
      </div>
    </div>
  );
}
