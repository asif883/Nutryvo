"use client"
import Loading from '@/Components/SharedItems/Loading';
import { fetchData } from 'next-auth/client/_utils';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const page = () => {
    const [orders , setOrders] = useState([])
    const [loading , setLoading] = useState(true)
  
    const fetchData = async () => {
        try {
        const res = await fetch('/api/pending-orders');
        const data = await res.json();
        setOrders(data);
        setLoading(false);
        } catch (err) {
        console.error("Fetching orders failed", err);
        setLoading(false);
        }
    };

    useEffect(()=> {
        fetchData()
    }, [])
    
    const STATUS_OPTIONS = ["pending", "processing", "shipped", "delivered"];



    const handleStatusChange = async (orderId, newStatus) => {
        try {
            const res = await fetch(`/api/order/${orderId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: newStatus }),
            });

            const result = await res.json();
            if (result.success) {
            Swal.fire({
                icon: "success",
                title: "Status Updated!",
                text: "The order status has been successfully updated.",
                showConfirmButton: true,
                confirmButtonColor: "#00A63E",
            });
            await fetchData();
            }
        } catch (err) {
            console.error("Failed to update status", err);
            Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Failed to update order status.",
            });
        }
    };


    return (
        <div>
            <h1 className='text-center text-2xl font-semibold text-green-600 mb-5'>Orders Details</h1>
            <div>
                {
                    loading ? <Loading/>
                    :
                    <>
                   {
                    orders.map((order, idx) => (
                        <div key={order?._id}>
                              <div className="bg-green-50 shadow-md border-l-4 border-green-500 p-4 rounded-md mb-4 space-y-1.5">
                                <h2 className="text-lg font-semibold text-gray-800">Order: #{idx+1}</h2>
                                <p className="text-sm text-gray-600">Order ID: {order._id}</p>
                                <p className="text-sm text-gray-600">Customer Email: {order?.userEmail || 'Unknown'}</p>
                                <p className="text-sm text-gray-600">Order Date :{order?.orderDate}</p>
                                <p className="text-sm text-gray-600">Address :{order?.address}</p>
                                <p className={`text-sm font-medium mt-1 capitalize ${order.status === "delivered" ? "text-green-600" : "text-yellow-600"}`}>Status: {order.status}</p>
                                 <div className="mt-2">
                                    <label className="text-sm text-gray-600 mr-2">Update Status:</label>
                                    <select
                                    disabled={order.status ==='delivered'}
                                    value={order.status}
                                    onChange={(e) => handleStatusChange(order._id, e.target.value)}
                                    className={`border rounded px-2 py-1 text-sm ${order.status === "delivered" && "bg-green-600 text-white"}`}
                                    >
                                    {STATUS_OPTIONS.map((status) => (
                                        <option key={status} value={status}>{status}</option>
                                    ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    ))
                    }

                    </>
                }
            </div>
        </div>
    );
};

export default page;