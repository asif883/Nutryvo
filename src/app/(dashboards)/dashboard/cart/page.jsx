"use client";
import { useAuth } from "@/app/hooks/useAuth";
import Loading from "@/Components/SharedItems/Loading";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Cart() {
  const [items, setItems] = useState([]);
  const [loading , setLoading] = useState(true)
  const { session } = useAuth();
  const email = session?.user?.email;

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

  const handleOrder = async () => {
    
    Swal.fire({
      icon: "success",
      title: "Order Placed!",
      text: "Your order has been submitted successfully.",
      confirmButtonColor: "#10b981",
    });
    setItems([])
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-700">My Cart</h1>

      {
        loading ? <Loading/>
        :
        <>
        {items?.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
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
                      <button className="ml-2 border border-green-300 px-2 py-1 rounded-md text-green-600 hover:text-white hover:bg-green-600 font-semibold cursor-pointer">
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
            <button
              onClick={handleOrder}
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200 cursor-pointer"
            >
              Place Order
            </button>
          </div>
        </div>
      )}
        </>
      }
    </div>
  );
}
