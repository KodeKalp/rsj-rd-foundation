import React, { useState, useEffect } from "react";
import sudhaar from "../assets/Initiatives/Sudhaar.png";
import gyaan from "../assets/Initiatives/Gyaan.png";
import nirmaan from "../assets/Initiatives/Nirmaan.png";
import gogreen from "../assets/Initiatives/Go-Green.png";
import muskaan from "../assets/Initiatives/Muskaan.png";

const Initiatives = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1, image: sudhaar, link: "https://youtube.com" },
    { id: 2, image: gyaan, link: "https://youtube.com" },
    { id: 3, image: nirmaan, link: "https://youtube.com" },
    { id: 4, image: gogreen, link: "https://youtube.com" },
    { id: 5, image: muskaan, link: "https://youtube.com" },
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); // 5000ms = 5 seconds
    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <div className="bg-gradient-to-r from-customBlue1 to-customBlue2 text-center py-5">
      <h1 className="text-[#E35A1E] text-4xl md:text-5xl font-bold mb-6">
        OUR <span className="text-white">INITIATIVES</span>
      </h1>

      {/* Carousel */}
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={slide.id} className="min-w-full flex justify-center">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="cursor-pointer hover:scale-100 transition-transform rounded-lg"
                  onClick={() => window.open(slide.link, "_blank")}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#E35A1E] text-blue-900 rounded-full p-2 hover:bg-[#0084C2] focus:outline-none"
          onClick={prevSlide}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.354 1.646a.5.5 0 0 1 0 .708L6.707 7l4.647 4.646a.5.5 0 0 1-.708.708l-5-5a.5.5 0 0 1 0-.708l5-5a.5.5 0 0 1 .708 0z" />
          </svg>
        </button>

        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#E35A1E] text-blue-900 rounded-full p-2 hover:bg-[#0084C2] focus:outline-none"
          onClick={nextSlide}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 14.354a.5.5 0 0 1 0-.708L9.293 8 4.646 3.354a.5.5 0 1 1 .708-.708l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708 0z" />
          </svg>
        </button>
      </div>

      {/* Dots for navigation */}
      <div className="mt-2 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-[#E35A1E]" : "bg-gray-400"} cursor-pointer`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Initiatives;
