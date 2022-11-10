import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid'
import TitleHooks from '../../../../TitleHooks/TitleHooks';


const Reviews = ({ review }) => {
    // console.log(review);
    TitleHooks('items-details')
    const { picture, name, ratings, details } = review;
    return (
        <div>
            <div className='mt-2 flex gap-2 items-center ml-5'>
                <div>
                    <img className='w-10 h-10 rounded-full' src={picture} alt="" />
                </div>
                <div>
                    <div className='flex gap-2'>
                        <h1 className='font-bold'>{name}</h1>
                        <div className='flex gap-1'>
                            <p>{ratings}/<span className='text-xs'>5</span></p>
                            <StarIcon className="h-6 w-6 text-orange-400" />
                        </div>
                    </div>
                    <p className='text-slate-500'>{details}</p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;