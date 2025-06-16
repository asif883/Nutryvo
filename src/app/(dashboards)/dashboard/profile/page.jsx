"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { FaCamera } from "react-icons/fa";
import Loading from "@/Components/SharedItems/Loading";

const ProfilePage = () => {
  const { data: session, status } = useSession();

  const user = session?.user || {};

  // Placeholder health metrics
  const healthData = {
    bmi: "22.5",
    calories: "2100 kcal/day",
    goal: "Maintain weight",
    bloodGroup: "O+",
  };

  if (status === "loading") {
    return <p className="text-center mt-10 text-gray-600"><Loading/> </p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-8 font-sans">
      {/* Title */}
      <h1 className="text-3xl font-bold text-green-700 mb-4">My Profile</h1>

      {/* User Card */}
      <div className="bg-white rounded-xl shadow p-6 flex items-center gap-6">
        <div className="relative w-24 h-24">
          <Image
            src={user.image || "/assets/default-avatar.jpg"}
            alt="User Avatar"
            fill
            className="rounded-full object-cover border-4 border-green-200"
          />
          <span className="absolute bottom-1 right-1 bg-green-600 p-1 rounded-full text-white text-xs">
            <FaCamera />
          </span>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">{user.name || "No Name Provided"}</h2>
          <p className="text-gray-500">Member</p>
          <p className="text-gray-400">Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Personal Info Section */}
      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-green-700">Personal Information</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
          <div>
            <p className="text-gray-500">Full Name</p>
            <p className="font-medium">{user.name}</p>
          </div>
          <div>
            <p className="text-gray-500">Email</p>
            <p className="font-medium">{user.email}</p>
          </div>
          <div>
            <p className="text-gray-500">Phone</p>
            <p className="font-medium">(+880) 1XXX-XXXXXX</p>
          </div>
          <div>
            <p className="text-gray-500">Date of Birth</p>
            <p className="font-medium">15-05-2000</p>
          </div>
          <div>
            <p className="text-gray-500">Gender</p>
            <p className="font-medium">Male</p>
          </div>
          <div>
            <p className="text-gray-500">User Role</p>
            <p className="font-medium">User</p>
          </div>
        </div>
      </div>

      {/* Health Metrics Section */}
      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-green-700">Health Metrics</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
          <div>
            <p className="text-gray-500">BMI</p>
            <p className="font-medium">{healthData.bmi}</p>
          </div>
          <div>
            <p className="text-gray-500">Daily Calorie Target</p>
            <p className="font-medium">{healthData.calories}</p>
          </div>
          <div>
            <p className="text-gray-500">Health Goal</p>
            <p className="font-medium">{healthData.goal}</p>
          </div>
          <div>
            <p className="text-gray-500">Blood Group</p>
            <p className="font-medium">{healthData.bloodGroup}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
