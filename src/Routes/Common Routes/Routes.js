import { createBrowserRouter } from "react-router-dom";
import AddDoctor from "../../Dashboard/AddDoctor";
import AllUsers from "../../Dashboard/AllUsers";
import ManageDoctors from "../../Dashboard/ManageDoctors";
import MyAppointment from "../../Dashboard/MyAppointment";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import DoctorAppointment from "../../pages/Home/DoctorAppointment/DoctorAppointment";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Login/Signup";
import AdminRoute from "../PrivateRoutes/AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

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
                element: <PrivateRoute><DoctorAppointment></DoctorAppointment></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addDoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/manageDoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
        ]
    }
])