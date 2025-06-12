"use client"

import SectionTitle from "../SharedItems/SectionTitle";

const OurService = () => {

const Services = [
    {
        id: 1,
        title: "Mind & Body Harmony",
        description: "Achieve peace and vitality with daily mindfulness, stress relief, and wellness practices.",
        image: "/assets/custom-icon-1.png"
    },
    {
        id: 2,
        title: "Smart Daily Wellness",
        description: "Build consistent healthy habits with hydration, sleep tracking, and simple daily fitness check-ins.",
        image: "/assets/custom-icon-2.png"
    },
    {
        id: 3,
        title: "Intelligent Nutrition Guide",
        description: "Get personalized smart meal plans and nutrient tips tailored to your goals and preferences.",
        image: "/assets/custom-icon-3.png"
    },
    {
        id: 4,
        title: "Goal-Based Fitness Plans",
        description: "Follow effective customized workouts designed for your strength, body type, and health goals.",
        image: "/assets/custom-icon-4.png"
    }
];



    return (
        <div className="my-10 md:my-14 lg:my-20 max-w-7xl mx-auto">
            <SectionTitle
             heading="Our Services"
             subHeading="At Nutryvo, we combine the power of AI with expert nutritional guidance to help you lead a healthier, more balanced life."/>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center text-center mt-16">
                {
                    Services?.map((service) => <div className="flex flex-col items-center justify-center" key={service?.id}>
                        <img className="" src={service?.image} alt={service?.title} />
                        <h1 className="mt-1.5 text-xl font-semibold font-barlow">{service?.title}</h1>
                        <p className="mt-1.5 text-gray-500">{service?.description}</p>
                    </div>)
                }
             </div>
        </div>
    );
};

export default OurService;