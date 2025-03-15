import React from "react";
import { FaRegArrowAltCircleRight, FaFacebookSquare, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import { Heart } from 'lucide-react';

import footerImg from '../assets/footer.jpeg'

const Footer = () => {
  return (
    <div>
      {/* Section 1 */}
      <section className="my-20">
        <motion.div 
         variants={fadeIn("up", 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false, amount:0.7}}className="bg-[#FB7356] rounded-lg lg:rounded-full px-8 py-10 md:px-20 md:py-16 lg:px-36 lg:py-20">
          <motion.div
           variants={fadeIn("left", 0.6)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false, amount:0.7}} className="text-2xl md:text-3xl lg:text-4xl font-title font-extrabold text-white  px-4 md:px-10 lg:px-20 text-center">
            <h1>Start learning new skills today and pursue your passion</h1>
          </motion.div>
          <motion.div
           variants={fadeIn("top", 0.6)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false, amount:0}} className="text-white text-sm md:text-lg font-title font-extrabold mt-5 text-center">
            Join the community of global learners and start exploring today.
          </motion.div>
          <motion.div 
           variants={fadeIn("top", 0.6)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:true, amount:0}}className="flex flex-col md:flex-row items-center gap-4 md:gap-2 justify-center mt-5 w-full px-4 md:px-20 lg:px-32">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="border border-x-white bg-transparent text-white placeholder:text-white px-5 py-2 rounded-full w-full md:w-2/3"
            />
            <button className="text-[#FB7356] bg-white px-5 py-2 rounded-full w-full md:w-1/3 font-semibold flex items-center justify-center gap-3">
              Get Started <FaRegArrowAltCircleRight className="mt-1" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Section 2 */}
      <section className="flex flex-wrap justify-between items-start gap-1 sm:gap-0 p-10 border-t">
        {/* Categories */}
        <div className="w-full sm:w-1/2 lg:w-1/5 text-center lg:text-start mb-5">
          <h1 className="text-xl font-semibold font-title text-indigo-800 mb-2">Class Categories</h1>
          <div className="text-gray-500 font-custom text-sm flex flex-col gap-1">
            <p>Language</p>
            <p>Cooking</p>
            <p>Music</p>
            <p>Arts & Craft</p>
            <p>Yoga</p>
            <p>Academic</p>
            <p>Back to Roots</p>
            <p>Funteresting</p>
          </div>
        </div>

        {/* Company */}
        <div className="w-full sm:w-1/2 lg:w-1/5 text-center lg:text-start mb-5 ">
          <h1 className="text-xl font-semibold font-title text-indigo-800 mb-2">Company</h1>
          <div className="text-gray-500 font-custom text-sm flex flex-col gap-1">
            <p>About</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Contact</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Refund Policy</p>
          </div>
        </div>

        {/* Learn */}
        <div className="w-full sm:w-1/2 lg:w-1/5 text-center lg:text-start mb-5">
          <h1 className="text-xl font-semibold font-title text-indigo-800 mb-2">Learn</h1>
          <div className="text-gray-500 font-custom text-sm flex flex-col gap-1">
            <p>All Classes</p>
          </div>
        </div>

        {/* Teach */}
        <div className="w-full sm:w-1/2 lg:w-1/5 text-center lg:text-start mb-5">
          <h1 className="text-xl font-semibold font-title text-indigo-800 mb-2">Teach</h1>
          <div className="text-gray-500 font-custom text-sm flex flex-col gap-1">
            <p>Become a Teacher</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/5">
          <img
            src={footerImg}
            alt="Sell Your Products"
            className="w-full h-auto object-contain rounded-md"
          />
          <p className="text-gray-600 text-sm text-center mt-2">Sell your products with us</p>
        </div>
      </section>

      {/* Section 3 */}
      <div className="flex flex-wrap justify-between items-center px-4 py-4 border-t">
        <div className="w-full sm:w-1/3 text-center sm:text-start text-gray-600 text-sm">
          <p>Project 2025. All rights reserved</p>
        </div>
        <div className="w-full sm:w-1/3 text-center text-gray-600 text-sm mt-2 ">
          <p className="flex justify-center items-center gap-2 ">Made with <div  className="text-red-600">< Heart /></div> by SimplePlan</p>
        </div>
        <div className="w-full sm:w-1/3 flex justify-center sm:justify-end items-center gap-2 text-gray-600 mt-2">
          <FaFacebookSquare />
          <AiFillInstagram />
          <FaLinkedin />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
