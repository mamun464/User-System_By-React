import React, { useEffect } from 'react';
import { isLoggedIn } from '../../redux/authSlice';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        // Check if the user is logged in and accessing the root ("/") route
        // console.log("location", location.pathname);

        if (isLoggedIn() && location.pathname == '/') {
            navigate('/dashboard');
        }
    }, [location.pathname]);

    if (isLoggedIn()) {
        return children;
    }
    else {
        return <Navigate to={"/login"}></Navigate>
    }
};

export default PrivateRoute;