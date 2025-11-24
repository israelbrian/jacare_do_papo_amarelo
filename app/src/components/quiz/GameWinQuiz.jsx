import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaRedo } from "react-icons/fa";
import Confetti from "react-confetti";
import useWindowSize from "../../hooks/useWindowSize";

const GameWinQuiz = ({ score, onRetry }) => {
  const { width, height } = useWindowSize();
  return (
    <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center z-50 animate-fade-in px-4">
      <Confetti width={width} height={height} />
      <h2 className="text-3xl 2xl:text-5xl font-black text-white mb-4 text-center [text-shadow:2px_2px_4px_#000]">
        Você Venceu! 🥳
      </h2>
      <p className="text-xl 2xl:text-2xl text-white mb-8 text-center [text-shadow:1px_1px_2px_#000]">
        Você acertou {score} questões!
      </p>
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

export default GameWinQuiz;
