import React from "react";
import Card from "../UI/card";
import "./screen2.css";
import { inputvalue } from "../components/inputfield";
import { useNavigate } from "react-router-dom";

let check = false; // useful when user clicks on back button and then again enter some string and then click on submit button

export default function Screen2() {
  const characters = inputvalue.split("");
  const navigate = useNavigate();
  check = true; //useful when screen2 render the card component as pass it as a prop to card component
  const handle_back_button = () => {
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

  

  console.log("duplicatecolor: " + duplicatecolor);
  console.log("nonduplicatecolor: " + nonduplicatecolor);
  const handleduplicatecolor = (value) => {
    let index = duplicate.indexOf(value);
    return duplicatecolor[index];
  };

  const handlenonduplicatecolor = (value) => {
    let index = nonduplicate.indexOf(value);
    return nonduplicatecolor[index];
  };

  return (
    <div className="character_container">
      <h1 className="character_title">Characters-Before Delete</h1>

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
      <button className="back_button" onClick={handle_back_button}>
        Back
      </button>
    </div>
  );
}
