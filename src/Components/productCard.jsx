"use client"
import React from 'react';
import '../CSS/bannerFont.css'
import { MdOutlineShoppingCart } from "react-icons/md";
import useUserData from '@/app/hooks/useUserData';
import { useAuth } from '@/app/hooks/useAuth';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const productCard = ({product}) => {
  const {singleUser} = useUserData()
  const {session} = useAuth()
  const router = useRouter()

  const handleCartData = async (email)=> {
      const buyerEmail = email 
      const name = product.name 
      const price = product.price 
      const img = product.image
      const category = product.category
      
      const cartInfo = {buyerEmail, name, price, img, category}
      
      if(!session) {
        return router.push('/login')
      }

      if(singleUser?.role === "admin"){
        await Swal.fire({
            icon: "error",
            title: "You are Admin!",
            text: "Admin can't buy product!!",
            confirmButtonColor: "#10b981", 
        });
        return;
      }

      

      try {
        const res = await fetch("/api/add-cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cartInfo),
        });
  
        const result = await res.json();
  
        if (res.ok) {
          Swal.fire({
            icon: "success",
            title: "Product Added!",
            text: "Product has been successfully added to your Cart.",
            confirmButtonColor: "#10b981", 
            background: "#fefefe",
          }); 
        } else {
          throw new Error(result.message || "Failed to add product");
        }
      } catch (error) {
        console.error("Product Add Error:", error.message);
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: error.message || "Something went wrong.",
          confirmButtonColor: "#ef4444",
        });
      }

  }

  const { name, price, image} = product;
  return (
    <div className='border border-green-200 p-3'>
       <div className='flex items-center gap-3 relative'>
           <img className='w-40 h-32 object-cover' src={image} alt={name} />
           <div>
              <h3 className='text-xl font-semibold font-barlow'>{name}</h3>
              <p className='text-gray-700 font-barlow'>Price: {price}/kg</p>
           </div>
           <div className='absolute top-1.5 right-5'>
            <button onClick={() => handleCartData(singleUser?.email)} className='cursor-pointer hover:text-green-600'><MdOutlineShoppingCart size={24}/></button>
           </div>
       </div>
    </div>
  );
};

export default productCard;