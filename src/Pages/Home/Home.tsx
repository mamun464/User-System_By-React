import React from 'react';
import DashboardHeader from '../../Components/Dashboard/DashboardHeader';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <DashboardHeader></DashboardHeader>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;