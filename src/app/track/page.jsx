"use client";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const COLORS = ["#4ade80", "#60a5fa", "#f87171", "#fbbf24"];

export default function TrackNutritionPage() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [goal, setGoal] = useState("");
  const [plan, setPlan] = useState(null);

  const handleGenerate = () => {
    const bmr = 10 * weight + 6.25 * height - 5 * 24 + 5;
    let calories = bmr;

    if (goal === "lose") calories -= 500;
    else if (goal === "gain") calories += 300;

    const protein = Math.round(weight * 2);
    const fats = Math.round((calories * 0.25) / 9);
    const carbs = Math.round((calories - (protein * 4 + fats * 9)) / 4);

    setPlan({
      totalCalories: Math.round(calories),
      protein,
      carbs,
      fats,
      meals: [
        {
          type: "Breakfast",
          items: ["Oats", "Banana", "Boiled Egg"],
          calories: Math.round(calories * 0.25),
        },
        {
          type: "Lunch",
          items: ["Grilled Chicken", "Rice", "Vegetables"],
          calories: Math.round(calories * 0.4),
        },
        {
          type: "Dinner",
          items: ["Fish Curry", "Brown Rice", "Salad"],
          calories: Math.round(calories * 0.35),
        },
      ],
    });
   setHeight('')
   setWeight('') 
  };

  const data = plan || {
    totalCalories: 1800,
    protein: 80,
    carbs: 200,
    fats: 70,
    meals: [
      {
        type: "Breakfast",
        items: ["Oats", "Banana", "Boiled Egg"],
        calories: 400,
      },
      {
        type: "Lunch",
        items: ["Grilled Chicken", "Rice", "Vegetables"],
        calories: 700,
      },
      {
        type: "Dinner",
        items: ["Fish Curry", "Brown Rice", "Salad"],
        calories: 600,
      },
    ],
  };

  const pieData = [
    { name: "Protein", value: data.protein },
    { name: "Carbs", value: data.carbs },
    { name: "Fats", value: data.fats },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-100 via-white to-green-100 py-16">
        <div className="max-w-6xl mx-auto text-center px-6 pt-8">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            Track Your Nutrition
          </h1>
          <p className="text-md text-gray-600 max-w-xl mx-auto">
            Monitor your daily intake and stay aligned with your health goals.
          </p>
        </div>
      </section>

      {/* User Input Form */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
          <div className="bg-white shadow p-6 rounded-xl flex flex-col md:flex-row md:items-end gap-4">
            
            <input
              type="number"
              placeholder="Your Weight (kg)"
              className="border p-2 rounded w-full md:w-40"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />

            <input
              type="number"
              placeholder="Your Height (cm)"
              className="border p-2 rounded w-full md:w-40"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />

            <div className="flex items-center gap-1 text-sm text-gray-700 md:w-68">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="goal"
                  value="lose"
                  onChange={(e) => setGoal(e.target.value)}
                />
                <span className="ml-2">Lose Weight</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="goal"
                  value="gain"
                  onChange={(e) => setGoal(e.target.value)}
                />
                <span className="ml-2">Gain Weight</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="goal"
                  value="maintain"
                  onChange={(e) => setGoal(e.target.value)}
                />
                <span className="ml-2">Maintain</span>
              </label>
            </div>

            <button
              onClick={handleGenerate}
              disabled={!weight || !height || !goal}
              className="bg-green-600 text-white py-2 px-4 rounded  md:w-auto hover:bg-green-700 transition cursor-pointer"
            >
              Generate Plan
            </button>
          </div>
        </div>


      {/* Nutrition Summary */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-4 mb-10">
          <div className="bg-green-100 p-4 rounded-xl text-center">
            <h2 className="text-xl font-semibold">Calories</h2>
            <p className="text-2xl font-bold text-green-600">{data.totalCalories} kcal</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-xl text-center">
            <h2 className="text-xl font-semibold">Protein</h2>
            <p className="text-2xl font-bold text-blue-600">{data.protein}g</p>
          </div>
          <div className="bg-red-100 p-4 rounded-xl text-center">
            <h2 className="text-xl font-semibold">Carbs</h2>
            <p className="text-2xl font-bold text-red-600">{data.carbs}g</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-xl text-center">
            <h2 className="text-xl font-semibold">Fats</h2>
            <p className="text-2xl font-bold text-yellow-600">{data.fats}g</p>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="w-full h-64 mb-12">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Meal Details */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl text-green-600 font-semibold">Meal Breakdown</h2>
            <Link
              href={"/dashboard/meal-planner"}
              className="text-xl text-green-600 font-semibold hover:text-green-800 transition duration-200 flex items-center gap-1"
            >
              Check Out <FaArrowRight />
            </Link>
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {data.meals.map((meal, index) => (
              <div
                key={index}
                className="bg-white shadow p-4 rounded-xl border-l-4 border-green-500"
              >
                <h3 className="text-xl font-semibold text-green-700">{meal.type}</h3>
                <p className="text-gray-600">Items: {meal.items.join(", ")}</p>
                <p className="text-sm text-gray-500">
                  Total Calories: {meal.calories} kcal
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
