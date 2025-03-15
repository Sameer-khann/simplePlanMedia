// src/components/Card.jsx
import React from "react";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa6";

const Card = ({ price, originalPrice, currency, language, imgUrl, marked}) => {
  return (
    <div className="bg-[#E9EFFF]  overflow-hidden max-w-xs rounded-t-sm font-fontMPLUSRounded hover:scale-110 transition-all duration-300 ease-in-out">
      <div className="relative">
        <img
          src={imgUrl}
          alt="Class"
          className="w-full h-40 object-cover"
        />
        <span className="absolute top-2 left-2 bg-white text-indigo-500 text-xs font-bold px-2 py-1 rounded">
          60% OFF
        </span>
        <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow">
          {marked ? <FaBookmark className="text-red-400" /> : <CiBookmark />}
        </button>
      </div>
      <div className="p-4 text-start">
        <span className="text-sm text-indigo-500 font-bold uppercase">
          {language}
        </span>
        <h3 className="font-bold text-gray-800 mt-1">
          Class name - Lorem ipsum sit elit varsi lectus sit amet
        </h3>
        <p className="text-sm text-gray-600 mt-2 font-bold">
          <span className="font-normal">by</span> John Doe <span className="text-yellow-500 ml-2">★ 4.7</span>
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper...
        </p>
       
      </div>
      <div className="flex bg-[#1748d0] justify-between items-center mt-4 px-4 rounded-b-sm">
          <div>
            <span className="text-lg text-white font-bold">{currency}{price}</span>
            <span className="text-sm text-white line-through ml-2">
              {currency}{originalPrice}
            </span>
          </div>
          <button className="text-white text-sm px-4 py-2 rounded">
            Enroll now
          </button>
        </div>
    </div>
  );
};

export default Card;
