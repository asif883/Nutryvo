import { HashLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <HashLoader 
             color="#2bb643"
             loading 
             size={60}
             speedMultiplier={1}
            />
        </div>
    );
};

export default Loading;