import React from 'react';

const ImproveLife = () => {
    return (
        <div className='my-16 md:my-24 lg:my-32 max-w-7xl mx-auto flex gap-8 flex-col md:flex-row items-center'>
            <div className='flex-1'>
                <h1 className="mb-5 text-2xl md:text-4xl font-bold font-barlow">Improve Your Life</h1>
                <p className='text-gray-500'>At Nutryvo, we believe that a better life starts with better choices—one meal, one step, one habit at a time. From personalized nutrition tips to mental wellness support and daily activity tracking, Nutryvo helps you stay on track, feel your best, and live fully. Whether you’re aiming to boost energy, lose weight, or simply feel good, we’re here to guide you every step of the way.</p>
            </div>
            <div className='flex-1 w-full flex flex-col gap-2.5'>
                <h3 className='font-semibold'>Body Balance</h3>
                <progress className="progress progress-success w-full" value="66" max="100"></progress>
                <h3 className='font-semibold'>Daily Exercise</h3>
                <progress className="progress progress-success w-full" value="85" max="100"></progress>
                <h3 className='font-semibold'>Physical Activity</h3>
                <progress className="progress progress-success w-full" value="95" max="100"></progress>
                <h3 className='font-semibold'>Nutrition Plan</h3>
                <progress className="progress progress-success w-full" value="75" max="100"></progress>
            </div>
        </div>
    );
};

export default ImproveLife;