import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaRedo } from "react-icons/fa";
import RainEffect from "../common/RainEffect";

const GameOverQuiz = ({ score, onRetry }) => (
  <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center z-50 animate-fade-in">
    <RainEffect />
    <h2 className="text-5xl font-black text-white mb-4 [text-shadow:2px_2px_4px_#000000]">
      Você Perdeu!
    </h2>
    <p className="text-2xl text-white mb-8 [text-shadow:1px_1px_2px_#000]">
      Você acertou {score} questões.
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

export default GameOverQuiz;
