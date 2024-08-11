import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Pages/Home/Home';
import Login from '../Components/Pages/Login/Login';
import Chatting from '../Components/Shared/Chatting/Chatting';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/",
                element: <Chatting></Chatting>
            }
        ]
    },
    {
        path: "login",
        element: <Login></Login>
    }
])
export default Routes;