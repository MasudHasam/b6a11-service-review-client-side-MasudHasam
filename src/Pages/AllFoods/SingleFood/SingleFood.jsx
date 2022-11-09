import React from 'react';
import { Link } from 'react-router-dom';

const SingleFood = ({ food }) => {
    // console.log(food);
    const { name, picture, price, details, ratings, _id } = food;
    return (
        <div className='mb-28 lg:mb-5'>
            <div className="card w-full h-80 bg-base-100 shadow-xl image-full">
                <figure><img className='w-full' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-5xl font-bold">{name}</h2>
                    <p>{details.slice(0, 200)}...</p>
                    <div>
                        <p className='text-xl font-bold '>Price: ${price}</p>
                        <p>Ratings: <span className='italic text-orange-400'>{ratings}</span> <small><span className='text-xs'>STAR</span></small></p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-success">Buy Now</button>
                        <Link to={`/itemdetails/${_id}`}><button className="btn btn-outline btn-info">More Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;