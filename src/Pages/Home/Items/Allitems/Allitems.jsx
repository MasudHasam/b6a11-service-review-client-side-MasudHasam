import React from 'react';
import Item from '../SIngleItems/SingleItem/Item';
import { Link } from 'react-router-dom'

const Allitems = () => {
    return (
        <div className='my-20'>
            <h1 className='text-center my-4 font-bold italic text-2xl underline underline-offset-8 text-orange-700'>All Of My Favorite Food Items</h1>
            <div className='my-4'>
                <Item></Item>
            </div>
            <div className='text-center'>
                <Link to='/allfoods'><button className='btn btn-outline'>See All</button></Link>
            </div>
        </div>
    );
};

export default Allitems;