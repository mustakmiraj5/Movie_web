import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Details from "../pages/details/Details";
import SearchResult from "../pages/searchResult/SearchResult";
import Explore from "../pages/explore/Explore";
import PageNotFound from "../pages/404/PageNotFound";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App></App>,
        errorElement: <PageNotFound></PageNotFound> ,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {

                path:'/:mediaType/:id',
                element:<Details></Details>
            },
            {
                path:'/search/:query',
                element:<SearchResult></SearchResult>
            },
            {
                path:'/explore/:mediaType',
                element:<Explore></Explore>
            }
            // {
            //     path:'*',
            //     element:<PageNotFound></PageNotFound>
            // }
        ]
    }
])