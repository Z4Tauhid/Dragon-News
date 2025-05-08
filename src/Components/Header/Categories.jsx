import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch("/categories.json").then ((res) => res.json() )

const Categories = () => {
    
    const categories = use(categoryPromise)
    return (
        <div>
            <h1 className='text-center'>Categories ({categories.length})</h1>
            <div className='grid grid-cols-1 gap-2 mt-4 justify-start pb-10'>
                {categories.map (category => <NavLink to={`/category/${category.id}`} className={'btn bg-white border-0 shadow-none hover:bg-base-200 shadow-2xl'}>{category.name}</NavLink>)}
            </div>
        </div>

    );
};

export default Categories;