import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee pauseOnHover = {true}>  <p className='font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore delectus voluptas debitis minus excepturi nulla tempora officiis vero. Repellat culpa, officia cupiditate consectetur dolorem voluptatibus exercitationem voluptas soluta eligendi rem?</p></Marquee>
          
        </div>
    );
};

export default LatestNews;