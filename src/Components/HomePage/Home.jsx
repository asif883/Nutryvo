"use-client"
import Banner from "./Banner";
import HealthyMove from "./HealthyMove";
import ImproveLife from "./ImproveLife";
import OurService from "./OurService";
import Plans from "./Plans";

const HomeSection = () => {
    return (
        <div>
            <Banner/>
            <OurService/>
            <HealthyMove/>
            <ImproveLife/>
            <Plans/>
        </div>
    );
};

export default HomeSection;