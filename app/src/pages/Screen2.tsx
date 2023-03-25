import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';

const Screen2: React.FC = () => {
  const params = useParams()
  const [inputValue, setInputValue] = useState(decodeURIComponent(params.input!));
  const navigate = useNavigate();
  const [result, setResult] = useState('');

  useEffect(() => {
    if (inputValue.trim() === '') {
      navigate('/');
    }
  }, [navigate, inputValue]);

  const handleBack = () => {
    navigate('/');
  };

  const handleDelete = (char: string) => {
    const counts: { [key: string]: number } = {};
    for (let i = 0; i < inputValue.length; i++) {
      const c = inputValue[i];
      counts[c] = (counts[c] || 0) + 1;
    }

    const charCount = counts[char];

    if (charCount > 1) {
      const charIndexes = inputValue
        .split('')
        .map((c, i) => (c === char ? i : -1))
        .filter((i) => i !== -1);

      const charIndex = charIndexes[0];
      const result = inputValue.slice(0, charIndex) + inputValue.slice(charIndex + 1);
      setResult(result);
    } else {
      setResult(inputValue);
    }
  };

  const characters = inputValue.split('');

  const characterCards = characters.map((char, index) => {
    // randomize background color, only bright colors using hsl
    const backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 75%)`;
    return <CharacterCard key={index} character={char} backgroundColor={backgroundColor} onDelete={() => {handleDelete(char)}} />;
  });

  const hasDuplicates = (str: string) => {
    return new Set(str).size !== str.length;
  };

  const originalString = <p className="mb-4">Original string: {inputValue}</p>;
  const resultantString = (
    <p className="mb-4">
      Resultant string: {result} {hasDuplicates(result) ? '' : <span className="text-green-500">(Success)</span>}
    </p>
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Screen 2</h1>
      {originalString}
      {resultantString}
      <div className="flex flex-wrap mb-4">{characterCards}</div>
      <button className="bg-blue-500 text-white p-2 rounded-md mr-4" onClick={handleBack}>
        Back
      </button>
    </div>
  );
};

export default Screen2;
