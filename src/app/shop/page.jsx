"use client"
import ProductCard from '@/Components/productCard';
import Loading from '@/Components/SharedItems/Loading';
import React, { useEffect, useState } from 'react';

const page = () => {
    const [products , setProducts] = useState([])
    const [loading  , setLoading] = useState(true)
    const [selected, setSelected] = useState('All')

    useEffect(()=> {
        const fetchData = async ()=>{
            const res = await fetch('/api/products')
            const data = await res.json()
            setProducts(data)
            setLoading(false)
            // console.log(data);
        }
       fetchData() 
    }, [])

    return (
        <div>
            <section className="bg-gradient-to-r from-green-100 via-white to-green-100 py-16">
                <div className="max-w-6xl mx-auto text-center px-6 pt-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
                        Nutryvo Essentials
                    </h1>
                    <p className="text-md text-gray-600 max-w-xl mx-auto">
                        Everything you need for a healthier lifestyle — from breakfast bowls to protein-packed dinners.
                    </p>
                </div>
           </section>
            <div className='max-w-7xl mx-auto px-3'>
                {
                loading ? <Loading/>
                :
                <>
                 {
                    products?.length !== 0 ?
                    <div className='my-12'>
                        <div className='flex items-center gap-5'>
                            <button 
                             onClick={()=> setSelected("All")}
                             className={`border border-green-300 px-5 py-1.5 rounded-3xl capitalize cursor-pointer text-green-600 ${selected === 'All'
                            ? 'bg-green-600 text-white border-green-500'
                            : 'border-green-300 text-green-600'
                            }`}>All</button>
                        {
                            [...new Set(products?.map(pr => pr?.category))].map((category, index) => (
                                <div key={index}>
                                <button
                                onClick={()=> setSelected(category)} 
                                className={`border border-green-300 px-5 py-1.5 rounded-3xl capitalize cursor-pointer text-green-600 ${selected === category
                                ? 'bg-green-600 text-white border-green-500'
                                : 'border-green-300 text-green-600'
                                }`}>
                                    {category}
                                </button>
                                </div>
                            ))
                        }
                        </div>
                        <div className='mt-10 grid gap-5 grid-cols-1 md:grid-cols-2'>
                        {
                            products?.map((product) => <ProductCard key={product?._id} product={product}></ProductCard>)
                        }
                        </div>
                    </div>
                    :
                    <>
                     <div className='flex items-center justify-center min-h-screen'>
                        <h1 className='text-red-600 font-semibold'>No Product Found</h1>
                     </div>
                    </>
                 }
                </>
                }
            </div>
        </div>
    );
};

export default page;