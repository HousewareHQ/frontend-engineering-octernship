import {useState} from 'react'
import './App.css';
// import { string_color as get_color } from '@mylifenp/string-color';
import uniqolor from 'uniqolor';

function App() {

  // open result controls the pop up of result
  const [openResult, setOpenResult] = useState(false);
  // isError helps tell the user about invalid input
  const [isError, setIsError] = useState(false);
  // content is the content that is modified
  const [content, setContent] = useState("");
  // conatinsDuplicate is used to track the uniqueness of the string
  const [containsDuplicateNot, setContainsDuplicateNot] = useState(false);
  // original content string
  const [originalString, setOriginalString] = useState("");

  // removes the charecter whose key is given
  // it spares the index passed in as key
  // checks whether the string is completely unique
  const remover = (key) => {
    let str = content;
    let charUsed = "";
    let unique = true;
    for(let i = 0; i < str.length;) {
      
      // if the key charecter is reached or key and charecter do not match, then move ahead
      // else remove the charecter and update key if needed
      if(i == key) {
        i++;
        continue;
      }
      else if(str[i] === str[key]) {
        // remove the charecter from the string and reduce the key index if it needs to be
        if(key > i) key = key-1;
        str = str.slice(0,i) + str.slice(i+1);
      }
      else {
        // if the charecter is used already, then we set the unique key to flase, telling us that the string is not fully unique
        if(unique) {
          if(charUsed.includes(str[i]) && str[i] !== str[key]) unique = false;
          else if(str[i] != " " && str[i] != "\n") charUsed += str[i];
        }
        i++;
      }
    }

    setContainsDuplicateNot(unique);
    setContent(str);
  }
  
  // Generates the cards of the individual charecters. blanks are converted to empty boxes for representation
  const letters = (str) => {
    let cards = [];
    for(let i = 0; i < str.length; i++){
      if(str[i]!== " " && str[i] !== "\n")
      cards.push(<div className='letter-card' key={i} style={{background: uniqolor(str[i],{differencePoint: 220}).color}}><span>{str[i]}</span><button onClick={()=>remover(i)} >del</button></div>)
      else
      cards.push(<div className='letter-card' style={{background: uniqolor(" ").color}} key={i}></div>)
    }
    return cards;
  }

  // checks whether the string is empty or has some letters
  const checkstring = (str) => {
    str = str.replaceAll(" ","").replaceAll("\n","");
    if(str.length == 0) return false;
    else return true;
  }

  return (
    <section>
      <form action="" className={isError? "error":"normal"} onSubmit={(evt)=>{
        evt.preventDefault();
          // openResult if there is some content
          // else set the error
          if(checkstring(content)){
            setOriginalString(content);
            let unique = true;
            let charUsed = "";
            for(let i = 0; i < content.length; i++) {
              if(unique) {
                if(charUsed.includes(content[i])) unique = false;
                else if(content[i] != " " && content[i] != "\n") charUsed += content[i];
              }
            }
            setContainsDuplicateNot(unique)
            setOpenResult(true);
          } else (
            setIsError(true)
          )
      }}>
        <textarea className="editable" value={content} onChange={(e)=>{
          if(isError) setIsError(false);
          setContent(e.target.value);
        }}></textarea>
        <button type="submit" className='submit-btn'>Submit</button>
      </form>
      {(openResult)?<div className="result">
        <div className="display">{letters(content)}</div>
        <button className='close-btn' onClick={(evt)=>{
          setOpenResult(false);
          setContainsDuplicateNot(false);
          setContent(originalString);
        }} >Close</button>
        {(containsDuplicateNot?<div className='notification' >
            <h1>Completely unique</h1>
            <br />
            original string: {originalString}
            <br />
            new string: {content}
          </div>:"")}
      </div>:""}
    </section>
  );
}

export default App;
