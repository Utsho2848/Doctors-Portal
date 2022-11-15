import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import DoctorAppointment from "../../pages/Home/DoctorAppointment/DoctorAppointment";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Login/Signup";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/appointment',
                element: <DoctorAppointment></DoctorAppointment>
            }
        ]
    }
])