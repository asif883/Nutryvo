"use client"
import React from 'react';
import '../CSS/bannerFont.css'
import { MdOutlineShoppingCart } from "react-icons/md";

const productCard = ({product}) => {
  const { name, price, image, category, description } = product;
  return (
    <div className='border border-green-200 p-3'>
       <div className='flex items-center gap-3 relative'>
           <img className='w-40 h-32 object-cover' src={image} alt={name} />
           <div>
              <h3 className='text-xl font-semibold font-barlow'>{name}</h3>
              <p className='text-gray-700 font-barlow'>Price: {price}/kg</p>
           </div>
           <div className='absolute top-1.5 right-5'>
            <button className='cursor-pointer hover:text-green-600'><MdOutlineShoppingCart size={20}/></button>
           </div>
       </div>
    </div>
  );
};

export default productCard;