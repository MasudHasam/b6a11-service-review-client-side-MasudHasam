import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../Authentication/Login/Login';
import SignUp from '../Authentication/SignUp/SignUp';
import Main from '../Layout/Main';
import AllFoods from '../Pages/AllFoods/AllFood/AllFoods'
import Home from '../Pages/Home/Home/Home';
import ItemDetails from '../Pages/Home/Items/SIngleItems/ItemDetsils/ItemDetails';
import MyReviews from '../Pages/MyReviews/MyReviews';
import ProtectedRout from '../ProtectedRout/ProtectedRout';


const Router = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            errorElement: <div>404!<br />error</div>,
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
                },
                {
                    path: '/itemdetails/:id',
                    element: <ItemDetails></ItemDetails>,
                    loader: ({ params }) => {
                        return fetch(`http://localhost:5000/foods/${params.id}`);
                    }
                },
                {
                    path: '/signin',
                    element: <Login></Login>
                },
                {
                    path: '/signup',
                    element: <SignUp></SignUp>
                },
                {
                    path: '/myreviews',
                    element: <ProtectedRout><MyReviews></MyReviews></ProtectedRout>
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