"use-client"
import '../../CSS/font.css'
const SectionTitle = ({heading , subHeading}) => {
    return (
        <div className="max-w-2xl mx-auto text-center font-palyFair">
            <h1 className="font-semibold text-4xl">{heading}</h1>
            <p className="text-gray-700 mt-1.5">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;