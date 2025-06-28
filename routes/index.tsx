import { createBrowserRouter } from "react-router-dom";
import Register from "../src/Pages/Register";
import Login from "../src/Pages/Login";
import Home from "../src/Pages/Home";



export const router = createBrowserRouter([


    {
        path: "/",
        element: <Home/>
    },

     {
        path: "/Login",
        element: <Login/>
    },

    {
        path:"/Register",
        element: <Register/>
    },

]);
