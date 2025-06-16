"use client";
import { useState } from "react";

const cartItems = [];

export default function Cart() {
  const [items, setItems] = useState(cartItems);

  const getTotal = () =>
    items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-700">
         My Cart
      </h1>

      {items.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between bg-white border rounded-2xl p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-xl border"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <p className="text-sm text-gray-700 mt-1">
                    ৳{item.price} × {item.quantity}
                  </p>
                </div>
              </div>

              <div className="mt-4 sm:mt-0 text-right sm:text-center">
                <p className="text-xl font-bold text-green-600">
                  ৳{item.price * item.quantity}
                </p>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center pt-6 border-t mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Total</h2>
            <p className="text-2xl font-bold text-green-700">৳{getTotal()}</p>
          </div>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 mt-4 rounded-xl transition text-lg">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
