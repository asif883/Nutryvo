"use client"
import { useAuth } from "@/app/hooks/useAuth";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,CartesianGrid } from "recharts";

const activityData = [
  { name: "Mon", kcal: 500 },
  { name: "Tue", kcal: 650 },
  { name: "Wed", kcal: 720 },
  { name: "Thu", kcal: 580 },
  { name: "Fri", kcal: 690 },
  { name: "Sat", kcal: 750 },
  { name: "Sun", kcal: 625 },
];

const OverviewPage = () => {

    const {session} = useAuth()
    const user = session?.user

    return (
        <div>
            <div className="px-4 mb-2">
                <h1 className="text-3xl font-semibold">Hello {user?.name}</h1>
                <p className="text-lg text-gray-600 ">Let's start living heathy from now.</p>
            </div>
            <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* The 5 a day challenge */}
            <div className="col-span-2 bg-gradient-to-br from-lime-100 to-green-100 p-4 rounded-2xl shadow-md">
                <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                    <h2 className="text-lg font-semibold mb-2">The 5 a day challenge 🔥</h2>
                    <p className="text-sm text-gray-500">Join 5k+ participants</p>
                </div>
                <img
                    src="https://img.freepik.com/premium-photo/steamed-mixed-vegetables-light-meal-high-quality-photo_650366-114.jpg"
                    alt="Healthy Bowl"
                    className="w-50 h-32 object-cover rounded-full"
                />
                </div>
            </div>

            {/* Daily Activity */}
            <div className="col-span-2 bg-zinc-900 text-white p-4 rounded-2xl shadow-md">
                <div>
                <h3 className="text-md font-semibold mb-2">Daily activity</h3>
                <p className="text-sm mb-4">Last 7 Days Kcal Burn</p>
                <div className="h-40 bg-zinc-800 rounded-xl p-2">
                    <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={activityData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                        <XAxis dataKey="name" stroke="#ccc" />
                        <YAxis stroke="#ccc" />
                        <Tooltip />
                        <Line type="monotone" dataKey="kcal" stroke="#4ade80" strokeWidth={2} dot={{ r: 4 }} />
                    </LineChart>
                    </ResponsiveContainer>
                </div>
                </div>
            </div>
            

            {/* Calories Budget */}
            <div className="p-4 rounded-2xl shadow-md">
                <div>
                <h3 className="text-md font-semibold mb-2">Calories Budget</h3>
                <div className="relative w-28 h-28 mx-auto">
                    <svg className="w-full h-full rotate-[-90deg]">
                    <circle cx="50%" cy="50%" r="45%" stroke="#e5e5e5" strokeWidth="8" fill="none" />
                    <circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        stroke="url(#grad)"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray="282.6"
                        strokeDashoffset="70"
                        strokeLinecap="round"
                    />
                    <defs>
                        <linearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
                        <stop offset="0%" stopColor="#d4fc79" />
                        <stop offset="100%" stopColor="#96e6a1" />
                        </linearGradient>
                    </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold">750 Kcal</span>
                    </div>
                </div>
                </div>
            </div>

            {/* Daily Recap */}
            <div className="p-4 rounded-2xl shadow-md">
                <div>
                <h3 className="text-md font-semibold mb-4">Daily Recap</h3>
                <div className="space-y-2">
                    <div>
                    <p className="text-sm">Carbohydrate - 54g</p>
                    <div className="h-2 bg-blue-200 rounded-full">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: "25%" }}></div>
                    </div>
                    </div>
                    <div>
                    <p className="text-sm">Protein - 16.2g</p>
                    <div className="h-2 bg-yellow-200 rounded-full">
                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: "25%" }}></div>
                    </div>
                    </div>
                    <div>
                    <p className="text-sm">Fats - 11.2g</p>
                    <div className="h-2 bg-green-200 rounded-full">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: "25%" }}></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Daily Calories */}
            <div className="col-span-2 p-4 rounded-2xl shadow-md">
                <div>
                <h3 className="text-md font-semibold mb-4">Daily Calories</h3>
                <div className="space-y-2">
                    <div className="flex justify-between bg-blue-50 p-2 rounded-lg">
                    <div>
                        <p className="font-medium">Breakfast</p>
                        <p className="text-sm text-gray-500">Cold cereal and milk</p>
                    </div>
                    <p className="font-bold">240 Kcal</p>
                    </div>
                    <div className="flex justify-between bg-lime-50 p-2 rounded-lg">
                    <div>
                        <p className="font-medium">Lunch</p>
                        <p className="text-sm text-gray-500">Vegetables salad</p>
                    </div>
                    <p className="font-bold">240 Kcal</p>
                    </div>
                    <div className="text-right font-medium text-sm text-gray-600">
                    Remaining: 635 Kcal
                    </div>
                </div>
                </div>
            </div>

            {/* Water Tracker */}
            <div className="col-span-2 p-4 rounded-2xl shadow-md flex items-center justify-between">
                <div>
                <h3 className="text-md font-semibold">Drink 10 Cups Water</h3>
                <p className="text-sm text-gray-500">06:00am - 06:00pm</p>
                </div>
                <div className="w-16 h-16 relative">
                <svg className="w-full h-full rotate-[-90deg]">
                    <circle cx="50%" cy="50%" r="45%" stroke="#e5e5e5" strokeWidth="8" fill="none" />
                    <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    stroke="#6ee7b7"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray="282.6"
                    strokeDashoffset="56.52"
                    strokeLinecap="round"
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-semibold">80%</span>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default OverviewPage;