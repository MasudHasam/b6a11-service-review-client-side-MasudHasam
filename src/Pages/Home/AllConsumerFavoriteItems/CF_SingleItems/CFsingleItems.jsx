import React from 'react';

const CFsingleItems = ({ food }) => {
    const { name, picture, ratings, details } = food;
    return (
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-4'>
            <div className="card w-full lg:w-56 bg-base-100 shadow-xl image-full">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{ratings}/5</p>
                    <p>{details.slice(0, 100)}...</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CFsingleItems;