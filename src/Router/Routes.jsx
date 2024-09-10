import { createBrowserRouter } from "react-router-dom";
import Login from '../Components/Login/Login';
import SignUp from '../Components/SignUp/SignUp';
import PrivateRoute from '../Pages/PrivateRoute/PrivateRoute';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Users from '../Pages/Users/Users';
import BASE_URL from '../../public/config';
import Dashboard from '../Pages/Dashboard/Dashboard';
import UsersList from "../Components/UsersList/UsersList";


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
                path: "/users",
                element: <UsersList></UsersList>

            },
            {
                path: "/users/:user_id/:month/:year",
                // loader: ({ params }) => fetch(`${BASE_URL}/api/hostel/monthly-user-details/?user_id=${parseInt(params.user_id)}&year=${parseInt(params.year)}&month=${parseInt(params.month)}`),
                element: <UsersList></UsersList>,

            },
            {
                path: "/users/deactivate/:user_id/",
                // console.log({params}),
                loader: ({ params }) => fetch(`${BASE_URL}/api/user/deactivate/${parseInt(params.user_id)}`),
                element: <UsersList></UsersList>,

            },
            {
                path: "dashboard/",
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },

        ],
    },
]);


export default Routes;