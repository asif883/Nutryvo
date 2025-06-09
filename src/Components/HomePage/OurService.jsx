"use-client"

import SectionTitle from "../SharedItems/SectionTitle";

const OurService = () => {

const Services = [
    {
        "id": 1,
        "title": "Mind & Body Harmony",
        "description": "Experience mental peace and physical vitality with mindfulness practices, stress relief, and full-body wellness strategies every day.",
        "image": "/assets/custom-icon-1.png"
    },
    {
        "id": 2,
        "title": "Smart Daily Wellness",
        "description": "Maintain a balanced lifestyle through daily healthy habits, hydration support, sleep tracking, and simple fitness check-ins.",
        "image": "/assets/custom-icon-2.png"
    },
    {
        "id": 3,
        "title": "Intelligent Nutrition Guide",
        "description": "Eat smarter with dynamic meal plans, and nutrient-focused strategies based on your goals and preferences.",
        "image": "/assets/custom-icon-3.png"
    },
    {
        "id": 4,
        "title": "Goal-Based Fitness Plans",
        "description": "Follow expert-designed workout programs tailored to your strength level, body type, and personal health or fitness objectives.",
        "image": "/assets/custom-icon-4.png"
    }
]

    return (
        <div className="my-16 max-w-7xl mx-auto">
            <SectionTitle
             heading="Our Services"
             subHeading="At Nutryvo, we combine the power of AI with expert nutritional guidance to help you lead a healthier, more balanced life."/>
             <div className="flex gap-3 items-center text-center mt-4">
                {
                    Services?.map((service) => <div className="flex flex-col items-center justify-center" key={service?.id}>
                        <img className="" src={service?.image} alt={service?.title} />
                        <h1 className="mt-1.5 text-xl font-semibold">{service?.title}</h1>
                        <p className="mt-1.5 text-gray-600">{service?.description}</p>
                    </div>)
                }
             </div>
        </div>
    );
};

export default OurService;