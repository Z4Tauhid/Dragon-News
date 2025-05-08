import React from 'react';
import Header from './Header';
import { NavLink } from 'react-router';
import job from '../../assets/jb.jpg'

const Career = () => {
    return (
        <div>
            <Header></Header>

            <div className='nav flex gap-5 justify-center mt-5 gap-20 '>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>

                        <div className='text-center justify-center items-center flex py-10'>
            
                        <img src={job}  alt="" />
            
                        </div>


                        <div className='w-8/12 mx-auto flex flex-col gap-5 pb-20'>
                <h1 className='text-center text-3xl font-bold'>OOops..!! We Don't Have Any Openings Now.</h1>
                <p className='text-center'>Please keep an eye for the upcoming Job openings.</p>
                
                
            </div>
        </div>
    );
};

export default Career;