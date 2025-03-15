// src/components/CategoryBox.jsx
import React from "react";

const CategoryBox = ({ image, title }) => {
  return (
    <div
      className="group flex flex-col items-center justify-center rounded-lg p-4 bg-white  hover:border-blue-400 cursor-pointer transition-all duration-300  hover:scale-110  ease-in-out"
    >
      <img
        src={image}
        alt={title}
        className="w-64 h-48 object-cover rounded-3xl shadow-lg"
      />
      <h3
        className="text-lg font-semibold mt-4 text-gray-600 group-hover:text-blue-600 transition-colors duration-300"
      >
        {title}
      </h3>
      <div
        className="mt-2 border-2 w-full px-10 border-gray-200 group-hover:border-blue-600 transition-colors duration-300"
      />
    </div>
  );
};

export default CategoryBox;
