"use client"

import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import {signIn} from "next-auth/react"
import Swal from "sweetalert2";

const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const onSubmit = async (data) => {
  const email = data.email;
  const password = data.password;

  const resp = await signIn("credentials", {
    redirect: false,
    email,
    password,
  });

  if (resp?.ok) {
    Swal.fire({
      icon: "success",
      title: "Login Successful!",
      showConfirmButton: false,
      timer: 1000,
    });


    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  } else {
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: "Invalid email or password. Please try again!",
    });
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-lime-200 px-4">
      <div className="bg-white mt-16 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Welcome to Nutryvo</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              type="email"
              placeholder="example@email.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">Password</label>
            <input
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              type="password"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition duration-300 cursor-pointer"
          >
            Login
          </button>
        </form>
        <p className="mt-3 text-gray-700">New here? Please <Link href={'/signup'} className="underline text-green-800 font-semibold">Create an account</Link></p>
        <div className="mt-6 flex items-center justify-center">
          <span className="text-gray-600">or</span>
        </div>

        <button
          
          className="mt-4 w-full flex items-center justify-center gap-3 border py-2 rounded-lg hover:bg-gray-100 transition"
        >
          <FcGoogle className="text-xl" />
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
