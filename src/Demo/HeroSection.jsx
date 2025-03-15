import React from 'react';
import shap1 from '../assets/shap1.svg'; // Shape background image
import pic from '../assets/pic.jpg'; // Main image
import FeaturesSection from '../sectionsPart/FeaturesSection';
import Discover from './Discover';
import Browsebycategory from './Browsebycategory';
import ReasonsToChoose from './ReasonsToChoose';
import Testimonials from './Testimonials';
import MeetOurTeachers from './Meetourteachers';
import Certified from './Certified'
import Ourblogs from './Ourblogs';
import Footer from './Footer';
import over1 from '../assets/over1.svg'
import over2 from '../assets/over2.svg'
import img1 from '../assets/image.png';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import { MessagesSquare } from 'lucide-react';
import { Heart } from 'lucide-react';
const HeroSection = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row items-center justify-between h-auto lg:h-[600px] px-6 lg:px-16 py-20 w-full font-pppangram">
        {/* Left Section */}
        <div className="flex flex-col text-start h-full sm:text-start sm:items-start items-center w-full lg:w-1/2 ">
          <motion.div 
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.7}}
          className="flex flex-wrap justify-center lg:justify-start font-title space-x-2 items-center">
            <h1 className="text-3xl font-bold text-blue-900 ">Hobbies</h1>
            <span className="text-3xl"><div  className="text-red-600">< Heart /></div></span>
            <h1 className="text-3xl font-bold text-blue-900">Happiness</h1>
            <span className="text-3xl"><div  className="text-red-600">< Heart /></div></span>
            <h1 className="text-3xl font-bold text-blue-900">Home</h1>
          </motion.div>
          <p className="text-lg text-gray-700 mt-5 leading-relaxed">
            A Nordic startup which brings incredibly interesting hobbies from around the world to people of all ages.
          </p>
          <motion.div
           variants={fadeIn("down", 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false, amount:0.7}}
          className="flex flex-col justify-center gap-2 sm:flex-row items-center  mt-6  sm:space-y-0 w-full ">
            <input
              type="text"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 w-full lg:w-2/3 border-2 border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-900 w-full lg:w-1/2 text-white py-2 px-6 rounded-full flex items-center justify-center hover:bg-blue-600 transition lg:-ml-10 gap-2 text-nowrap uppercase">
              Start Exploring <FaRegArrowAltCircleRight className='mt-1x text-xl'/>
            </button>
          </motion.div>
        </div>
        <div className='h-[500px] w-[500px] absolute -bottom-64 -left-60 -z-10'>
          <img src={over1} alt="" className='w-full h-full object-cover' />
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex relative items-center justify-center w-full h-[80vh] lg:w-1/2 mt-10 lg:mt-0 ">
          {/* Shape Background */}
          <div className="absolute h-[550px] w-[500px]  -z-10">
            <img src={over2} alt="Shape" className="w-full h-full object-cover" />
          </div>
          <div className="absolute h-[400px] w-[470px]  z-15">
            <img src={img1} alt="Shape" className="w-full h-full object-cover" />
          </div>
        </div>
          <div className='absolute -bottom-4 right-5 bg-blue-950 h-12 w-12 rounded-full flex justify-center items-center text-white'><MessagesSquare /></div>
        

      </section>
      <section>
        <motion.div
         variants={fadeIn("left", 0.3)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false, amount:0.3}}>
          <h1 className='text-4xl font-title font-bold text-[#2430A0]  '>Explore. Enroll. Have Fun. Repeat - <br />
            here hobby meets happiness</h1>

        </motion.div>
        <section>
          <motion.div
           variants={fadeIn("right", 0.4)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false, amount:0.4}}>
          <FeaturesSection />
          </motion.div>
        </section>
      </section>
      <section>
        <Discover />
      </section>
      <section>
        <Browsebycategory />
      </section>
      <section>
        <ReasonsToChoose />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <MeetOurTeachers />
      </section>
      <section>
        <Certified />
      </section>
      <section>
        <Ourblogs />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default HeroSection;
