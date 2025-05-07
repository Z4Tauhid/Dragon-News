import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3 '>
            <img src={logo} alt="" />
            <p className='text-accent'>Journalism without Fear or Favour</p>
            <p>{format(new Date(), "EEEE , MMMM MM , yyyy")}</p>
        </div>
    );
};

export default Header;