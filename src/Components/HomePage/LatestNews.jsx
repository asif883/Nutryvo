"use client";
import Link from "next/link";
import { FaHeart, FaComment } from "react-icons/fa";

const newsPosts = [
  {
    id: 1,
    title: "Take Charge of Your Life.",
    description:
      "Discover simple strategies to improve your daily routine, reduce stress, and take full control of your physical and mental health.",
    date: "04.02.2024",
    likes: 31,
    comments: 3,
  },
  {
    id: 2,
    title: "Ways to Get Motivated.",
    description:
      "Struggling with consistency? Here are 5 practical motivation hacks that help you stay focused on your wellness goals every day.",
    date: "04.02.2024",
    likes: 31,
    comments: 3,
  },
  {
    id: 3,
    title: "Boost Your Metabolism.",
    description:
      "Learn which foods and habits naturally increase your metabolism, helping you burn calories more efficiently and feel more energetic.",
    date: "04.02.2024",
    likes: 10,
    comments: 3,
  },
  {
    id: 4,
    title: "BMI: Time to Measure Up.",
    description:
      "Understanding your Body Mass Index (BMI) can help you track progress and set realistic fitness targets for a healthier lifestyle.",
    date: "04.02.2024",
    likes: 17,
    comments: 3,
  },
];

const LatestNews = () => {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl font-semibold mb-2">Latest News</h2>
            <p className="text-gray-500 max-w-xl">
              Stay informed with expert insights, practical health tips, and the
              latest updates to support your wellness journey.
            </p>
          </div>
          <Link href="/blog">
            <button className="bg-green-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-600 transition cursor-pointer">
              See All Posts
            </button>
          </Link>
        </div>

        <div className="border-t border-gray-200 mt-4 pt-10 grid md:grid-cols-2 gap-x-12 gap-y-12">
          {newsPosts.map((post) => (
            <div key={post.id}>
              <Link href="#" className="text-xl font-semibold text-gray-800 mb-2 hover:underline">
                {post.title}
              </Link>
              <p className="text-gray-600 text-sm mb-4">{post.description}</p>
              <div className="flex items-center gap-6 text-sm text-gray-500 font-semibold">
                <span>{post.date}</span>
                <span className="flex items-center gap-1">
                  <FaHeart className="text-gray-400" /> {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <FaComment className="text-gray-400" /> {post.comments}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
