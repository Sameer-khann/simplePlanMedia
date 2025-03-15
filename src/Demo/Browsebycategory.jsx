// src/App.jsx
import React, { useState } from "react";
import CategoryBox from "../components/ui/CategoryBox";
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const categories = [
  {
    id: 1,
    title: "Language",
    image: "https://images.unsplash.com/photo-1433888104365-77d8043c9615?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhbmdhdWdlJTIwY29sb3JmdWwlMjBraWRzfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    title: "Cooking",
    image: "https://images.unsplash.com/photo-1518291344630-4857135fb581?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGNvb2tpbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "Music",
    image: "https://plus.unsplash.com/premium_photo-1682125896993-12a1758b6cb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fE11c2ljfGVufDB8fDB8fHww",
  },
  {
    id: 4,
    title: "Arts & Craft",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QXJ0cyUyMCUyNiUyMENyYWZ0fGVufDB8fDB8fHww",
  },
  {
    id: 5,
    title: "Yoga",
    image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fFlvZ2F8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    title: "Academics",
    image: "https://images.unsplash.com/photo-1607013407627-6ee814329547?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWNhZGVtaWNzfGVufDB8fDB8fHww",
  },
  {
    id: 7,
    title: "Back to Roots",
    image: "https://images.unsplash.com/photo-1525996250065-6087ee430051?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fEJhY2slMjB0byUyMFJvb3RzfGVufDB8fDB8fHww",
  },
  {
    id: 8,
    title: "Funteresting",
    image: "https://images.unsplash.com/photo-1485163819542-13adeb5e0068?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbG9yc3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

const Browsebycategory = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="h-full lg:h-[700px] p-6 py-20">
      <motion.div
       variants={fadeIn("right", 0.2)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once:false, amount:0.7}} className='py-10 text-4xl text-center sm:text-start font-title font-extrabold text-[#2430A0]  '>
        Browse by category
      </motion.div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
          >
            <CategoryBox
              image={category.image}
              title={category.title}
              isActive={activeCategory === category.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browsebycategory;
