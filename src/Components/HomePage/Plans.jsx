"use client";

const plans = [
  {
    title: "Basic Plan",
    price: 33,
    billingCycle: "PER MONTH",
    features: [
      "Body Hand and Foot Massage",
      "Spa Therapy",
      "Access to Steam Room",
      "Free Herbal Tea",
    ],
    isPopular: false,
  },
  {
    title: "Professional",
    price: 59,
    billingCycle: "PER MONTH",
    features: [
      "Body Hand and Foot Massage",
      "Spa Therapy",
      "Spa Therapy with Manicure",
      "Nail Cutting and Styling",
      "Free Herbal Tea",
    ],
    isPopular: true,
  },
  {
    title: "Exclusive",
    price: 75,
    billingCycle: "PER MONTH",
    features: [
      "Body Hand and Foot Massage",
      "Spa Therapy",
      "Spa Therapy with Manicure",
      "Nail Cutting and Styling",
      "Hair Coloring",
      "Free Herbal Tea",
    ],
    isPopular: false,
  },
];

const Plans = () => {
  return (
    <div
      className="relative mt-16 md:mt-20 lg:mt-32 min-h-[900px] bg-fixed"
      style={{
        backgroundImage: `url(/assets/plan-background.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative text-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-semibold font-barlow text-white mb-2 uppercase">
            Plans Made for Every Lifestyle
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 text-sm md:text-base lg:text-lg">
            From basic nutrition support to elite health tracking — explore flexible plans built to match your goals.
          </p>
        </div>

        {/* Grid Responsive */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-10">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="relative bg-white shadow-lg text-center p-6 sm:p-8 flex flex-col rounded-lg"
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-bl-md">
                  ★ Popular
                </div>
              )}
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">{plan.title}</h3>
              <p className="text-3xl sm:text-4xl font-bold my-4">${plan.price}</p>
              <p className="text-gray-500 mb-6">{plan.billingCycle}</p>

              <ul className="text-gray-600 text-sm sm:text-base space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <div className="mt-auto pt-4">
                <button className="w-full sm:w-auto border border-green-500 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-2 px-6 rounded-full transition duration-300">
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
