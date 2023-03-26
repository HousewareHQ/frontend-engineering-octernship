import { useEffect, useState } from "react";
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
          // only randomize primary color (red, green, blue, etc) but with opacity
          backgroundColor: `hsla(${Math.floor(Math.random() * 360)}, 100%, 50%, 0.7)`,
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
      // push this character to charsAlreadyOne
      setCharsAlreadyOne(prevChar => [...prevChar, char])
      
      return newVal
    })
  };

  useEffect(() => {
    console.log('charsAlreadyOne', charsAlreadyOne)
    console.log('inpMap length', Object.keys(inpMap).length, 'charsAlreadyOne length', charsAlreadyOne.length)

  }, [charsAlreadyOne])

  return (
    <div className="flex items-center justify-center font-inter min-h-screen bg-gradient-to-tr from-blue-300 via-emerald-400 to-indigo-200">
      <div className="container bg-zinc-900/70 text-white p-8 shadow-md shadow-zinc-700 border-zinc-600 border-2 rounded-lg selection:bg-emerald-400/40">
        <div className="flex flex-col items-center justify-center">
          <h1 className="self-start text-5xl font-semibold mb-6">Screen 2</h1>
          <p className="self-start font-medium mb-2">Your input: {inputValue}</p>
          <p className="self-start font-medium mb-4">Current string: {
            // filter out characters that isn't in inpMap (that has been filtered out by delete button)
            inputValue.split('').filter((char, i) => inpMap[char]?.idx.includes(i)).join('')
          }</p>
          {charsAlreadyOne.length == Object.keys(inpMap).length && 
            <p className="p-4 bg-green-500/70 rounded-md mb-4 font-medium text-lg">You have removed all the duplicate characters!</p>
          }
          <div className="mb-4 flex flex-wrap gap-2 w-full">
            {inputValue.split('').map((char, i) => {
              if(inpMap[char]?.idx.includes(i)) {
                return <CharacterCard
                  className="w-28 rounded-md"
                  key={i} character={char}
                  onDelete={() => handleDelete(char)}
                  haveDuplicates={inpMap[char].idx.length > 1}
                  backgroundColor={inpMap[char]?.backgroundColor}/>
              }
            })}
          </div>
          <button className="bg-zinc-800/70 hover:bg-zinc-800/90 shadow-sm text-lg py-2 px-4 rounded mt-4" onClick={handleBack}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}