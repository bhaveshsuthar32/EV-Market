import AdminLayout from "../pages/admin/pages";
import Login from "../pages/admin/pages/login";
import { Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import {
    AboutUs,
    BicycleData,
    BikeData,
    CarData,
    Contact,
    FourDetails,
    Home,
    ScooterData,
    ThreeDetails,
    TwoDetails
} from "../pages/user/pages";


const ProtecteRoute = ({ children, isAdmin }) => {
    const token = localStorage.getItem("accessToken");
    const user = JSON.parse(localStorage.getItem("user"));

    // check if the user is authenticated
    if (!token || !user) {
        toast.error("You must be logged in to access this page.");
        return <Navigate to={"/admin/login"} replace />;
    }

    // check if admin is trying to access user routes
    if (!isAdmin && user?.isAdmin === true) {
        toast.error("Admins cannot access user pages.");
        return <Navigate to="/admin/" replace />;
    }

    return children

}


const userRoutes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/adout",
        element: <AboutUs />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/bike",
        element: <BikeData />,
    },
    {
        path: "/scooter",
        element: <ScooterData />,
    },
    {
        path: "/car",
        element: <CarData />,
    },
    {
        path: "/bicycle",
        element: <BicycleData />,
    },
    {
        path: "/two-details",
        element: <TwoDetails />,
    },
    {
        path: "/three-details",
        element: <ThreeDetails />,
    },
    {
        path: "/four-details",
        element: <FourDetails />,
    },
]

const adminRouts = [
    {
        path: "/admin/*",
        element: (
            <ProtecteRoute isAdmin={true}>
                < AdminLayout />
            </ProtecteRoute>
        )
    },
    {
        path: "/admin/login",
        element: <Login />
    }
]



export { userRoutes, adminRouts }