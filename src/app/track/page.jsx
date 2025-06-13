"use client";

import { FaLeaf } from "react-icons/fa";

const TrackNutritionPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 text-gray-800 px-4">
      <div className="text-center max-w-xl space-y-6">
        <div className="flex justify-center">
          <div className="bg-green-200 text-green-700 p-4 rounded-full text-3xl shadow-lg">
            <FaLeaf />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-green-700">
          Track Nutrition
        </h1>

        <p className="text-gray-600 text-lg">
          We're working on something amazing to help you monitor your daily nutrition with ease and precision.
        </p>

        <div className="inline-block bg-white px-6 py-3 rounded-lg shadow text-green-700 font-medium mt-4">
          🚧 Coming Soon 🚧
        </div>

        <p className="text-sm text-gray-500 pt-6">
          Stay tuned! This feature is launching soon to help you eat smarter and live healthier with Nutryvo.
        </p>
      </div>
    </div>
  );
};

export default TrackNutritionPage;
