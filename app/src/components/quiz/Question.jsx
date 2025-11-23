import React from "react";

const Question = ({ question }) => {
  return (
    <div className="bg-brand-yellow-background border-2 border-yellow-400 rounded-lg p-4 text-center">
      <p className="md:text-xl font-semibold text-gray-800">PERGUNTA:</p>
      <p className="md:text-lg text-sm text-gray-700 mt-2">{question}</p>
    </div>
  );
};

export default Question;
