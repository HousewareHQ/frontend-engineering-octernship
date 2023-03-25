import React from "react";

// extends div props
interface CharacterCardProps extends React.HTMLAttributes<HTMLDivElement> {
  character: string;
  backgroundColor: string;
  onDelete: () => void;
  haveDuplicates: boolean;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, backgroundColor, onDelete, haveDuplicates: haveDuplicates, className }) => {
  return (
    <div className={`flex items-center justify-center aspect-square m-2 rounded-sm relative ${className ?? ''}`} style={{backgroundColor: backgroundColor}}>
      <div className="flex items-center justify-center text-2xl font-bold text-white">{character}</div>
      
      { haveDuplicates && 
        <button className="absolute top-0 right-0 p-2" onClick={onDelete}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      }
    </div>
  );
};

export default CharacterCard;