"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionTitle from "../SharedItems/SectionTitle";

const HealthyChoices = [
  {
    id: 1,
    image: "https://images.everyplate.com/w_3840,q_auto,f_auto,c_limit,fl_lossy/hellofresh_website/us/landing-pages/gr0/18+Tips+For+Eating+On+Budget+EP/budget3.webp",
    img: "/assets/portfolio-custom-icon-4.png",
    title: "Wholesome Meals",
    description: "Fuel your body with balanced meals that support energy and overall daily wellness."
  },
  {
    id: 2,
    image: "https://rockytopsportsworld.com/wp-content/uploads/2016/06/Young-woman-drinking-water-with-the-sun-in-the-background-768x513.jpg",
    img: "/assets/portfolio-custom-icon-1-1.png",
    title: "Stay Hydrated",
    description: "Drink enough water daily to keep your body active, refreshed, and functioning well."
  },
  {
    id: 3,
    image: "https://news.northeastern.edu/wp-content/uploads/2023/10/sleeping_1400.jpeg?w=1024",
    img: "/assets/portfolio-custom-icon-3-2.png",
    title: "Sleep Better",
    description: "Get quality sleep every night to restore energy and improve overall mental health."
  },
  {
    id: 4,
    image: "https://cdn.peoffice.co.uk/wp-content/uploads/family-jogging-together-for-active-lifestyle.jpg",
    img: "/assets/portfolio-custom-icon-6.png",
    title: "Active Lifestyle",
    description: "Move regularly with light exercises that boost strength, energy, and everyday fitness."
  }
];


const HealthyMove = () => {
  return (
    <div
      className="relative mt-16 md:mt-20 lg:mt-32 h-[650px] bg-gray-100">

      {/* Content */}
      <div className="relative text-center pt-16 px-6">
        <SectionTitle 
        heading="Eat Well. Move Smart. Live Better"
        subHeading="Discover simple, effective ways to improve your health—one smart choice at a time."
        ></SectionTitle>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          className="max-w-7xl mx-auto mt-12"
        >
          {HealthyChoices?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="max-w-sm bg-white overflow-hidden">
               
                <div className="relative group">
                  <img src={item.image} alt={item.name} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" />
                
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  
                 <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 rounded-full border-4 border-white bg-white">
                    <img
                    className="w-16 h-16 object-contain p-2"
                    src={item?.img}
                    alt={item?.title}
                    />
                 </div>

                  
                </div>

                {/* Text Section */}
                <div className="p-6 text-center mt-6">
                  <h2 className="text-xl font-bold font-barlow text-gray-800">{item.title}</h2>
                  <p className="text-gray-600 mt-3">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HealthyMove;