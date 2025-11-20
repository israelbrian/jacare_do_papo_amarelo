import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaRedo } from "react-icons/fa";
import Confetti from "react-confetti";
import useWindowSize from "../../hooks/useWindowSize";

const GameWinModal = ({ onRetry }) => {
  const { width, height } = useWindowSize();
  return (
    <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center z-50 animate-fade-in">
      <Confetti width={width} height={height} />
      {/* <h2 className="text-5xl font-black text-white mb-8 [text-shadow:2px_2px_4px_#000]">
        Parabéns 🥳
      </h2> */}
      <h2 className="text-5xl font-black text-white mb-8 [text-shadow:2px_2px_4px_#000]">
        Você Venceu!
      </h2>
      <div className="flex gap-4">
        <Link
          to="/home"
          className="text-white p-4 rounded-full bg-brand-green hover:bg-brand-green-light transition-colors duration-300 shadow-lg"
        >
          <FaArrowLeft size={24} />
        </Link>
        <button
          onClick={onRetry}
          className="text-white p-4 rounded-full bg-brand-green hover:bg-brand-green-light transition-colors duration-300 shadow-lg"
        >
          <FaRedo size={24} />
        </button>
      </div>
    </div>
  );
};

export default GameWinModal;
