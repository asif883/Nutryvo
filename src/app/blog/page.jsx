"use client";

import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowDropright, IoIosArrowForward } from "react-icons/io";

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
      "Superfoods are nature’s powerhouse — nutrient-dense foods that offer maximum health benefits for minimal calories. Adding them to your diet can improve your immune system, boost energy, and promote overall well-being. For example, blueberries are loaded with antioxidants that help fight inflammation and aging. Leafy greens like spinach and kale are rich in iron, calcium, and fiber, supporting heart and bone health. Avocados are full of healthy monounsaturated fats, potassium, and vitamins C, E, and B6. Chia seeds and flaxseeds are excellent plant-based sources of omega-3 fatty acids, which support brain function. Garlic not only adds flavor but also contains allicin, a compound known for its antibacterial and cholesterol-lowering effects. Yogurt provides gut-friendly probiotics that enhance digestion and immunity. Salmon is rich in omega-3 and high-quality protein. Sweet potatoes offer beta-carotene and complex carbs for sustained energy. Nuts like almonds and walnuts are packed with good fats and antioxidants. Green tea is another powerful superfood, known for its metabolism-boosting and cancer-fighting properties. Including a variety of these superfoods in your meals ensures your body gets the essential nutrients it needs to thrive. The key is consistency—not perfection. Instead of overhauling your diet overnight, try adding two or three superfoods to your weekly meal rotation. Pair them with balanced portions of lean proteins, whole grains, and fresh vegetables for a long-lasting health transformation."
  },
  {
    id: 2,
    image: "https://www.myprotein.com/images?url=https://blogscdn.thehut.net/app/uploads/sites/478/2020/03/alternative-weights-feature-1_1585154202.jpg&auto=avif&width=1200&fit=crop",
    category: "Fitness",
    title: "5 Quick Home Workouts for Busy People",
    author: "Daniel Rahman",
    likes: 89,
    description:
      "When life gets hectic, your fitness goals shouldn’t suffer. Even with a packed schedule, staying active is possible — and essential. Quick home workouts are a convenient way to maintain your strength, improve flexibility, and manage stress. Start with bodyweight exercises like push-ups, squats, lunges, and planks. These require no equipment and work multiple muscle groups at once. High-Intensity Interval Training (HIIT) is another great option. In just 15–20 minutes, you can burn serious calories with short bursts of intense effort followed by rest. Try a circuit like 30 seconds of jumping jacks, 30 seconds of push-ups, 30 seconds of mountain climbers, and repeat for 3 rounds. Don’t forget dynamic stretches like arm circles and hip openers for a proper warm-up. If you’re working from home, take 5-minute movement breaks every hour—jump rope, dance, or do a wall sit. The key is to stay consistent, even if it’s just 15 minutes a day. You don’t need a fancy gym or hours of free time—just commitment. Invest in a yoga mat, resistance bands, or a pair of dumbbells if you want to add variety. Most importantly, listen to your body. Doing something is always better than doing nothing. Over time, these small bursts of activity will add up and contribute to better mood, focus, energy, and long-term health. So no excuses—get moving!"
  },
  {
    id: 3,
    image: "https://t3.ftcdn.net/jpg/11/21/77/50/360_F_1121775061_VkWHOuRrLIpO2qlWjqgk60ysVCHXBClZ.jpg",
    category: "Mindfulness",
    title: "How Mindful Breathing Transforms Your Day",
    author: "Ariana Patel",
    likes: 120,
    description:
      "Mindful breathing is a simple yet powerful practice that can profoundly impact your mental and physical well-being. It’s the act of focusing your attention on the breath — the inhale, the exhale — to anchor yourself in the present moment. Just a few minutes of conscious breathing daily can lower stress, reduce anxiety, and enhance focus. When we’re stressed, our breathing becomes shallow and fast, triggering the body’s fight-or-flight response. Mindful breathing, on the other hand, activates the parasympathetic nervous system — calming the body and mind. You don’t need a meditation cushion or a quiet room. Start where you are: breathe in for 4 seconds, hold for 4, breathe out for 4, hold again for 4 — known as box breathing. This technique is used by athletes, therapists, and even Navy SEALs. You can also try the 4-7-8 method to calm your nervous system before sleep. Whether you're stuck in traffic, feeling overwhelmed at work, or needing a midday reset — just pause and breathe. The beauty of this practice is its accessibility. Over time, regular mindful breathing can improve emotional regulation, sleep quality, and even heart health. It brings awareness, helping you become more patient, centered, and mindful in daily interactions. It’s not about perfection, but intention. Just start with one breath. That breath can change everything."
  }
];

const blogCategories = [
  { id: 1, name: "Nutrition" },
  { id: 2, name: "Fitness" },
  { id: 3, name: "Mindfulness" },
  { id: 4, name: "Weight Loss" },
  { id: 5, name: "Healthy Recipes" },
  { id: 6, name: "Wellness Tips" }
];


const BlogPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-100 via-white to-green-100 py-20 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 pt-8">Nutryvo Blog</h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Stay inspired with expert tips, healthy habits, and practical advice to improve your wellness journey.
        </p>
      </section>

      {/* Blog Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-10 gap-8">
      {/* Main Blog Posts */}
      <div className="md:col-span-8 space-y-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="overflow-hidden bg-white border border-gray-100  shadow-sm hover:shadow-lg transition duration-300"
          >
            {/* Blog Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[450px] object-cover"
            />

            {/* Blog Content */}
            <div className="p-6 space-y-3">
              <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                {post.category}
              </span>

              <h2 className="text-2xl font-semibold text-gray-800 hover:text-green-700 transition">
                {post.title}
              </h2>

              <p className="text-gray-600 text-sm">
                {post.description.length > 100
                  ? post.description.slice(0, 350) + "..."
                  : post.description}
              </p>

              {/* Author & Likes */}
              <div className="flex justify-between items-center pt-4 text-sm text-gray-500">
                <span className="font-medium">✍️ {post.author}</span>
                <span className="flex items-center gap-1">
                  <FaRegHeart className="text-red-400" />
                  {post.likes}
                </span>
              </div>

              {/* Read More */}
              <div className="pt-4">
                <button className="text-green-600 hover:text-green-800 font-medium text-sm cursor-pointer">
                  Read more →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <div className="md:col-span-2  p-4">
        <h3 className="text-xl font-bold text-green-700 mb-4"> Categories</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          {blogCategories?.map((category, index) => (
            <li
              key={index}
              className="hover:text-green-700 hover:underline cursor-pointer border-b border-dashed border-gray-300 pb-1 flex items-center gap-0.5 font-medium text-gray-600"
            >
              <IoIosArrowForward/> {category?.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default BlogPage;
