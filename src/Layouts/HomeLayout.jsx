import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import LatestNews from '../Components/Header/LatestNews';
import Navbar from '../Components/Header/Navbar';
import RightAside from '../Components/Header/RightAside';
import LeftAside from '../Components/Header/LeftAside';

const HomeLayout = () => {
    return (
        <div>
            <header><Header></Header></header>
            <section className='w-11/12 mx-auto my-3'>
                <LatestNews></LatestNews>
                </section>

                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>
                
                <aside className='col-span-3 h-fit sticky top-2'><LeftAside></LeftAside></aside>
                
                <section className='main col-span-6 text-center'>
                    <Outlet></Outlet>
                </section>

                <aside className='col-span-3 text-center h-fit sticky top-2'><RightAside></RightAside></aside>
                
            </main>
        </div>
    );
};

export default HomeLayout;