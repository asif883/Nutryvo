"use client";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, password, role = "member" } = data;
    const userInfo = { name, email, password, role };

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          "content-type": "application/json",
        },
      });

      const result = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Account Created!",
          text: "You have successfully signed up!",
          confirmButtonColor: "#00A63E",
        }).then(()=> {
          window.location.href = "/";
        })
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: result.message || "Something went wrong!",
          confirmButtonColor: "#d33",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: error.message || "Please try again later.",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
   <div className="min-h-screen w-full bg-green-50 flex items-center justify-center px-4 py-4">
      <div className="flex flex-col md:flex-row items-center bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-6xl h-[90vh]">
        
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 h-full p-10 flex flex-col justify-center">
          <Link
            href="/"
            className="text-base font-semibold text-gray-800 hover:text-gray-600 mb-1 flex items-center gap-2"
          >
            <FaArrowLeft /> Back Home
          </Link>

          <h2 className="text-3xl font-bold text-green-700 mb-1">Create an account</h2>
          <p className="text-gray-600 mb-6">Please enter your details to continue.</p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <p className="text-lg font-medium mb-1">Name</p>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-200"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <p className="text-lg font-medium mb-1">Email</p>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-200"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
              <p className="text-lg font-medium mb-1">Password</p>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
                })}
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-200"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition duration-300 cursor-pointer"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-lg text-gray-600">
            Already have an account?{" "}Please{" "}
            <Link href="/login" className="font-medium underline text-green-500">
              Login
            </Link>
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 h-full relative">
          <Image
            src="/assets/signup-img.avif"
            alt="signup Visual"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
