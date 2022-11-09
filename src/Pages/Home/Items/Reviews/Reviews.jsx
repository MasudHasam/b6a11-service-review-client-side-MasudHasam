import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid'


const Reviews = () => {
    return (
        <div>
            <div className='mt-2 flex gap-2 items-center ml-5'>
                <div>
                    <img className='w-10 h-10 rounded-full' src='https://images.unsplash.com/photo-1611213574794-5e2ea4d6c339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGh1bWFuJTIwYXZhdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="" />
                </div>
                <div>
                    <div className='flex gap-2'>
                        <h1 className='font-bold'>Neathen</h1>
                        <div className='flex gap-1'>
                            <p>4.4/<span className='text-xs'>5</span></p>
                            <StarIcon className="h-6 w-6 text-orange-400" />
                        </div>
                    </div>
                    <p className='text-slate-500'>this is the honest review from this reviewer</p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;