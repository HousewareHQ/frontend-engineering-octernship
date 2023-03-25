import React from "react";

interface CharacterCardProps {
  character: string;
  backgroundColor: string;
  onDelete: () => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, backgroundColor, onDelete }) => {
  return (
    <div className={`flex items-center justify-center h-20 w-20 m-2 rounded-full relative`} style={{backgroundColor: backgroundColor}}>
      <div className="flex items-center justify-center text-2xl font-bold text-white">{character}</div>
      <button className="absolute top-0 right-0 p-2" onClick={onDelete}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default CharacterCard;
