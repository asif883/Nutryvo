"use client"

import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";


const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



const onSubmit = async (data) => {
  const { name, email, password } = data;
  const userInfo = { name, email, password };

  try {
    const res = await fetch('http://localhost:3000/api/signup', {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        "content-type": "application/json"
      }
    });

    const result = await res.json();
    if (res.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Account Created!',
        text: 'You have successfully signed up!',
        confirmButtonColor: '#00A63E'
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: result.message || 'Something went wrong!',
        confirmButtonColor: '#d33'
      });
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Network Error',
      text: error.message || 'Please try again later.',
      confirmButtonColor: '#d33'
    });
  }
};



  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-lime-200 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Welcome to Nutryvo</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              type="text"
              placeholder="Enter Your Name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>
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
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center">
          <span className="text-gray-600">or</span>
        </div>

        <button
        //   onClick={handleGoogleLogin}
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
