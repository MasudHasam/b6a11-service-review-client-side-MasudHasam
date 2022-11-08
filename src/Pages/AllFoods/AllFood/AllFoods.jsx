import React from 'react';
import SingleFood from '../SingleFood/SingleFood';

const AllFoods = () => {
    return (
        <div className='my-10'>
            <h1 className='text-center my-4 font-bold italic text-2xl underline underline-offset-8 text-orange-700'>All Available Foods</h1>
            <div>
                <SingleFood></SingleFood>
            </div>
        </div>
    );
};

export default AllFoods;