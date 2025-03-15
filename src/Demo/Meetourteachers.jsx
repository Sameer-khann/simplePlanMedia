import React, { useState, useEffect } from 'react';
import { FaAngleLeft, FaChevronRight } from 'react-icons/fa';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

import teacher1 from '../assets/teacher1.jpeg'
import teacher2 from '../assets/teacher2.jpeg'
import teacher3 from '../assets/teacher3.jpeg'

const teachersData = [
  {
    id: 1, name: "John Doe",
    subject: 'YOGA',
    imgUrl: teacher1
  },
  {
    id: 2, name: "Jane Smith",
    subject: 'ARTS & CRAFT',
    imgUrl: teacher2
  },
  {
    id: 3, name: "Michael Lee",
    subject: 'ACADEMICS',
    imgUrl: teacher3
  },
  {
    id: 4, name: "Emily Davis",
    subject: 'ACADEMICS',
    imgUrl: teacher1
  },
  {
    id: 5, name: "Chris Brown",
    subject: 'ACADEMICS',
    imgUrl: teacher2
  },
];

// TeacherCard component
const TeacherCard = ({ teacher }) => {
  return (
    <div className="border-gray-300 m-4 shadow-md rounded-tl-[120px] rounded-sm">
      <div className="flex justify-end items-end mb-4 bg-gray-600 h-[245px] w-[245px] rounded-tl-[120px] overflow-hidden">
        <img src={teacher.imgUrl} alt={teacher.name} className="w-full h-full object-cover" />
      </div>
      <div className="text-center">
        <h1 className="text-xl font-bold mb-2">{teacher.name}</h1>
        <p className="text-[rgba(255,0,109,1)] mb-2">{teacher.subject}</p>
      </div>
    </div>
  );
};

// MeetOurTeachers component
const MeetOurTeachers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCardsCount, setVisibleCardsCount] = useState(4);

  // Adjust visibleCardsCount based on screen width
  useEffect(() => {
    const updateVisibleCardsCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCardsCount(1); // Show 1 card on small screens
      } else if (window.innerWidth < 1024) {
        setVisibleCardsCount(2); // Show 2 cards on medium screens
      } else {
        setVisibleCardsCount(4); // Default to 4 cards on larger screens
      }
    };

    updateVisibleCardsCount();
    window.addEventListener("resize", updateVisibleCardsCount);
    return () => window.removeEventListener("resize", updateVisibleCardsCount);
  }, []);

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + teachersData.length) % teachersData.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % teachersData.length);
  };

  const getVisibleTeachers = () => {
    return teachersData
      .slice(activeIndex, activeIndex + visibleCardsCount)
      .concat(
        teachersData.slice(
          0,
          Math.max(0, activeIndex + visibleCardsCount - teachersData.length)
        )
      );
  };

  return (
    <div className="relative">
      <motion.div
       variants={fadeIn("left", 0.2)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once:false, amount:0.7}} className="text-start py-10 px-5 w-full">
        <h1 className="text-4xl font-title font-extrabold text-[#2430A0]">Meet Our Teachers</h1>
      </motion.div>
      <div className="relative flex flex-col items-center w-full px-4 sm:px-8">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 z-10 p-3 top-1/2 bg-gray-100 text-indigo-600 rounded-lg border-2 border-indigo-500 hover:bg-gray-300 transition sm:left-8"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute left-20 z-10 p-3 top-1/2 bg-gray-100 text-indigo-600 rounded-lg border-2 border-indigo-500 hover:bg-gray-300 transition sm:left-20"
        >
          <FaChevronRight />
        </button>

        {/* Teacher Cards */}
        <motion.div
         variants={fadeIn("right", 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false, amount:0.7}} className="flex space-x-4 overflow-hidden snap-x snap-mandatory w-full max-w-screen-lg">
          {getVisibleTeachers().map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </motion.div>

        {/* Decorative Box */}
        <div className="hidden sm:flex">
          <div className="absolute -bottom-0 right-2 bg-white bg-opacity-50 h-[400px] w-[260px] rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};



export default MeetOurTeachers;
