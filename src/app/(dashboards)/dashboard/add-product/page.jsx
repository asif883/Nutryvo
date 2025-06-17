"use client"
import useUserData from '@/app/hooks/useUserData';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const page = () => {
    const {singleUser} = useUserData()

    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const productInfo = {
    name: data.name,
    price: Number(data.price),
    category: data.category,
    image: data.image,
    description: data.description || ""
    };

    try {
      const res = await fetch("/api/add-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productInfo),
      });

      const result = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Product Added!",
          text: "Your product has been successfully added.",
          confirmButtonColor: "#10b981", 
          background: "#fefefe",
        });
        reset(); 
      } else {
        throw new Error(result.message || "Failed to add product");
      }
    } catch (error) {
      console.error("Product Add Error:", error.message);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: error.message || "Something went wrong.",
        confirmButtonColor: "#ef4444", // Nutryvo red
      });
    }
  }

    return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6">Add New Product</h2>

      {
        singleUser?.role !== "admin"
        ?
        <>
         <h1 className='text-red-600 font-semibold mt-4'>Only Admin Can add products</h1>
        </>
        :
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block font-semibold mb-1">Product Name</label>
          <input
            {...register("name", { required: "Product name is required" })}
            type="text"
            className="w-full input input-bordered"
            placeholder="e.g. Organic Honey"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* Price */}
        <div>
          <label className="block font-semibold mb-1">Price</label>
          <input
            {...register("price", { required: "Price is required", valueAsNumber: true })}
            type="number"
            className="w-full input input-bordered"
            placeholder="e.g. 25"
          />
          {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold mb-1">Category</label>
          <select
            {...register("category", { required: "Category is required" })}
            className="w-full select select-bordered"
          >
            <option value="">Select category</option>
            <option value="breakfast">Breakfast</option>
            <option value="seeds">Seeds</option>
            <option value="nuts">Nuts</option>
            <option value="dry fruits">Dry Fruits</option>
            <option value="snacks">Snacks</option>
            <option value="powdered foods">Powdered Food</option>
          </select>
          {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-semibold mb-1">Image URL</label>
          <input
            {...register("image", { required: "Image URL is required" })}
            type="url"
            className="w-full input input-bordered"
            placeholder="https://example.com/image.jpg"
          />
          {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            {...register("description")}
            className="w-full textarea textarea-bordered"
            placeholder="Write something about the product..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn bg-green-600 text-white w-full cursor-pointer">
          Add Product
        </button>
      </form>
      }
    </div>
    );
};

export default page;