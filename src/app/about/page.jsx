"use client";

import Image from "next/image";

const coreValues = [
  {
    title: "Holistic Wellness",
    desc: "We believe in a complete approach to health—mind, body, and spirit.",
  },
  {
    title: "Personalized Experience",
    desc: "No one-size-fits-all. We focus on unique journeys and tailored advice.",
  },
  {
    title: "Sustainability",
    desc: "We promote long-term health through consistent, mindful habits.",
  },
];

const teamMembers = [
  {
    name: "Ariana Patel",
    role: "Certified Nutritionist",
    image: "https://media.licdn.com/dms/image/v2/D5603AQE7YCQy8UnDcA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726956397468?e=2147483647&v=beta&t=jv6WmVSZy5JCm2ed_svjtxAe4cnyGN0A48snlR__fxk",
  },
  {
    name: "Daniel Rahman",
    role: "Fitness Coach",
    image: "https://entrepreneursoffinland.fi/wp-content/uploads/2020/02/Daniel_Rahman_Founder_Integrify_Software_Development_Company_Entrepreneurs_of_Finland_4-scaled-e1580815526468.jpg",
  },
  {
    name: "Sadia Amin",
    role: "Mindfulness Expert",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQHuffdSoExFHQ/profile-displayphoto-shrink_200_200/B4EZX0YtCaGgAY-/0/1743561874272?e=2147483647&v=beta&t=ECO2UKwHqShypDzftyKmos5XRacRDc1IbHqrzoEYdFQ",
  },
];


const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-100 via-white to-green-100 py-20">
        <div className="max-w-6xl mx-auto text-center px-6 pt-8">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            Empower Your Wellness Journey
          </h1>
          <p className="text-md text-gray-600 max-w-2xl mx-auto">
            At Nutryvo, we blend nutrition, fitness, and mindfulness to help you achieve a balanced life.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Nutryvo’s mission is to inspire healthier lifestyles by providing personalized and actionable wellness solutions. 
            Whether it's through clean eating, effective workouts, or mindfulness—our goal is to empower every individual.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            We envision a world where wellness is accessible, sustainable, and enjoyable. Nutryvo is more than just a platform—it’s a lifestyle guide for a better you.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-10">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {coreValues.map((item, idx) => (
              <div key={idx} className="p-6 bg-white shadow rounded-xl hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-green-600 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-10">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <div key={i} className="text-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-lg font-semibold text-gray-700">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
