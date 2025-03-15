// src/components/ReasonsToChoose.jsx
import React from "react";
import { FaChalkboardTeacher, FaGlobe, FaMoneyBillWave } from "react-icons/fa";
import { MdComputer, MdGroups, MdOutlineColorLens } from "react-icons/md";
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const reasons = [
  {
    icon: <MdComputer size={70} className="text-blue-500" />,
    title: "Interactive live online classes at your convenient time slots",
    color: "text-blue-500",
  },
  {
    icon: <MdGroups size={70} className="text-green-500" />,
    title: "Learning from passionate talented and trusted teachers",
    color: "text-green-500",
  },
  {
    icon: <FaGlobe size={70} className="text-red-500" />,
    title: "Cross-country sharing of unique hobbies from across the world",
    color: "text-red-500",
  },
  {
    icon: <MdOutlineColorLens size={70} className="text-purple-500" />,
    title: "Age no bar for enrolling into your cherished hobby classes",
    color: "text-purple-500",
  },
  {
    icon: <FaMoneyBillWave size={70} className="text-yellow-500" />,
    title: "Transparent payment options with structured fee plans",
    color: "text-yellow-500",
  },
  {
    icon: <FaChalkboardTeacher size={70} className="text-orange-500" />,
    title: "Revival of traditional arts and nurturing traditional art forms",
    color: "text-orange-500",
  },
];

const ReasonsToChoose = () => {
  return (
    <div className="py-40 px-6 w-full"> 
      <motion.div 
       variants={fadeIn("up", 0.2)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once:false, amount:0.7}}className="text-4xl text-center sm:text-start py-10 font-title font-extrabold text-[#2430A0]">
        Six reasons to choose our class
      </motion.div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="flex flex-col items-start text-center bg-white p-6 rounded-lg transition-shadow duration-300"
          >
            <motion.div
            variants={fadeIn("up", 0.2)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{once:false, amount:0.7}}  className={reason.color}>{reason.icon}</motion.div>
            <motion.div
            variants={fadeIn("down", 0.2)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{once:false, amount:0.7}}  className="text-lg text-start font-semibold mt-4 text-blue-900">
              {reason.title}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReasonsToChoose;
