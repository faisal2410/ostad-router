import { createBrowserRouter } from "react-router-dom";

import UserDetails from "../components/userDetails/UserDetails";
import Users from "../components/users/Users";
import Main from "../layout/Main";
import { userDetailsLoader, usersLoader } from "../loaders/userLoader";
import Home from "../pages/Home";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/users",
                loader:usersLoader,
                element:<Users></Users>
            },
            {
                path:"/users/:userId",
                loader:userDetailsLoader,
                element:<UserDetails></UserDetails>
            }
        ]
    }

])