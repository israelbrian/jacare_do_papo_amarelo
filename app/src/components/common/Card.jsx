import React from "react";

const Card = ({ card, isFlipped, isMismatched, isMatched, onClick }) => {
  const cardClasses = `
    relative w-full h-full cursor-pointer transition-transform duration-500 
    [transform-style:preserve-3d]
    ${isFlipped ? "[transform:rotateY(180deg)]" : ""}
    ${isMatched ? "opacity-50 cursor-not-allowed" : ""}
  `;

  const faceClasses = `
    absolute w-full h-full rounded-md shadow-md 
    [backface-visibility:hidden]
  `;

  const frontFaceClasses = `
    bg-brand-green-light flex items-center justify-center
    ${isMismatched ? "bg-red-500" : ""}
  `;

  const backFaceClasses = `
    bg-gray-200 [transform:rotateY(180deg)]
  `;

  return (
    <div className="w-full h-full [perspective:1000px]" onClick={onClick}>
      <div className={cardClasses}>
        <div className={`${faceClasses} ${frontFaceClasses}`}>
          {/* O verso da carta pode ter um ícone ou ser liso */}
        </div>
        <div className={`${faceClasses} ${backFaceClasses}`}>
          <img
            src={card.img}
            alt={`Carta ${card.type}`}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;