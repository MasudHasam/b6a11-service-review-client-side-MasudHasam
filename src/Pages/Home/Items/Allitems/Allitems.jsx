import React, { useEffect, useState } from 'react';
import Item from '../SIngleItems/SingleItem/Item';
import { Link } from 'react-router-dom'


const Allitems = () => {
    const [foods, setFoods] = useState();

    const limit = { limit: '3' }
    useEffect(() => {
        fetch('http://localhost:5000/foods', {
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
        <div className='my-20'>
            <h1 className='text-center my-4 font-bold italic text-2xl underline underline-offset-8 text-orange-700'>All Of My Favorite Food Items</h1>
            {
                !foods ? <progress className="progress w-full"></progress> :

                    <div className='my-4 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        {
                            foods?.map(food => <Item key={food._id} food={food}></Item>)
                        }
                    </div>

            }
            <div className='text-center'>
                <Link to='/allfoods'><button className='btn btn-outline'>See All</button></Link>
            </div>
        </div>
    );
};

export default Allitems;