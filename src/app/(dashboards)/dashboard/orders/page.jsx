"use client";
import { useAuth } from "@/app/hooks/useAuth";
import { useEffect, useState } from "react";
import Loading from "@/Components/SharedItems/Loading";

export default function OrderPage() {
  const { session } = useAuth();
  const email = session?.user?.email;
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await fetch(`/api/orders?email=${email}`);
      const data = await res.json();
      setOrders(data);
      setLoading(false);
    };

    if (email) fetchOrders();
  }, [email]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-green-700 text-center">My Orders</h1>

      {loading ? (
        <Loading />
      ) : orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders placed yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order._id} className="border border-green-200 rounded-md p-4 shadow-sm">
              <div className="mb-2">
                <span className="font-semibold">Order Date:</span>{" "}
                {new Date(order.orderDate).toLocaleString()}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Status:</span>{" "}
                <span className="text-yellow-600">{order.status}</span>
              </div>
              <div className="mb-2">
                <span className="font-semibold">Address:</span> {order.address}
              </div>

              <div>
                <span className="font-semibold">Items:</span>
                <ul className="list-disc list-inside mt-2">
                  {order.items.map((item, idx) => (
                    <li key={idx}>
                      {item.name} = <span className="text-green-600 font-medium">{item.price}</span> tk
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
