import React from 'react';

const SingleFood = () => {
    return (
        <div>
            <div className="card w-full h-80 bg-base-100 shadow-xl image-full">
                <figure><img className='w-full' src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-success">More Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;