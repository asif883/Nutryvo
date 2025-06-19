"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../CSS/swiper.css";
import "../../CSS/bannerFont.css";

const bannerData = [
  {
    title: "Eat Smart, Live Strong",
    description:
      "Personalized nutrition plans powered by AI to help you feel your best—every day, every meal.",
    img: "/assets/nutryvo-1.png",
  },
  {
    title: "Healthy Starts with Nutryvo",
    description:
      "No guesswork—just science-backed meal plans made for your body and your goals.",
    img: "/assets/nutryvo-2.png",
  },
  {
    title: "Fuel Your Day, the Right Way",
    description:
      "Balanced, delicious, and tailored just for you. Start your health journey with Nutryvo today.",
    img: "/assets/nutryvo-3.png",
  },
];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="h-[500px] sm:h-[500px] md:h-[400px] lg:h-[600px] z-10"
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
    >
      {bannerData.map((slide, index) => (
        <SwiperSlide
          key={index}
          className="relative bg-gradient-to-r from-green-100 via-white to-green-100 pt-12"
        >
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 10 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col-reverse md:flex-row items-center justify-center h-full max-w-7xl mx-auto" 
          >
            {/* Text Content */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 10 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col justify-center items-center md:items-start text-center md:text-left text-gray-800 w-full md:w-1/2 px-2 sm:px-4"
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold font-barlow leading-snug"> 
                {slide.title}
              </h1>
              <p className="mt-1 text-gray-600 text-sm sm:text-base lg:text-lg max-w-md lg:max-w-xl">
                {slide.description}
              </p>
              <button className="w-32 sm:w-36 mt-4 sm:mt-4 px-4 py-2 text-sm sm:text-base bg-[#00C951] hover:bg-green-700 rounded text-white transition duration-300">
                Get Started
              </button>
            </motion.div>

            {/* Image */}
            <img
              className="w-full md:w-1/2 h-64 md:h-full object-contain md:object-cover"
              src={slide?.img}
              alt={slide?.title}
            />
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
