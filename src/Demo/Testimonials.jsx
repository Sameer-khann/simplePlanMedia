import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { SiComma } from "react-icons/si";
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const testimonials = [
  {
    id: 1, name: "John Doe",
    text: "It is nice to be on an international platform where there are teachers from around the world.",
    imgUrl: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 2, name: "Jane Smith",
    text: "The best thing about these classes is that they are live and interactive. They have classes which help us to learn specialties and famous activities from other countries as well.",
    imgUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 3, name: "Michael Lee",
    text: "As a student, I get to explore and learn about the different cultural specialties of another country with native teachers.",
    imgUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 4, name: "Emily Davis",
    text: "The best thing about these classes is that they are live and interactive. They have classes which help us to learn specialties and famous activities from other countries as well.",
    imgUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 5, name: "Chris Brown",
    text: "It is nice to be on an international platform where there are teachers from around the world The best thing about these classes is that they are live and interactive. They have classes which help us to learn specialties and famous activities from other countries",
    imgUrl: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalTestimonials = testimonials.length;

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalTestimonials) % totalTestimonials);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
  };


  return (
    <>
      <div className="text-start py-10 px-5">
        <motion.div
         variants={fadeIn("left", 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false, amount:0.4}} className='text-4xl  font-title font-extrabold text-[#2430A0]'>
          Love from community
        </motion.div>
      </div>
      <div className="relative flex flex-col items-center justify-center w-full h-[500px]  overflow-hidden">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 z-50 transform -translate-y-1/2 p-3   text-indigo-600 rounded-fullhover:bg-indigo-800 transition"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 z-50 top-1/2 transform -translate-y-1/2 p-3  text-indigo-600 rounded-full  hover:bg-indigo-800 transition"
        >
          <FaChevronRight />
        </button>

        {/* Testimonial Cards */}
        <div className="relative flex items-center justify-center w-full h-full">
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeIndex;
            const position =
              (index - activeIndex + totalTestimonials) % totalTestimonials;
            const offset = position === totalTestimonials - 1 ? -1 : position;

            return (
              <div
                key={testimonial.id}
                className={`absolute flex flex-col border h-[330px] w-[330px] items-center justify-center rounded-lg p-6 shadow-lg duration-500  ${isActive
                  ? "bg-blue-800 text-white scale-105 shadow-2xl"
                  : "bg-white text-gray-700 scale-95"
                  }`}
                style={{
                  // height: isActive ? "300px" : "300px", // Active card is taller
                  transform: `translateX(${offset * 400}px)`,
                  zIndex: isActive ? 10 : 1,
                  opacity: isActive ? 1 : 0.5,
                }}
              >
                <div className="flex flex-col items-start ">

                  <div className="flex flex-col items-center h-60  justify-between">
                    <div className="relative w-full flex items-center justify-center">
                      <div className={`absolute top-0 left-0 flex rotate-180 text-3xl font-bold text-start ${isActive
                        ? " text-yellow-500 "
                        : "bg-white text-gray-700 scale-95"
                        }`}>
                        <SiComma />
                        <SiComma className="-ml-3" />
                      </div>

                      <div className="w-20 h-20 rounded-full overflow-hidden mb-2 ">
                        <img src={testimonial.imgUrl} alt="" className="h-full w-full object-cover " />
                      </div>
                    </div>
                    <div className="h-36">
                      <p className="text-xl font-bold mb-2 font-custom">{testimonial.name}</p>
                      <p className={`text-sm text-center leading-relaxed font-headcustom
                    ${isActive
                          ? " text-gray-200 "
                          : " text-gray-700 scale-95"
                        }
                      `}>{testimonial.text}</p>
                    </div>
                  </div>
                </div>
              </div>

            );
          })}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
