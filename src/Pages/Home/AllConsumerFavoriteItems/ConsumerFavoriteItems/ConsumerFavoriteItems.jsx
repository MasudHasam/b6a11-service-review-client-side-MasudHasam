import React from 'react';
import CFsingleItems from '../CF_SingleItems/CFsingleItems';

const ConsumerFavoriteItems = () => {
    return (
        <div className='my-20'>
            <h1 className='text-center my-4 font-bold italic text-2xl underline underline-offset-8 text-slate-500'>All Consumer's Added Food Items.</h1>
            <CFsingleItems></CFsingleItems>
        </div>
    );
};

export default ConsumerFavoriteItems;