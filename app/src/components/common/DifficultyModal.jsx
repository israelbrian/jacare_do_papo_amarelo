import React from "react";

const DifficultyModal = ({ onSelectDifficulty }) => {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center z-50 animate-fade-in">
      <h2 className="text-5xl font-black text-white text-center mb-8 [text-shadow:2px_2px_4px_#000]">
        Escolha a Dificuldade
      </h2>
      <div className="flex gap-4">
        <button
          onClick={() => onSelectDifficulty("facil")}
          className="text-white text-2xl font-bold p-4 px-8 rounded-lg bg-brand-green hover:bg-brand-green-light transition-colors duration-300 shadow-lg"
        >
          Fácil
        </button>
        <button
          onClick={() => onSelectDifficulty("desafiador")}
          className="text-white text-2xl font-bold p-4 rounded-lg bg-red-700 hover:bg-red-500 transition-colors duration-300 shadow-lg"
        >
          Desafiador
        </button>
      </div>
    </div>
  );
};

export default DifficultyModal;
