"use client";

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;

    const resp = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (resp?.ok) {
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: "You have successfully Login!",
        confirmButtonColor: "#00A63E"
      }).then(()=> {
        window.location.href = "/";
      })
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password. Please try again!",
      });
    }
  };

  const handleGoogleLogin = (provider) => {
    signIn(provider ,{
      redirect : false,
      callbackUrl: "/"
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4 py-4">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden max-w-6xl w-full">
        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 p-10">
           <Link className="text-xl font-semibold text-gray-900 hover:text-gray-600 mb-1.5 flex items-center gap-2" href={'/'}><FaArrowLeft/> Back Home</Link>
          <h2 className="text-3xl font-bold text-green-700 mb-2">Welcome to Nutryvo</h2>
          <p className="text-gray-600 mb-6">Please enter your details to continue.</p>

          <button
            onClick={()=> handleGoogleLogin('google')}
            className="flex items-center justify-center gap-2 w-full border border-gray-300 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 mb-6 cursor-pointer"
          >
            <FcGoogle className="text-xl" />
            Continue with Google
          </button>

          <div className="flex items-center mb-6">
            <div className="flex-grow h-px bg-gray-200" />
            <span className="px-2 text-gray-400 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-200" />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                {...register("email", { required: "Email is required" })}
                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
                })}
                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>

            {/* Remember Me + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox rounded text-green-600" />
                Remember for 30 days
              </label>
              <a href="#" className="text-green-600 hover:underline">Forgot password</a>
            </div>

            {/* Submit */}
            <button type="submit" className="cursor-pointer w-full bg-green-700 text-white py-2 rounded-lg font-medium hover:bg-green-800">
              Log in
            </button>
          </form>

          {/* Signup */}
          <p className="text-sm text-center mt-6 text-gray-600">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-green-600 underline font-medium">
              Sign up for free
            </Link>
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 relative h-72 md:h-auto">
          <Image
            src="/assets/login-img.avif"
            alt="Login Visual"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
