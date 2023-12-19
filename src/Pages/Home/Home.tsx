import React from 'react';
import DashboardHeader from '../../Components/Dashboard/DashboardHeader';
import { Navigate, Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import Dashboard from '../Dashboard/Dashboard';
import { isLoggedIn } from '../../redux/authSlice';

const Home = () => {
    // let isLogin = true;

    return (
        <div>
            <DashboardHeader></DashboardHeader>

            <Outlet></Outlet>

        </div>
    );


};

export default Home;