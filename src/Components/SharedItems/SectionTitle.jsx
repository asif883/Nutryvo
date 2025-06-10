"use-client"
import '../../CSS/font.css'
const SectionTitle = ({heading , subHeading}) => {
    return (
        <div className=" text-center font-palyFair">
            <h1 className="font-semibold text-4xl uppercase">{heading}</h1>
            <p className="max-w-2xl mx-auto text-gray-700 mt-2.5">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;