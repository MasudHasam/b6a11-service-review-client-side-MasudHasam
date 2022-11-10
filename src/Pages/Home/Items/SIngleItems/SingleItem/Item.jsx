import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import TitleHooks from '../../../../../TitleHooks/TitleHooks';


const Item = ({ food }) => {
    const { name, picture, price, details, ratings, _id } = food;
    // console.log(name, price, picture, details);
    return (
        <div className='border border-black rounded-md bg-black'>
            {/* <ItemDetails></ItemDetails> */}
            <PhotoProvider>
                <PhotoView className='className="hero min-h-screen"' src={picture}>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${picture})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-4xl font-bold">{name}</h1>
                                <p className="mb-5">{details.slice(0, 100)}...</p>
                                <div className='flex justify-center gap-2'>
                                    <p className='my-4 font-extrabold'>Price: ${price}</p>
                                    <p className='my-4 font-extrabold text-orange-300'>Ratings: {ratings}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </PhotoView>
            </PhotoProvider>
            <div className='flex justify-center gap-4 my-2'>
                <Link><button className="btn btn-outline btn-success w-40">Buy Now</button></Link>
                <Link to={`/itemdetails/${_id}`}><button className="btn btn-outline btn-info w-40">More Details</button></Link>
            </div>
        </div>
    );
};

export default Item;