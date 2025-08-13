import { createBrowserRouter } from "react-router-dom";
import Register from "../src/Pages/Register";
import Login from "../src/Pages/Login";
import Home from "../src/Pages/Home";
import Membership from "../src/Pages/Membership";
import Profil from "../src/Pages/Profil";
import DaftarSaya from "../src/Pages/Profil";
import ProtectedRoute from "../src/components/protected/protectedroutes";



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

    {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/Membership",
        element: <Membership />,
      },
      {
        path: "/Profil",
        element: <Profil />,
      },
      {
        path: "/DaftarSaya",
        element: <DaftarSaya />,
      },
    ],
  },
]);
