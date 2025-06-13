"use client";

import { FaRegHeart } from "react-icons/fa";

//  Blog Data
const blogPosts = [
  {
    id: 1,
    image: "https://img.freepik.com/premium-photo/plate-with-paleo-diet-food-boiled-eggs-avocado-cucumber-nuts-cherry-strawberries-paleo-breakfast_2829-3702.jpg",
    category: "Nutrition",
    title: "Top 10 Superfoods You Should Add to Your Diet",
    author: "Sadia Amin",
    likes: 102,
    description:
      "Explore nutrient-dense superfoods that boost immunity, improve gut health, and energize your lifestyle.",
  },
  {
    id: 2,
    image: "https://www.myprotein.com/images?url=https://blogscdn.thehut.net/app/uploads/sites/478/2020/03/alternative-weights-feature-1_1585154202.jpg&auto=avif&width=1200&fit=crop",
    category: "Fitness",
    title: "5 Quick Home Workouts for Busy People",
    author: "Daniel Rahman",
    likes: 89,
    description:
      "Discover time-efficient workout routines that help you stay fit even on your busiest days, no gym needed.",
  },
  {
    id: 3,
    image: "https://t3.ftcdn.net/jpg/11/21/77/50/360_F_1121775061_VkWHOuRrLIpO2qlWjqgk60ysVCHXBClZ.jpg",
    category: "Mindfulness",
    title: "How Mindful Breathing Transforms Your Day",
    author: "Ariana Patel",
    likes: 120,
    description:
      "Learn how simple breathing techniques can reduce stress, increase focus, and elevate your mental well-being.",
  },
];

const BlogPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-100 to-green-50 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 pt-8">Nutryvo Blog</h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Stay inspired with expert tips, healthy habits, and practical advice to improve your wellness journey.
        </p>
      </section>

      {/* Blog Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition bg-white"
            >
              <img
                src={post.image}
                alt={post.title}
                
                className=" w-full h-48 object-cover"
              />

              <div className="p-6 space-y-3">
                <span className="inline-block bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>

                <h2 className="text-xl font-semibold text-gray-800 hover:text-green-700 transition">
                  {post.title}
                </h2>

                <p className="text-gray-600 text-sm">
                  {post.description.length > 100
                    ? post.description.slice(0, 80) + "..."
                    : post.description}
                </p>

                <div className="flex justify-between items-center pt-4">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 gap-1">
                    <FaRegHeart className="text-red-400" />
                    {post.likes}
                  </div>
                </div>

                <div className="pt-4">
                  <button className="text-green-600 hover:text-green-800 font-medium text-sm cursor-pointer">
                    Read more →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
