import { createBrowserRouter } from "react-router-dom";
import Browse from "../browseComponent/Browse";
import TestBrowse from "../browseComponent/TestBrowse";
import Login from "../loginComponent/Login";
import { RouterProvider } from "react-router-dom";



const Body = () => {


    const appRouter = createBrowserRouter(
        [
            {
                path: '/',
                element: <Login />
            },
            {
                path: '/browse',
                element: <Browse />
            }
        ]
    )

    return (
        <RouterProvider router={appRouter} />
    )
}

export default Body;