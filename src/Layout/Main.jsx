import React from 'react';
import Navbar from '../Sheared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Sheared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;