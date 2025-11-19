import React from "react";
import { FaHeart } from "react-icons/fa";

const Lives = ({ count }) => (
  <div className="flex items-center gap-2">
    <FaHeart
      size={25}
      className={count >= 1 ? "text-red-500" : "text-gray-400"}
    />
    <FaHeart
      size={25}
      className={count >= 2 ? "text-red-500" : "text-gray-400"}
    />
    <FaHeart
      size={25}
      className={count >= 3 ? "text-red-500" : "text-gray-400"}
    />
    <FaHeart
      size={25}
      className={count >= 4 ? "text-red-500" : "text-gray-400"}
    />
    <FaHeart
      size={25}
      className={count >= 5 ? "text-red-500" : "text-gray-400"}
    />
    <FaHeart
      size={25}
      className={count >= 6 ? "text-red-500" : "text-gray-400"}
    />
  </div>
);

export default Lives;