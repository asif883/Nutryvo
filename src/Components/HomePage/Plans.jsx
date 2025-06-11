"use client";

const plans = [
  {
    "title": "Basic Plan",
    "price": 33,
    "billingCycle": "PER MONTH",
    "features": [
      "Body Hand and Foot Massage",
      "Spa Therapy"
    ],
    "isPopular": false
  },
  {
    "title": "Professional",
    "price": 59,
    "billingCycle": "PER MONTH",
    "features": [
      "Body Hand and Foot Massage",
      "Spa Therapy",
      "Spa Therapy with Manicure",
      "Nail Cutting and Styling"
    ],
    "isPopular": true
  },
  {
    "title": "Exclusive",
    "price": 75,
    "billingCycle": "PER MONTH",
    "features": [
      "Body Hand and Foot Massage",
      "Spa Therapy",
      "Spa Therapy with Manicure",
      "Nail Cutting and Styling",
      "Hair Coloring"
    ],
    "isPopular": false
  }
]




const Plans = () => {
  return (
    <div
      className="relative mt-16 md:mt-20 lg:mt-32 h-[700px] bg-fixed"
      style={{ backgroundImage: `url(/assets/plan-background.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
    <div className="absolute inset-0 bg-black/60"></div>
      {/* Content */}
      <div className="relative text-center py-16 px-6">
        <div className="text-center ">
          <h1 className="text-3xl font-semibold font-barlow text-white mb-2 uppercase"> Plans Made for Every Lifestyle</h1>
          <p className="max-w-2xl mx-auto text-gray-200"> From basic nutrition support to elite health tracking — explore flexible plans built to match your goals.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-10">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative bg-white shadow-lg text-center p-8 flex flex-col`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-bl-md">
                  ★ Popular
                </div>
              )}
              <h3 className="text-2xl font-semibold text-gray-800">{plan.title}</h3>
              <p className="text-4xl font-bold my-4">${plan.price}</p>
              <p className="text-gray-500 mb-6">{plan.billingCycle}</p>
              <ul className="text-gray-600 space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              
              <div className="mt-auto pt-4">
                <button className="border border-green-500 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-2 px-6 rounded-full cursor-pointer">
                  Purchase
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Plans;