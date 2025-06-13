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
    img: "/assets/nutryvo-1.webp",
  },
  {
    title: "Healthy Starts with Nutryvo",
    description:
      "No guesswork—just science-backed meal plans made for your body and your goals.",
    img: "/assets/nutryvo-2.jpg",
  },
  {
    title: "Fuel Your Day, the Right Way",
    description:
      "Balanced, delicious, and tailored just for you. Start your health journey with Nutryvo today.",
    img: "/assets/nutryvo-3.webp",
  },
];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="h-[400px] lg:h-[680px] z-10"
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
    >
      {bannerData.map((slide, index) => (
        <SwiperSlide key={index} className="relative pt-10">
          <div className="absolute w-full h-full bg-gradient-to-l from-transparent to-black bg-opacity-50 text-white">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
            >
              <h1 className="text-2xl lg:text-5xl font-semibold font-barlow leading-tight font-barlow">
                {slide.title}
              </h1>
              <p className="font-barlow mt-2 text-gray-300 text-lg lg:max-w-2xl">
                {slide.description}
              </p>
              <button className="mt-4 px-6 py-2 bg-[#22C55E] text-white uppercase font-medium hover:bg-green-600 duration-300 rounded cursor-pointer">
                Get Started
              </button>
            </motion.div>
          </div>
          <img
            className="object-cover w-full h-full"
            src={slide.img}
            alt={slide.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
