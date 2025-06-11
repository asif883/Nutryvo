"use-client"
import Banner from "./Banner";
import HealthyMove from "./HealthyMove";
import ImproveLife from "./ImproveLife";
import OurService from "./OurService";
import Plans from "./Plans";
import Review from "./Review";

const HomeSection = () => {
    return (
        <div>
            <Banner/>
            <OurService/>
            <HealthyMove/>
            <Plans/>
            <ImproveLife/>
            <Review/>
        </div>
    );
};

export default HomeSection;