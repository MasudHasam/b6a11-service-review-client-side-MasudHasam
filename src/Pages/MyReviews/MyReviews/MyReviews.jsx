import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import TitleHooks from '../../../TitleHooks/TitleHooks';
import MySingleR from '../MySingleR/MySingleR';

const MyReviews = () => {
    TitleHooks('reviews')
    const { user, loading } = useContext(AuthContext);
    const [review, setReview] = useState();
    const email = user?.email



    useEffect(() => {
        fetch(`https://b6a11-service-review-server-mu.vercel.app/review/${email}`)
            .then(res => res.json())
            .then(data => {
                setReview(data)
            })
    }, [])


    //this function is for delete
    const hadelDelete = (id) => {
        const proced = window.confirm('Are you sure you want to delete this item')
        if (proced) {
            fetch(`https://b6a11-service-review-server-mu.vercel.app/reviewItems/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        const remaining = review.filter(rvw => rvw._id !== id)
                        setReview(remaining);
                    }


                });
        }
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-1 my-10 gap-4'>
            <h1 className='text-3xl text-center'>All Your Review is hear</h1>
            {
                review?.[0]?.name ?
                    review?.map(rvw => <MySingleR key={rvw._id} rvw={rvw} hadelDelete={hadelDelete}></MySingleR>)
                    :
                    <div className='my-10 text-center text-xl lg:text-6xl font-bold'>No reviews you added</div>
            }
        </div>
    );
};

export default MyReviews;