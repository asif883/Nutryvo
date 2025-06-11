"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { Rating, Star } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const reviews = [
  {
    "id": 1,
    "name": "Sarah Johnson",
    "image": "/assets/reviewers/sarah.jpg",
    "description": "Nutryvo has completely changed the way I approach my diet and wellness. The personalized meal plans are easy to follow, and I love how the app tracks my progress. It motivates me to stay consistent, and I’ve seen great improvements in my energy and overall health since I started using it.",
    "rating": 5
  },
  {
    "id": 2,
    "name": "Michael Lee",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrsw8YQ4IYTCnA3BHrrKHqILpDjT7LunLZGg&s",
    "description": "This app is packed with useful features that help me stay focused on my nutrition goals. The food tracking and recipe suggestions make it simple to maintain a balanced diet. I appreciate the clear insights and friendly reminders, which keep me motivated and accountable throughout the week.",
    "rating": 4
  },
  {
    "id": 3,
    "name": "Ayesha Khan",
    "image": "/assets/reviewers/ayesha.jpg",
    "description": "Nutryvo’s user-friendly design and detailed nutrition insights have been a game-changer for me. The app provides excellent guidance and helps me make healthier choices every day. I especially love the progress charts and daily tips, which keep me informed and motivated on my wellness journey.",
    "rating": 5
  },
  {
    "id": 4,
    "name": "David Smith",
    "image": "/assets/reviewers/david.jpg",
    "description": "Overall, Nutryvo is a solid app that has helped me better understand my nutrition habits. While I wish it had more customization options for specific diets, it still provides valuable feedback and keeps me on track. It’s been a useful tool for improving my eating habits over time.",
    "rating": 3
  }
]

const myStyles = {
  itemShapes: Star,
  activeFillColor: '#ffffff',
  inactiveFillColor: '#ffffff'
};

const Review = () => {
  return (
    <div
      className="relative mt-16 md:mt-20 lg:mt-32 h-[600px] bg-fixed"
      style={{
        backgroundImage: `url(/assets/review-bg.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/80"></div>
      {/* Content */}
      <div className="relative text-center py-16 px-6">
        <div className="text-center ">
          <h1 className="text-3xl font-semibold font-barlow text-white mb-2 uppercase">
            What Our Customers Say
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200">
            Discover how Nutryvo has helped our users achieve their nutrition and wellness goals. Real stories, honest feedback, and inspiring results from our community.
          </p>
        </div>

        <div className="mt-18 max-w-4xl lg:max-w-6xl mx-auto">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="my-8 lg:my-10 mx-12 lg:mx-24 flex flex-col items-center text-center">
                <img className='w-16 h-16 object-cover rounded-full' src={review?.image} alt="" />
                  
                  <p className="text-3xl font-semibold text-orange-400">
                    {review.name}
                  </p>
                  <p className="my-6 text-white">{review.description}</p>
                <Rating
                    value={review.rating}
                    readOnly
                    style={{ maxWidth: 120 }}
                    itemStyles={myStyles}       
                />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;
