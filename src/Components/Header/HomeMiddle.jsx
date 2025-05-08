import React from 'react';
import news from "../../assets/news.jpg"


const HomeMiddle = () => {
    return (
        <div className='flex flex-col gap-5'>
            <h1 className='text-4xl font-bold'>News At Your Doorstep</h1>
            <h1 className='text-2xl'>Read the International Edition on any device.</h1>
            <img src={news} className='shadow-2xl rounded-2xl' alt="" />
        </div>
    );
};

export default HomeMiddle;