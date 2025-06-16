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
      modules={[ Autoplay ]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="h-[400px] lg:h-[600px] z-10"
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
    >
      {bannerData.map((slide, index) => (
        <SwiperSlide  key={index} className="relative bg-gradient-to-r from-green-100 via-white to-green-100 pt-12">
          <motion.div 
           key={activeIndex}
           initial={{ opacity: 0, x: 100 }}
           animate={{ opacity: 1, x: 10 }}
           exit={{ opacity: 0, x: -50 }}
           transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col-reverse md:flex-row items-center justify-center h-full max-w-7xl mx-auto">

            <motion.div
               key={activeIndex}
               initial={{ opacity: 0, x: 100 }}
               animate={{ opacity: 1, x: 10 }}
               exit={{ opacity: 0, x: -50 }}
               transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col text-start text-gray-800 w-1/2"
            >
              <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold font-barlow">{slide.title}</h1>
              <p className="mt-1 lg:mt-4 text-gray-600 text-sm lg:text-lg lg:max-w-xl">{slide.description}</p>
              <button className="w-32 mt-3 lg:mt-6 px-3 lg:px-6 py-1 cursor-pointer lg:py-2 bg-[#00C951] hover:bg-green-700 rounded text-white">
                Get Started
              </button>
            </motion.div>
            <img className="w-1/2 h-full object-cover" src={slide?.img} alt={slide?.title} />
          </motion.div>
          
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
