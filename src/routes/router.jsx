import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Rider from "../pages/Rider/Rider";
import Pricing from "../pages/Pricing/Pricing";
import About from "../pages/About/about";
import TrackOrder from "../pages/TrackOrder/TrackOrder";
import Services from "../pages/Services/Services";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/rider',
                element: <Rider></Rider>
            },
            {
                path: '/pricing',
                element: <Pricing></Pricing>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/track-order',
                element: <TrackOrder></TrackOrder>
            },
        ]
    },
]);