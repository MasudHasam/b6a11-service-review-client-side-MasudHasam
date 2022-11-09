import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import Reviews from '../../Reviews/Reviews';

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
                            <button className="btn btn-outline btn-success">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* review area start hear */}

            <div>
                <h1 className='mt-6 text-xl font-bold'>Costomer Review({ratings})</h1>
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-32'>
                    <div className='w-1/2 lg:w-1/5'>
                        <input readOnly type="range" min="0" max="100" value="95" className="range range-xs h-4" />
                        <input readOnly type="range" min="0" max="100" value="75" className="range range-xs h-4" />
                        <input readOnly type="range" min="0" max="100" value="60" className="range range-xs h-4" />
                        <input readOnly type="range" min="0" max="100" value="45" className="range range-xs h-4" />
                    </div>
                    <div className='flex gap-2'>
                        <div>
                            <h1>{ratings}/5</h1>
                        </div>
                        <div className='flex'>
                            <StarIcon className="h-6 w-6 text-orange-400" />
                            <StarIcon className="h-6 w-6 text-orange-400" />
                            <StarIcon className="h-6 w-6 text-orange-400" />
                            <StarIcon className="h-6 w-6 text-orange-400" />
                            <StarIcon className="h-6 w-6 text-gray-400" />
                        </div>
                    </div>
                </div>

                <div className='my-4 flex gap-4'>
                    <h1 className='border border-gray-800 w-28 px-2 rounded-md text-slate-400'>All Stars:({ratings})</h1>
                    <h1 className='border border-gray-800 w-48 px-2 rounded-md text-slate-400'>Additional Feedback(32)</h1>
                    <h1 className='border border-gray-800 w-18 px-2 rounded-md text-slate-400'>Support</h1>
                </div>
                <div className='text-black bg-gray-400 h-0.5'>
                </div>

                {/* thsi is review area */}
                <div className='my-2'>
                    <h1 className='font-bold'>All Reviews:</h1>
                    <Reviews></Reviews>
                </div>
            </div>
            <div className='text-black bg-gray-400 h-0.5'>
            </div>
            <div className='mt-5'>
                <h1 className='text-xl font -bold text-slate-500'>Submit Your Review Hear</h1>
                <form className='mt-3'>
                    <div className=' mb-1'>
                        <input className='mr-2 px-4 rounded-lg' type="text" name='name' placeholder='enter your name' required />
                        <input className=' px-4 rounded-lg ' type="text" name="ulr" id="" placeholder='enter you photo url' required />
                    </div>
                    <div>
                        <textarea className='px-4 py-2 rounded-lg' name="details" id="" cols="60" rows="4" placeholder='type your review hear' required></textarea>
                    </div>
                    <Link><button className='btn btn-outline'>Submit</button></Link>
                </form>
            </div>
        </div>
    );
};

export default ItemDetails;