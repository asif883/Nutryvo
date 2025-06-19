"use client";
import { useAuth } from "@/app/hooks/useAuth";
import { useEffect, useState } from "react";
import Loading from "@/Components/SharedItems/Loading";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

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

  const [showModal, setShowModal] = useState(false);
  const [feedback, setFeedback] = useState({
    name: "",
    comment: "",
    rating: "",
    foodQuality: "",
    deliveryExperience: "",
  });

  const handleChange = (e) => {
    if(!e.target.value) return
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
     const { name, comment, rating, foodQuality, deliveryExperience } = feedback;

    if (!name || !comment || !rating || !foodQuality || !deliveryExperience) {
      alert("Please fill out all the fields before submitting.");
      return;
    }


    alert('Thanks For Your Feedback')
    
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-green-700 text-center">My Orders</h1>

      {loading ? (
        <Loading />
      ) : orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders placed yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order, idx) => (
            <div key={order._id} className="border border-green-300 rounded-md p-4 shadow-sm bg-gradient-to-br from-white to-green-50">
              <div className="mb-2 flex items-center justify-between">
                 <div>
                    <p className="font-semibold">Order: #{idx+1}</p>
                    <span className="font-semibold">Order Date:</span>{" "}
                    {new Date(order.orderDate).toLocaleString()}
                 </div>
                   <div>
                   {
                  order?.status === 'delivered' ? (
                    <>
                      <button
                        className="flex items-center gap-2 px-5 py-2 rounded-xl bg-white border border-green-500 text-green-700 hover:bg-green-100 hover:text-green-800 transition font-medium cursor-pointer"
                        onClick={() => setShowModal(true)}
                      >
                        <span>💬</span> Give Feedback
                      </button>

                      {/* Feedback Modal */}
                      {showModal && (
                        <>
                          <input type="checkbox" id="feedback_modal" className="modal-toggle" checked readOnly />
                          <div className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                              <h3 className="font-bold text-lg text-green-600 mb-4">📝 Give Your Feedback</h3>
                              <div className="space-y-3">
                                <input
                                  required
                                  type="text"
                                  name="name"
                                  placeholder="Your Name"
                                  className="input input-bordered w-full"
                                  value={feedback.name}
                                  onChange={handleChange}
                                />
                                <textarea
                                  required
                                  name="comment"
                                  className="textarea textarea-bordered w-full"
                                  placeholder="Your Comments"
                                  value={feedback.comment}
                                  onChange={handleChange}
                                ></textarea>
                                <input
                                  required
                                  type="number"
                                  name="rating"
                                  placeholder="Rating (1-5)"
                                  min={1}
                                  max={5}
                                  className="input input-bordered w-full"
                                  value={feedback.rating}
                                  onChange={handleChange}
                                />
                                <select
                                  required
                                  name="foodQuality"
                                  className="select select-bordered w-full"
                                  value={feedback.foodQuality}
                                  onChange={handleChange}
                                >
                                  <option disabled value="">Food Quality</option>
                                  <option>Excellent</option>
                                  <option>Good</option>
                                  <option>Average</option>
                                  <option>Poor</option>
                                </select>
                                <select
                                  required
                                  name="deliveryExperience"
                                  className="select select-bordered w-full"
                                  value={feedback.deliveryExperience}
                                  onChange={handleChange}
                                >
                                  <option disabled value="">Delivery Experience</option>
                                  <option>Fast & Smooth</option>
                                  <option>On Time</option>
                                  <option>Late</option>
                                  <option>Bad</option>
                                </select>
                              </div>
                              <div className="modal-action">
                                <label htmlFor="feedback_modal"
                                  onClick={() => setShowModal(false)}
                                  className="btn btn-sm btn-outline">
                                  Cancel
                                </label>
                                <button type="submit" onClick={handleSubmit} className="btn btn-sm bg-green-600 text-white hover:bg-green-700">Submit</button>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <Link href={'/dashboard/delivery-tracker'}
                      className="flex items-center gap-2 px-5 py-2 rounded-xl bg-white border border-green-500 text-green-700 hover:bg-green-100 hover:text-green-800 transition font-medium cursor-pointer">
                      Track Order <FaArrowRight />
                    </Link>
                  )
                }
              </div>
              </div>
              <div className="mb-2">
                <span className="font-semibold">Address:</span> {order.address}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Status:</span>{" "}
                <span className={`font-semibold capitalize ${order?.status === 'delivered' ? "text-green-600" : "text-yellow-600"}`}>{order.status}</span>
              </div>

              <div>
                <span className="font-semibold">Items:</span>
                <ul className="list-disc list-inside mt-2">
                  {order.items.map((item, idx) => (
                    <li key={idx}>
                      {item.name} = <span className="text-green-600 font-medium">{item.price}tk</span>
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
