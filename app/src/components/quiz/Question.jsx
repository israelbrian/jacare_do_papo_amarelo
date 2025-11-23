import React from "react";

const Question = ({ question }) => {
  return (
    <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-4 text-center">
      <p className="text-xl font-semibold text-gray-800">PERGUNTA:</p>
      <p className="text-lg text-gray-700 mt-2">{question}</p>
    </div>
  );
};

export default Question;
