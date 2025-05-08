import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import HomeMiddle from "../Components/Header/HomeMiddle";
import Category from "../Components/Header/Category";
import Authentication from "../Layouts/Authentication";
import Login from "../Layouts/Login";
import Register from "../Layouts/Register";
import About from "../Components/Header/About";
import Career from "../Components/Header/Career";

const router = createBrowserRouter (

    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,

            children: [

                {

                    path: "",
                    element: <HomeMiddle></HomeMiddle>
                },


                {
                    path: '/category/:id',
                    element: <Category></Category>,
                    loader: () => fetch("/news.json")
                }



              
            ]
        },
       
       
        {
            path: '/auth',
            element: <Authentication></Authentication>,

            children: [

                {
                    path: '/auth/login',
                    element: <Login></Login>
                },

                {
                    path: '/auth/register',
                    element: <Register></Register>
                }

            ]
        },
       
        {
            path: '/news',
            element: <h2>News Layout</h2>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/career',
            element: <Career></Career>
        },
        {
            path: '/*',
            element: <h2>Error</h2>
        },
    ]
)

export default router;