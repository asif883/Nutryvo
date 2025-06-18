"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/app/hooks/useAuth";
import Loading from "@/Components/SharedItems/Loading";

const statusSteps = ["pending", "processing", "shipped", "delivered"];

export default function DeliveryTracker() {
  const { session } = useAuth();
  const email = session?.user?.email;
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const getStatusIndex = (status) => statusSteps.indexOf(status.toLowerCase());

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await fetch(`/api/orders?email=${email}`);
      const data = await res.json();
      setOrders(data);
      setLoading(false);
    };
    if (email) fetchOrders();
  }, [email]);

  if (loading) return <Loading />;
  if (!orders.length) return <p className="text-center mt-10 text-gray-500">No orders found.</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-10">Track your Product</h1>

      <div className="space-y-8">
        {orders.map((order, index) => {
          const statusIndex = getStatusIndex(order.status);
          return (
            <div
              key={index}
              className="rounded-xl border border-gray-200 shadow-md p-6 bg-gradient-to-br from-white to-green-50"
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-green-800">Order #{index + 1}</h2>
                  <p className="text-sm text-gray-500">
                    Placed: {new Date(order.orderDate).toLocaleString()}
                  </p>
                </div>
                <div className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full capitalize font-medium">
                  {order.status}
                </div>
              </div>

              {/* Item List */}
              <div className="mb-4 text-gray-700 text-sm">
                {order.items.map((item, idx) => (
                  <p key={idx}>
                    • {item.name} — <span className="text-green-700 font-semibold">{item.price}৳</span>
                  </p>
                ))}
              </div>

              <p className="text-sm mb-4">
                <span className="font-medium text-gray-600">Address:</span> {order.address}
              </p>

              {/* Progress Steps */}
              <div className="flex justify-between items-center relative mt-6">
                {statusSteps.map((step, i) => (
                  <div key={i} className="flex flex-col items-center w-full text-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center 
                      ${
                        i <= statusIndex
                          ? "bg-green-600 text-white"
                          : "bg-gray-300 text-gray-600"
                      }`}
                    >
                      {i + 1}
                    </div>
                    <span
                      className={`mt-2 text-xs ${
                        i <= statusIndex ? "text-green-700 font-semibold" : "text-gray-500"
                      } capitalize`}
                    >
                      {step}
                    </span>
                  </div>
                ))}
                {/* Line */}
                <div className="absolute top-4 left-4 right-4 h-0.5 bg-gray-300 -z-10">
                  <div
                    className="h-0.5 bg-green-500"
                    style={{
                      width: `${(statusIndex / (statusSteps.length - 1)) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
