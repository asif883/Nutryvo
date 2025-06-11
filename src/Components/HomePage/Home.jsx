"use-client"
import Banner from "./Banner";
import HealthyMove from "./HealthyMove";
import ImproveLife from "./ImproveLife";
import LatestNews from "./LatestNews";
import OurService from "./OurService";
import Plans from "./Plans";
import Review from "./Review";
import ClientsPartnersAndOffers from "./WhatWeOffer";

const HomeSection = () => {
    return (
        <div>
            <Banner/>
            <OurService/>
            <HealthyMove/>
            <ClientsPartnersAndOffers/>
            <Plans/>
            <ImproveLife/>
            <Review/>
            <LatestNews/>
        </div>
    );
};

export default HomeSection;