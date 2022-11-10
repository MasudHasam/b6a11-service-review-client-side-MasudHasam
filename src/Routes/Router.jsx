import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../Authentication/Login/Login';
import SignUp from '../Authentication/SignUp/SignUp';
import Main from '../Layout/Main';
import AllFoods from '../Pages/AllFoods/AllFood/AllFoods'
import Blogs from '../Pages/Blogs/Blogs';
import Additems from '../Pages/Home/AllConsumerFavoriteItems/Additems/Additems';
import Home from '../Pages/Home/Home/Home';
import ItemDetails from '../Pages/Home/Items/SIngleItems/ItemDetsils/ItemDetails';
import MyReviews from '../Pages/MyReviews/MyReviews/MyReviews'
import Update from '../Pages/MyReviews/Update/Update';
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
                },
                {
                    path: '/additems',
                    element: <ProtectedRout><Additems></Additems></ProtectedRout>
                },
                {
                    path: '/blogs',
                    element: <Blogs></Blogs>
                },
                {
                    path: '/update/:id',
                    element: <Update></Update>,
                    loader: ({ params }) => {
                        return fetch(`http://localhost:5000/rvw/${params.id}`)
                    }
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