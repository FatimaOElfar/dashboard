import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import {Signup} from "./pages/Signup/Signup.jsx";
import {Dashboard} from "./pages/Dashboard/Dashboard.jsx";
import {Members} from "./pages/Members/Members.jsx";
import Root from "./components/Root/Root.jsx";
import {Departments} from "./pages/Departments/Departments.jsx";
import {Attendance} from "./pages/Attendance/Attendance.jsx";
import {Leaves} from "./pages/Leaves/Leaves.jsx";
import {Projects} from "./pages/Projects/Projects.jsx";
import {Events} from "./pages/Events/Events.jsx";
import {Payroll} from "./pages/Payroll/Payroll.jsx";
import {Settings} from "./pages/Settings/Settings.jsx";
import {SignIn} from "./pages/Signin/SignIn.jsx";

const routes = createBrowserRouter([
    {
        path: '/', element: <Root/>, children: [
            {index: true, element: <Dashboard/>},
            {path: 'dashboard', element: <Dashboard/>},
            {path: 'members', element: <Members/>},
            {path: 'departments', element: <Departments/>},
            {path: 'attendance', element: <Attendance/>},
            {path: 'leaves', element: <Leaves/>},
            {path: 'projects', element: <Projects/>},
            {path: 'events', element: <Events/>},
            {path: 'payroll', element: <Payroll/>},
            {path: 'settings', element: <Settings/>},
        ]
    },
    {path: '/signup', element: <Signup/>},
    {path: '/signin', element: <SignIn/>}
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={routes}/>
    </React.StrictMode>,
)
