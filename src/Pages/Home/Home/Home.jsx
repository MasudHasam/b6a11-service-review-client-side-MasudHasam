import React from 'react';
import ConsumerFavoriteItems from '../AllConsumerFavoriteItems/ConsumerFavoriteItems/ConsumerFavoriteItems';
import Header from '../Header/Header'
import Allitems from '../Items/Allitems/Allitems';
import UsesTechnology from '../UsesTechnology/UsesTechnology';

const Home = () => {
    return (
        <div>
            <h1 className='text-center my-4 font-bold italic text-2xl underline underline-offset-8 text-orange-700'>Welcome To Hungry Chelf</h1>
            <Header></Header>
            <Allitems></Allitems>
            <ConsumerFavoriteItems></ConsumerFavoriteItems>
            <UsesTechnology></UsesTechnology>
        </div>
    );
};

export default Home;