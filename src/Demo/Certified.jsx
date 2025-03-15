import React from 'react'
import over2 from '../assets/over2.svg';
import img2 from '../assets/image2.png';
import { IoIosSquare } from "react-icons/io";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Certified = () => {
  return (
    <div className='mt-20 items-center justify-center h-full lg:h-[700px]'>
       <section className="flex flex-col lg:flex-row items-center justify-between h-auto lg:h-[650px] px-6 lg:px-16 py-10">
      {/* Left Section */}
   
      {/* Right Section */}
      <motion.div 
       variants={fadeIn("up", 0.2)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once:false, amount:0.7}}className="hidden lg:flex relative items-center justify-center w-full h-[80vh] lg:w-1/2 mt-10 lg:mt-0 ">
        {/* Shape Background */}
        <div className="absolute h-[550px] w-[500px]  -z-10">
          <img src={over2} alt="Shape" className="w-full h-full object-cover" />
        </div>
        <div className="absolute h-[315px] w-[450px]  -z-10">
          <img src={img2} alt="Shape" className="w-full h-full object-cover" />
        </div>
        {/* Main Image */}
        <div className="absolute h-[650px] w-[650px] top-5x right-0 overflow-hidden mask2 " >
          <img src="https://s3-alpha-sig.figma.com/img/23ba/792a/a96882a88fc2fec2ed5c24957fbcc303?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a~98bYDzSypBIesCp~qWQMCtGAMBToswAx6I6UtMGncOk8M2kNIQPavNCk-XdOQmv-RbIPLQ-2Zm5iwwFmZuipkXj3u3LvBLt~hungRXeXEg8f0AKb9rDCsO3h5KOI6~dL1tNLSqjEHM~etzS~QJ6Rx4pDHHrIyBjXHXl6dh4UlNAS~7emiX8B1U4G58rHofK~XE7hbVFyFn00Y~QPeRcOIxTzvQsIS3stn3koY0PzLoo4iXr7x5XdVIXiShdH8BbN02Pki8dyPr1qeCEe83BnWESufB2RBTnq9eLuZZKQzd--TVQc2K~sEmLzpCHJ3hLqKQ147fcjFG2Ly1ix3yEg__" alt="Main" className="w-full h-full object-cover" />
        </div>
      </motion.div>

      <motion.div
       variants={fadeIn("down", 0.2)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once:false, amount:0.7}} className="flex flex-col text-center sm:text-start sm:items-start items-center w-full lg:w-1/2 ">
        <motion.div
         variants={fadeIn("down", 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false, amount:0.7}} className="flex flex-wrap justify-center lg:justify-start space-x-2 items-center">
         <h1 className='text-4xl font-title font-extrabold text-blue-900 '>Become a certified teacher</h1>
        </motion.div>
        <p className="text-lg text-gray-600 mt-5 leading-relaxed ">
        We only have the best and trusted teachers from the globe. Join us if you have the skill and passion to share it.
        </p>
        <div className='flex flex-col text-start sm:items-start justify-center  mt-5 text-gray-500 font-custom'>
            <p className='flex items-center gap-2 mb-2'><span><IoIosSquare className='text-orange-400'/></span>Make your own schedule</p>
            <p className='flex items-center gap-2 mb-2'><span><IoIosSquare className='text-orange-400'/></span>Teach students on an international platform</p>
            <p className='flex items-center gap-2 mb-2'><span><IoIosSquare className='text-orange-400'/></span>Become part of an international community of passionate educators</p>
        </div>
       <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}>
          <button className="bg-blue-900 mt-5 text-white gap-2 py-3 px-6 rounded-full cursor-pointer flex items-center justify-center hover:bg-blue-600 text-nowrap uppercase">
          start teaching<FaRegArrowAltCircleRight className='mt-1' />
          </button>
       </motion.div>
       
      </motion.div>

    </section>
    </div>
  )
}

export default Certified
