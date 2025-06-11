'use client'

import Image from 'next/image'

const partners = [
  '/assets/client-1.png',
  '/assets/client-2.png',
  '/assets/client-3.png',
  '/assets/client-4.png',
  '/assets/client-5.png',
  '/assets/client-6.png',
  '/assets/client-7.png',
  '/assets/client-8.png',
  '/assets/client-9.png',
]

export default function ClientsPartnersAndOffers() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-5 pt-20 bg-white">
      {/* Clients / Partners */}
      <div>
        <h2 className="text-4xl font-bold mb-4 font-barlow">Clients </h2>
        <p className="text-gray-600 mb-10">
          We collaborate with respected wellness brands to deliver reliable care and promote a healthier lifestyle for everyone.
        </p>
        <div className="grid grid-cols-3 ">
          {partners.map((src, i) => (
            <div key={i} className="flex p-3.5 border border-gray-100 justify-center items-center">
              <Image src={src} alt={`partner-${i}`} width={150} height={150} className="object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* What We Offer */}
      <div>
        <h2 className="text-4xl font-bold mb-4 font-barlow">What We Offer</h2>
        <div className="border border-gray-100">
        {/* 1st Collapse */}
        <div className="collapse collapse-plus bg-base-100 border-b border-dashed border-gray-300 pb-1.5">
            <input type="radio" name="offer-accordion" defaultChecked className="peer" />
            <div className="collapse-title font-semibold text-lg peer-checked:text-green-600">
            Body Balance
            </div>
            <div className="collapse-content text-sm text-gray-600 bg-gray-100">
            Body Balance is a low-impact, holistic workout that blends Tai Chi, yoga, and Pilates to build flexibility, strength, and mental calmness. It's ideal for improving posture, breathing, and core stability.  
            <br />
            <a href="#" className="text-green-600 font-medium mt-2 inline-block">Read More</a>
            </div>
        </div>

        {/* 2nd Collapse */}
        <div className="collapse collapse-plus border-b border-dashed border-gray-300 pb-1.5">
            <input type="radio" name="offer-accordion" className="peer" />
            <div className="collapse-title font-semibold text-lg peer-checked:text-green-600">
            Zumba
            </div>
            <div className="collapse-content text-sm text-gray-600 bg-gray-100">
            Zumba is a high-energy dance fitness program that fuses Latin rhythms with easy-to-follow moves. It boosts cardiovascular health, burns calories, and enhances coordination. Perfect for all ages looking for fun and effective exercise.  
            <br />
            <a href="#" className="text-green-600 font-medium mt-2 inline-block">Read More</a>
            </div>
        </div>

        {/* 3rd Collapse */}
        <div className="collapse collapse-plus border-b border-dashed border-gray-300 pb-1.5">
            <input type="radio" name="offer-accordion" className="peer" />
            <div className="collapse-title font-semibold text-lg peer-checked:text-green-600">
            Basic Pilates
            </div>
            <div className="collapse-content text-sm text-gray-600 bg-gray-100">
            Basic Pilates strengthens the core muscles while enhancing flexibility and balance. It focuses on controlled movements and breathing, helping reduce stress and prevent injuries. Ideal for beginners and anyone seeking low-impact toning.  
            <br />
            <a href="#" className="text-green-600 font-medium mt-2 inline-block">Read More</a>
            </div>
        </div>

        {/* 4th Collapse */}
        <div className="collapse collapse-plus pb-1.5">
            <input type="radio" name="offer-accordion" className="peer" />
            <div className="collapse-title font-semibold text-lg peer-checked:text-green-600">
            Yoga Zen
            </div>
            <div className="collapse-content text-sm text-gray-600 bg-gray-100">
            Yoga Zen combines calming poses with breath control and meditation techniques. It supports mental clarity, emotional stability, and physical wellness. A great way to unwind and reconnect with your inner self.  
            <br />
            <a href="#" className="text-green-600 font-medium mt-2 inline-block">Read More</a>
            </div>
        </div>
        </div>


      </div>
    </div>
  )
}
