import React, { useContext, useEffect, useState } from 'react';
import CFsingleItems from '../CF_SingleItems/CFsingleItems';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';


const ConsumerFavoriteItems = () => {
    const { topfood, setTopFood, setCount, count } = useContext(AuthContext);
    const location = useLocation();

    useEffect(() => {
        fetch('http://localhost:5000/topfood')
            .then(res => res.json())
            .then(data => {
                setCount(data.count);
                // data.sort((a, b) => a.ratings - b.ratings);
                setTopFood(data?.result);
            })
    }, [setTopFood])


    return (
        <div className='my-20'>
            <h1 className='text-center my-4 font-bold italic text-2xl underline underline-offset-8 text-slate-500'>TOP 3 MOST Favorite Items</h1>

            {
                !topfood ? <progress className="progress w-full"></progress> :
                    <div className='grid grid-cols-1 lg:grid-cols-5 gap-4 w-11/12 mx-auto'>
                        {
                            topfood?.map(food => <CFsingleItems key={food._id} food={food} ></CFsingleItems>)
                        }
                    </div>
            }



            <div className='flex justify-center mt-5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>

            <Link to='/additems' state={{ from: location }} replace><button className='btn btn-outline btn-error w-full mt-4 font-bold'>Add Your Favorite Food Now</button></Link>
        </div>
    );
};

export default ConsumerFavoriteItems;