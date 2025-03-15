import "./App.css";
import Navbar from "./Demo/Navbar";
import HeroSection from "./Demo/HeroSection";

import { useEffect } from "react";
import { gsap } from "gsap";

function App() {

  useEffect(() => {
    document.addEventListener("mousemove", function(event) {
      gsap.to(".cursor", {
        x: event.x - 115,
        y: event.y - 40,
        duration: 1, // Slow trailing effect
        ease: "power2.out" // Smooth movement
      });
    });
  
    document.addEventListener("mousemove", function(event) {
      gsap.to(".cursor2", {
        x: event.x - 115,
        y: event.y - 40,
        duration: 1.5, // Slow trailing effect
        ease: "power2.out" // Smooth movement
      });
    });
  
    document.addEventListener("mousemove", function(event) {
      gsap.to(".cursor3", {
        x: event.x - 115,
        y: event.y - 40,
        duration: 2, // Slow trailing effect
        ease: "power2.out" // Smooth movement
      });
    });
  },[])

  return (
    <>
      <div className="h-[13px] w-[13px] bg-[#6bc9f1] rounded-full fixed z-[100] cursor"></div>
      <div className="h-[10px] w-[10px] bg-[#6bc9f1] rounded-full fixed z-[100] cursor2"></div>
      <div className="h-[7px] w-[7px] bg-[#6bc9f1] rounded-full fixed z-[100] cursor3"></div>
      <Navbar />
      <HeroSection />
    </>
  );
}

export default App;
