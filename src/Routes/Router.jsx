import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../Layout/Main';
import AllFoods from '../Pages/AllFoods/AllFood/AllFoods'
import Home from '../Pages/Home/Home/Home';


const Router = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/home',
                    element: <Home></Home>
                },
                {
                    path: '/allfoods',
                    element: <AllFoods></AllFoods>
                }
            ]
        }
    ])

    return (
        <RouterProvider router={router}>
        </RouterProvider >
    );
};

export default Router;