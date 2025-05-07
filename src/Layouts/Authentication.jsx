import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Header/Navbar';

const Authentication = () => {
    return (
        <div className='bg-base-200'>
            <nav className='w-11/12 mx-auto py-4 '>
                    <Navbar></Navbar>
                </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Authentication;