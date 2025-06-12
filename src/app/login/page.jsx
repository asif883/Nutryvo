"use client"

import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
// import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { app } from "../firebase"; // make sure to initialize firebase in this file

// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();

const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       await signInWithEmailAndPassword(auth, data.email, data.password);
//       alert("Login Successful!");
//     } catch (error) {
//       console.error("Login Error", error.message);
//       alert("Login failed. Check credentials.");
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider);
//       alert("Google Login Successful!");
//     } catch (error) {
//       console.error("Google Login Error", error.message);
//       alert("Google Login failed.");
//     }
//   };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-lime-200 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Welcome to Nutryvo</h2>

        <form onSubmit={handleSubmit()} className="space-y-4">
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
