import React from "react";

const AnswerOption = ({ answer, isSelected, onSelect, feedbackClass }) => {
  const baseClasses =
    "w-full p-4 bg-yellow-100 border-2 rounded-lg cursor-pointer transition-all duration-300 flex items-center gap-4";
  const selectedClasses = isSelected
    ? "border-brand-green ring-2 ring-brand-green"
    : "border-yellow-400 hover:border-brand-green-light";

  return (
    <div
      className={`${baseClasses} ${selectedClasses} ${feedbackClass}`}
      onClick={onSelect}
    >
      <span
        className={`w-6 h-6 rounded-full border-2 ${
          isSelected ? "bg-brand-green" : "bg-gray-300"
        } border-yellow-600`}
      ></span>
      <p className="text-gray-800 text-lg">{answer}</p>
    </div>
  );
};

export default AnswerOption;
