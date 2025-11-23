import React from "react";

const AnswerOption = ({ answer, isSelected, onSelect, feedbackClass }) => {
  const baseClasses =
    "w-full p-4 bg-brand-yellow-background border-2 rounded-lg cursor-pointer transition-all duration-300 flex items-center gap-4";
  const selectedClasses = isSelected
    ? "border-yellow-500 ring-2 ring-brand-yellow"
    : "border-gray-400 hover:ring-2 ring-brand-yellow";

  return (
    <div
      className={`${baseClasses} ${selectedClasses} ${feedbackClass}`}
      onClick={onSelect}
    >
      <span
        className={`md:w-6 h-6 rounded-full border-2 ${
          isSelected ? "bg-brand-yellow" : "bg-brand-yellow-background"
        } border-yellow-600`}
      ></span>
      <p className="text-gray-800 md:text-lg text-sm">{answer}</p>
    </div>
  );
};

export default AnswerOption;
