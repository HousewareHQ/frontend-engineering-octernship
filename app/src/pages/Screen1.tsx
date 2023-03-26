import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Screen1: React.FC = () => {
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
    <div className="relative font-inter flex flex-col justify-center items-center min-h-screen bg-gradient-to-tr from-blue-300 via-emerald-400 to-indigo-200 text-white" >
      <div className="flex flex-col items-center lg:w-1/3 md:w-2/3 bg-zinc-900/70  p-8 shadow-md shadow-zinc-700 border-zinc-600 border-2 rounded-lg selection:bg-emerald-400/40">
        <h1 className="text-3xl font-bold mb-8">Screen 1</h1>
        <div className="flex mb-4 w-full">
          <input className="p-4 rounded-md w-full bg-zinc-900/30 outline-none text-xl" type="text" value={inputValue} onChange={handleInputChange} required aria-label="Search input"/>
        </div>
        <button className="bg-emerald-400/70 p-2 hover:bg-emerald-400/60 rounded-md" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <a href="https://github.com/doaortu/frontend-engineering-octernship-doaortu-fork" className='absolute bottom-0 right-0 text-center p-3 m-2 bg-zinc-900 hover:bg-zinc-800 font-bold'>
        @doaortu
      </a>
    </div>
  );
};