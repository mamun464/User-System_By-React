import { createBrowserRouter } from "react-router-dom";
import Login from '../Components/Login/Login';
import SignUp from '../Components/SignUp/SignUp';
import PrivateRoute from '../Pages/PrivateRoute/PrivateRoute';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Users from '../Pages/Users/Users';
import Dashboard from '../Pages/Dashboard/Dashboard';
const Routes = createBrowserRouter([
    {
        path: "login/",
        element: <Login></Login>
    },
    {
        path: "signup/",
        element: <SignUp></SignUp>
    },
    {
        path: "/",
        element: <PrivateRoute><Home></Home></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "users/",
                element: <PrivateRoute><Users></Users></PrivateRoute>
            },
            {
                path: "dashboard/",
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },

        ],
    },
]);


export default Routes;