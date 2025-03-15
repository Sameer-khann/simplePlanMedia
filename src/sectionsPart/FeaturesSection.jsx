import React from 'react';
import { FaPalette, FaChalkboardTeacher, FaLaptop, FaMoneyBillWave } from 'react-icons/fa';

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaPalette className="text-6xl text-red-500" />, // Red
      title: 'Learn something new',
      description: 'Explore your passion and go beyond the physical and mental boundaries of time, age, gender or geography.',
    },
    {
      icon: <FaChalkboardTeacher className="text-6xl text-yellow-500" />, // Yellow
      title: 'Skilled & Passionate Teachers',
      description: 'We offer interactive classes by experts who are qualified and trusted.',
    },
    {
      icon: <FaLaptop className="text-6xl text-green-500" />, // Green
      title: 'Take classes anytime, anywhere',
      description: 'Join sessions at your own convenience and pace, from the comforts of your home.',
    },
    {
      icon: <FaMoneyBillWave className="text-6xl text-blue-500" />, // Blue
      title: 'Pay as you go',
      description: 'No enrollment fee for our classes. You only pay for the classes that you take. Your payment is safe and secure with us.',
    },
  ];

  return (
    <div className="py-20 px-10 md:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((feature, index) => (
          <div
          key={index}
          className="flex flex-col items-center text-center p-10 rounded-lg  hover:shadow-xl transition duration-300 "
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-fontMPLUSRounded  font-semibold mb-2 text-[#2a38b5] text-wrap px-3">{feature.title}</h3>
            <p className="text-sm text-gray-500 font-sans">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
