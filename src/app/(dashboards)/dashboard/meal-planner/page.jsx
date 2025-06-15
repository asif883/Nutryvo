"use client"
import React from 'react';

const meals = {
  "breakfast": [
    {
      "image": "https://media.post.rvohealth.io/wp-content/uploads/2024/06/oatmeal-bowl-blueberries-strawberries-breakfast-732x549-thumbnail.jpg",
      "title": "Oatmeal with Berries",
      "cal": 320
    },
    {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDW-NvZ74NmC9L7gCYTcUVajIMv7I4s9tqJIJJ-yqFXae_Ks3RgPEkDUzsgus9vtCe4v8&usqp=CAU",
      "title": "Boiled Eggs & Toast",
      "cal": 290
    },
    {
      "image": "https://www.proteincakery.com/wp-content/uploads/2023/11/peanut-butter-banana-protein-shake-sq.jpg",
      "title": "Banana Protein Smoothie",
      "cal": 250
    }
  ],
  "lunch": [
    {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4zzbpQDu2wAe3yUlbJask1xLWgcKkVsTOHw&s",
      "title": "Grilled Chicken Salad",
      "cal": 480
    },
    {
      "image": "https://www.superhealthykids.com/wp-content/uploads/2022/12/lentils-and-rice-23-scaled.jpg",
      "title": "Brown Rice, Lentils & Veg",
      "cal": 540
    },
    {
      "image": "https://allourway.com/wp-content/uploads/2021/08/Spicy-Tuna-Wrap_1200-x-1200.jpeg",
      "title": "Tuna Whole Wheat Wrap",
      "cal": 410
    }
  ],
  "dinner": [
    {
      "image": "https://images.squarespace-cdn.com/content/v1/58bf61ea3a041163d873b4e8/1587422396891-RMWS0B51RBVJ53YO2HCM/combisteam-queen-bakedsalmonwithvegetables.jpeg",
      "title": "Baked Salmon with Veggies",
      "cal": 530
    },
    {
      "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/asian-quinoa-stir-fry-328bf50.jpg?quality=90&resize=440,400",
      "title": "Chicken Stir-Fry with Quinoa",
      "cal": 500
    },
    {
      "image": "https://rachaelray.com/cdn/shop/articles/Roasted-Garlic-Tomato-Soup-with-Cheesy-Garlic-Bread_3e049fb1-7afd-40ac-8870-33aef418aa6b.jpg?v=1612387154",
      "title": "Veggie Soup & Garlic Toast",
      "cal": 380
    }
  ]
}


const page = () => {
    return (
        <div>
            <div className='p-4 mb-3'>
                <h1 className='font-semibold text-3xl'>Meal Planner</h1>
                <p className='mt-1.5 text-gray-600'>Plan your day with balanced meals!</p>
            </div>

            <div>   
            <div className="tabs tabs-lift">
                {/* breakfast */}
                <input type="radio" name="my_tabs_3" className="tab font-semibold" aria-label="Breakfast"/>
                <div className="tab-content bg-base-100 border-gray-300 p-6">
                   
                    <div className='mt-3 max-w-4xl'>
                        <h1 className='text-xl font-semibold mb-2.5'>Breakfast</h1>
                        <div className='space-y-3'>
                        {
                            meals.breakfast?.map((meal ,idx) => <div className='max-w-4xl shadow p-4' key={idx}>
                                <div className='flex justify-between'>
                                    <div className='flex items-center gap-3'>
                                        <img className='w-28 h-24 object-cover' src={meal?.image} alt={meal?.title} />
                                        <div>
                                            <p className='font-semibold'>{meal?.title}</p>
                                             <fieldset className="fieldset bg-base-100 mt-2">
                                            <label className="label">
                                                <input type="checkbox"  className="checkbox" />
                                                Eaten
                                            </label>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <p className='text-gray-700 font-semibold text-sm'>{meal?.cal}cal.</p>
                                </div>
                                

                            </div>)
                        }
                        </div>
                    </div>
                </div>

                {/* lunch */}
                <input type="radio" name="my_tabs_3" className="tab font-semibold" aria-label="Lunch"  defaultChecked/>
                <div className="tab-content bg-base-100 border-gray-300 p-6">
                    
                    <div className='mt-3 max-w-4xl'>
                        <h1 className='text-xl font-semibold mb-2.5'>Lunch</h1>
                        <div className='space-y-3'>
                        {
                            meals.lunch?.map((meal ,idx) => <div className='max-w-4xl shadow p-4' key={idx}>
                                <div className='flex justify-between'>
                                    <div className='flex items-center gap-3'>
                                        <img className='w-28 h-24 object-cover' src={meal?.image} alt={meal?.title} />
                                        <div>
                                            <p className='font-semibold'>{meal?.title}</p>
                                             <fieldset className="fieldset bg-base-100 mt-2">
                                            <label className="label">
                                                <input type="checkbox"  className="checkbox" />
                                                Eaten
                                            </label>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <p className='text-gray-700 font-semibold text-sm'>{meal?.cal}cal.</p>
                                </div>
                                

                            </div>)
                        }
                        </div>
                    </div>

                </div>
                {/* dinner */}
                <input type="radio" name="my_tabs_3" className="tab font-semibold" aria-label="Dinner" />
                <div className="tab-content border-gray-300 p-6">
                    <div className='mt-3'>
                        <h1 className='text-xl font-semibold mb-3'>Dinner</h1>
                        <div className='space-y-3'>
                        {
                            meals.dinner?.map((meal ,idx) => <div className='max-w-4xl shadow p-4' key={idx}>
                                <div className='flex justify-between'>
                                    <div className='flex items-center gap-3'>
                                        <img className='w-28 h-24 object-cover' src={meal?.image} alt={meal?.title} />
                                        <div>
                                            <p className='font-semibold'>{meal?.title}</p>
                                             <fieldset className="fieldset bg-base-100 mt-2">
                                            <label className="label">
                                                <input type="checkbox"  className="checkbox" />
                                                Eaten
                                            </label>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <p className='text-gray-700 font-semibold text-sm'>{meal?.cal}cal.</p>
                                </div>
                                

                            </div>)
                        }
                        </div>
                    </div>

                </div>
                
            </div>
            </div>
        </div>
    );
};

export default page;