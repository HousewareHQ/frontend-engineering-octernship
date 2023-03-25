import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";

type InpMap = {
  [key: string]: {
    backgroundColor: string,
    idx: number[]
  }
}

export const Screen2 = () => {
  const params = useParams()
  const [inputValue, setInputValue] = useState(decodeURIComponent(params.input!));
  const [charsAlreadyOne, setCharsAlreadyOne] = useState<string[]>([]);
  // map to store same character and its index, also store its background color
  const [inpMap, setInpMap] = useState<InpMap>(() => {
    let inp = decodeURIComponent(params.input!)
    let inpMapTemp: InpMap = {}
    inp.split('').forEach((char, idx) => {
      // build map to group similar character with their index
      if(inpMapTemp[char]) {
        inpMapTemp[char].idx.push(idx)
      } else {
        inpMapTemp[char] = {
          // only randomize bright color
          backgroundColor: `hsl(${Math.random() * 360}, 100%, 55%)`,
          idx: [idx]
        }
      }
    })
    //retreve all characters that only have one index
    setCharsAlreadyOne(Object.keys(inpMapTemp).filter(char => inpMapTemp[char].idx.length === 1))
    return inpMapTemp
  })
  const navigate = useNavigate();

  const handleBack = () => {
    setInputValue('');
    navigate('/');
  };

  const handleDelete = (char: string) => {
    setInpMap(prev => {
      // leave one index for this character
      let newVal = {...prev}
      if(newVal[char].idx.length > 1) {
        newVal[char].idx = [newVal[char].idx[0]]
      }
      else {
        // push this character to charsAlreadyOne
        setCharsAlreadyOne(prev => [...prev, char])
      }
      return newVal
    })
    
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl mb-6">Screen 2</h1>
        <p className="mb-4">Your input: {inputValue}</p>
        <p className="mb-4">Current string: {
          // filter out characters that isn't in inpMap (that has been filtered out by delete button)
          inputValue.split('').filter((char, i) => inpMap[char]?.idx.includes(i)).join('')
        }</p>
        {charsAlreadyOne.length == Object.keys(inpMap).length && <p className="mb-4">You have removed all duplicate characters!</p>}
        <div className="mb-4 grid grid-cols-8 gap-2 w-full">
          {inputValue.split('').map((char, i) => {
            if(inpMap[char]?.idx.includes(i)) {
              return <CharacterCard 
                key={i} character={char} 
                onDelete={() => handleDelete(char)} 
                haveDuplicates={inpMap[char].idx.length > 1}
                backgroundColor={inpMap[char]?.backgroundColor}/>
            }
          })}
        </div>
        <button className="bg-gray-500 text-white py-2 px-4 rounded mt-4" onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
}