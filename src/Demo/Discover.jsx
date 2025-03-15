// src/App.jsx
import React, { useState } from "react";
import Card from "../components/ui/Card";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import discover from "../assets/discover.jpeg";

const Discover = () => {
  const [currency, setCurrency] = useState("NOK");

  const cards = [
    {
      price: 1000,
      originalPrice: 2500,
      currency: "₹",
      language: "Language",
      imgUrl: discover,
    },
    {
      price: 1499,
      originalPrice: 2499,
      currency: "₹",
      language: "Language",
      imgUrl:discover,
    },
    {
      price: 1000,
      originalPrice: 2500,
      currency: "₹",
      language: "Language",
      imgUrl: discover
    },
    {
      price: 1499,
      originalPrice: 2499,
      currency: "₹",
      language: "Language",
      imgUrl: discover
    },
  ];

  return (
    <div className="p-6 h-full lg:h-[700px]">
      <div className="w-full mx-auto">
        <header className="flex flex-wrap gap-5 justify-between items-center mb-8">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="text-start py-10"
          >
            <div className="flex justify-center items-center gap-5">
              <h1 className="text-4xl  font-title font-bold text-[#2430A0]">
                Discover classes
              </h1>
              <p className="text-xs text-red-500 font-semibold  uppercase mt-3">
                Show All
              </p>
            </div>
            <p className="text-md text-gray-500">
              Choose from a variety of classes from around the world.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex  items-center justify-center gap-2"
          >
            <span className="text-gray-600 ">Show prices in:</span>
            <div>
              <button
                onClick={() => setCurrency("NOK")}
                className={`px-3 py-1 rounded-l-full ${
                  currency === "NOK"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                NOK
              </button>
              <button
                onClick={() => setCurrency("INR")}
                className={`px-3 py-1 rounded-r-full ${
                  currency === "INR"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                INR
              </button>
            </div>
          </motion.div>
        </header>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 "
        >
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Discover;
