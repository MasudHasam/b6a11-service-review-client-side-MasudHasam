import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ItemDetails = () => {
    const data = useLoaderData()
    const { name, price, details, ratings, address, email, phone, picture } = data;
    return (
        <div>
            <h1 className='text-center font-extrabold text-5xl my-6 text-slate-500'>All Details About <span className='text-green-500'>{name}</span></h1>
            <div className='mt-2 border border-black rounded-md'>
                <div className="hero min-h-screen" style={{ backgroundImage: `url(${picture})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">{name}</h1>
                            <p className="mb-5 font-bold italic">{details}</p>
                            <div className='flex justify-center font-extrabold gap-4 my-6 text-orange-400'>
                                <p>Price: ${price}</p>
                                <p>Ratings: {ratings}</p>
                            </div>
                            <h1 className='font-extrabold'>Contact info</h1>
                            <div>
                                <p>Phone: {phone}</p>
                                <p>Email: {email}</p>
                                <p>Address: {address}</p>
                            </div>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;