import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className='font-bold my-5 '>
            <h2>Find US On</h2>
            <div>
            <div className="join join-vertical gap-3">
                    <button className="btn bg-base-100 join-item w-full"><FaFacebook></FaFacebook>Facebook</button>
                    <button className="btn bg-base-100 join-item w-full"><FaTwitter></FaTwitter> Twitter</button>
                    <button className="btn bg-base-100 join-item w-full"><FaInstagram></FaInstagram>Instagram</button>
</div>
            </div>
        </div>
    );
};

export default FindUs;