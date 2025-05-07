import React from 'react';
import swimming from '../../assets/swimming.png'
import classy from '../../assets/class.png'
import playground from '../../assets/playground.png'

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <div><img src={swimming} alt="" /></div>
            <div><img src={classy} alt="" /></div>
            <div><img src={playground} alt="" /></div>
            
        </div>
    );
};

export default Qzone;