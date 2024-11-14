
import AdminLayout from "../pages/admin/pages";
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
        element: < AdminLayout/>
    }
]



export {userRoutes, adminRouts}