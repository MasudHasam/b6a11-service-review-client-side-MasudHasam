import React, { useEffect, useState } from 'react';
import TitleHooks from '../../../TitleHooks/TitleHooks';
import SingleFood from '../SingleFood/SingleFood';

const AllFoods = () => {
    TitleHooks('all-foods')
    const [foods, setFoods] = useState();

    const limit = { limit: '6' }
    useEffect(() => {
        fetch('https://b6a11-service-review-server-mu.vercel.app/foods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(limit)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setFoods(data)
            })
    }, [])

    return (
        <div className='my-10'>
            <h1 className='text-center my-4 font-bold italic text-2xl underline underline-offset-8 text-orange-700'>All Available Foods</h1>
            <div className=''>
                {
                    foods?.map(food => <SingleFood key={food._id} food={food}></SingleFood>)
                }
            </div>
        </div>
    );
};

export default AllFoods;