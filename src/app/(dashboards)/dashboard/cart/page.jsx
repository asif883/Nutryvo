"use client";
import { useAuth } from "@/app/hooks/useAuth";
import Loading from "@/Components/SharedItems/Loading";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function Cart() {
  const [items, setItems] = useState([]);
  const [loading , setLoading] = useState(true)
  const { session } = useAuth();
  const email = session?.user?.email;

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const totalPrice = items.reduce((acc, item) => acc + parseFloat(item.price), 0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/cart/${email}`);
      const data = await res.json();
      setItems(data);
      setLoading(false)
    };
    if (email) {
      fetchData();
    }
  }, [email]);


const handleDelete = async (id) => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  const result = await swalWithBootstrapButtons.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true,
  });

  if (result.isConfirmed) {
    const res = await fetch(`/api/cart-delete/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      swalWithBootstrapButtons.fire("Deleted!", "Your item has been deleted.", "success");
      setItems((prev) => prev.filter((item) => item._id !== id));
    } else {
      swalWithBootstrapButtons.fire("Failed!", "Item could not be deleted.", "error");
    }
  } else if (result.dismiss === Swal.DismissReason.cancel) {
    swalWithBootstrapButtons.fire("Cancelled", "Your item is safe :)", "error");
  }
};

  const handleOrder = async (data) => { 
     if (!email) return;

    try {
      const res = await fetch("/api/place-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userEmail: email,
          address: data.address,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Order Placed!",
          text: result.message || "Your order has been submitted successfully.",
          confirmButtonColor: "#10b981",
        });
        setItems([]);
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed!",
          text: result.message || "Failed to place order.",
          confirmButtonColor: "#dc2626",
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong.",
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-700">Check out your cart</h1>

      {
        loading ? <Loading/>
        :
        <>
        {items?.length === 0 ? (
        <p className="text-2xl font-semibold text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          {/*  Cart Items */}
          <div className="md:col-span-2 space-y-4">
            {items?.map((item) => (
              <div className="" key={item?._id}>
                <div className="card card-side bg-base-100 shadow-sm">
                  <figure>
                    <img className="w-36 h-full object-cover" src={item.img} alt={item.name} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>
                    <p>Price: {item?.price}/kg</p>
                    <div className="card-actions justify-end">
                      <button
                       onClick={()=> handleDelete(item?._id)}
                       className="ml-2 border border-green-300 px-2 py-1 rounded-md text-green-600 hover:text-white hover:bg-green-600 font-semibold cursor-pointer">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/*  Order Summary */}
            <div className="border border-green-200 rounded-md p-5 h-fit shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-green-800">Order Summary</h2>
                <p className="text-gray-700 mb-2">
                  Total Items: <span className="font-bold">{items.length}</span>
                </p>
                <p className="text-gray-700 mb-4">
                  Total Price: <span className="font-bold text-green-600">{totalPrice}</span>
                </p>

                <form onSubmit={handleSubmit(handleOrder)} className="space-y-4">
                  <textarea
                    {...register("address", { required: "Address is required" })}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter your address"
                    rows="3"
                  ></textarea>
                  {errors.address && (
                    <p className="text-red-500 text-sm">{errors.address.message}</p>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200 cursor-pointer"
                  >
                    Place Order
                  </button>
                </form>
            </div>
        </div>
      )}
        </>
      }
    </div>
  );
}
