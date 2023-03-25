import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Screen1: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (inputValue.trim() === '') {
      alert('Please provide a non-empty value');
      return;
    }
    navigate(`/screen2/${inputValue}`);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Screen 1</h1>
      <div className="flex mb-4">
        <input className="p-2 border rounded-md w-full" type="text" value={inputValue} onChange={handleInputChange} />
      </div>
      <button className="bg-blue-500 text-white p-2 rounded-md" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Screen1;