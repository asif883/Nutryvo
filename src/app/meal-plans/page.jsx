"use client";



// Meal Plans Data
const mealPlans = [
  {
    id: 1,
    title: "Weight Loss Plan",
    description:
      "A calorie-controlled meal plan focused on reducing body fat with lean proteins, veggies, and healthy.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxf5p2yuHclG2Kys3jD2qOB0oPsV5lLa2-6Q&s",
    calories: "1,500 kcal/day",
  },
  {
    id: 2,
    title: "Muscle Gain Plan",
    description:
      "High-protein meals designed to build lean muscle mass and support intense workouts.",
    image: "https://hips.hearstapps.com/hmg-prod/images/man-muscle-641052bf6eb11.jpg?crop=0.6675126903553299xw:1xh;center,top&resize=640:*",
    calories: "2,800 kcal/day",
  },
  {
    id: 3,
    title: "Vegan Wellness Plan",
    description:
      "A plant-powered meal plan that supports health and sustainability with delicious vegan recipes.",
    image: "https://plantpowerdubai.com/cdn/shop/files/blog_banner.webp?v=1686052474",
    calories: "2,000 kcal/day",
  },
];

const MealPlansPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-100 to-green-50 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 pt-8">Meal Plans</h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Choose a meal plan that fits your goal—whether it's weight loss, muscle gain, or mindful eating.
        </p>
      </section>

      {/* Plans Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-10">
        {mealPlans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
          >
            <img
              src={plan.image}
              alt={plan.title}
              
              className="w-full h-56 object-cover"
            />
            <div className="p-6 space-y-4">
              <h2 className="text-xl font-semibold text-green-700">{plan.title}</h2>
              <p className="text-gray-600 text-sm">{plan.description}</p>
              <div className="text-sm text-gray-500">Calories: {plan.calories}</div>
              <button className="mt-2 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                View Plan
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MealPlansPage;
