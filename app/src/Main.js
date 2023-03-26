import React, { useState } from 'react';
import './Main.css';

const alphabetColors = {
  A: '#FF0000',
  B: '#00FF00',
  C: '#0000FF',
  D: '#33C4FF',
  E: '#FF00FF',
  F: '#00FFFF',
  G: '#FFA500',
  H: '#800080',
  I: '#FFC0CB',
  J: '#FF6347',
  K: '#008080',
  L: '#FFD700',
  M: '#DC143C',
  N: '#33FF74',
  O: '#7FFF00',
  P: '#BA55D3',
  Q: '#FF69B4',
  R: '#00BFFF',
  S: '#FF1493',
  T: '#00CED1',
  U: '#9400D3',
  V: '#3C33FF',
  W: '#008000',
  X: '#FFDAB9',
  Y: '#1E90FF',
  Z: '#00FF7F',
};


// ---------------- screen 1 ----------------------------

function Screen1({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    if (inputValue.trim().length === 0) {
      alert('Please provide a non-empty value');
      return;
    }

    onSubmit(inputValue);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='mainForm'>
      <p>Enter your favourite word</p>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}



// ---------------- screen 2 ---------------------------

function Screen2({ originalString, newString, onBackClick }) {
  const [characters, setCharacters] = useState([]);
  const[newVal,setNewVal]=useState(null)
  const [showNewStr,setShowStr]=useState(false)
  const [newchar,setnewchar]=useState(Array.from(originalString))

  const handleDelete = (value, color) => {
    const newChar = [];
    for (let i = 0; i < newchar.length; i++) {
      if (newchar[i].toUpperCase() !== value.toUpperCase() || newchar.indexOf(value) === i) {
        newChar.push(newchar[i]);
      }
    }
    setnewchar(newChar);
     const char=getCharacters(newChar.join(""))
     setCharacters(char)
     setNewVal(newChar.join(""))
     setShowStr(true);
  };

  const renderCards = () => {
    const cards = characters.map((c, index) => {
      const style = {
        backgroundColor: c.color,
      };


      return (
        
        <div className='charCard' key={index} style={style}>
          <span >{c.character}</span>
          <button className='deletBtn' onClick={() => { handleDelete(c.character,style) }}>X</button>
        </div>
      );
    });
    return <div className='screenCard'>{cards}</div>;

  };

  const getCharacters = (string) => {
    const characters = [];
    Array.from(string).forEach((value) => {
  
      characters.push({
        character: value,
        color: alphabetColors[value.toUpperCase()],
      });
    });
    return characters;
  };

  React.useEffect(() => {
    const characters = getCharacters(originalString);
    setCharacters(characters);
  }, [originalString]);

  return (
    <div className='Screen2'>
        <div className="content">

      <h2>Original String: {originalString}</h2>
    {
      showNewStr  && <h2>New String:{newVal}</h2>
    }
      </div>
       {renderCards()}

      <button className='backBtn' onClick={onBackClick}>Back</button>
    </div>
  );
}



// ---------------- App ----------------------------


function App() {
  const [originalString, setOriginalString] = useState('');
  const [newString, setNewString] = useState('');

  const handleScreen1Submit = (inputValue) => {
    setOriginalString(inputValue);
    const newString = inputValue
      .split('')
      .filter((c, index, array) => array.indexOf(c) === index)
      .join('');
    setNewString(newString);
  };

  const handleScreen2BackClick = () => {
    setOriginalString('');
    setNewString('');
  };

  if (originalString === '') {
    return <Screen1 onSubmit={handleScreen1Submit} />;
  } else {
    return (
      <Screen2
        originalString={originalString}
        newString={newString}
        onBackClick={handleScreen2BackClick}
      />
    );
  }
}

export default App;

