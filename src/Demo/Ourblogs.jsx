import React from 'react'
import { FaRegComment } from "react-icons/fa6";
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import blog1 from '../assets/blog1.jpeg';
import blog2 from '../assets/blog2.jpeg';
import blog3 from '../assets/blog3.jpeg';



const cards = [
    {
      title: "Blog name - Lorem ipsum dolor sit amet, et varius et consectetur",
      dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...",
      imgUrl: blog1,
      count: 0,
    },
    {
      title: "Blog name - Tips for Effective Learning",
      dis: "Discover essential tips and strategies for effective learning and personal development...",
      imgUrl: blog2,
      count: 12,
    },
    {
      title: "Blog name - Benefits of Online Education",
      dis: "Learn about the advantages of online education and how it can transform your learning experience...",
      imgUrl: blog3,
      count: 0,
    },
  ];
  


  const BlogCard = ({ title, dis, imgUrl, count }) => {
    return (
      <div className="border shadow-md overflow-hidden max-w-xs rounded-sm bg-white hover:scale-110 transition-all duration-300 ease-in-out">
        {/* Image Section */}
        <div className="relative">
          <img
            src={imgUrl}
            alt="Class"
            className="w-full h-40 object-cover"
          />
          <span className="absolute top-2 left-2 bg-white text-red-500 text-xs font-bold px-2 py-1 rounded">
            Category 01
          </span>
        </div>
  
        {/* Content Section */}
        <div className="p-4 text-start">
          <h3 className="font-bold text-gray-800 mt-1 text-sm leading-tight">
            {title}
          </h3>
          <p className="text-xs text-gray-500 mt-2">
           {dis}
          </p>
        </div>
  
        {/* Divider */}
        <div className="border-t border-gray-300 mx-4"></div>
  
        {/* Footer Section */}
        <div className="flex justify-between items-center px-4 py-3">
          <span className="text-sm text-gray-500 font-medium">
            Publisher name
          </span>
          <button className=" text-gray-500 text-sm px-2 py-2 flex items-center gap-1">
          <FaRegComment />{count}
          </button>
        </div>
      </div>
    );
  };
  

const Ourblogs = () => {
  return (
    <>
      <div className="p-6 h-full lg:h-[700px]">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-wrap gap-5 justify-between items-center mb-8">
          <motion.div
           variants={fadeIn("left", 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false, amount:0.7}} className="text-start py-10 flex items-center justify-center gap-3">
            <h1 className='text-4xl font-title font-extrabold  text-[#2430A0]'>
            Our blogs
            </h1>
            <p className="text-xs text-red-500 font-semibold uppercase mt-3">
              Show All
            </p>
          </motion.div>
        </header>
        <div
         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <BlogCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Ourblogs
