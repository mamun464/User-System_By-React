import React, { useEffect, useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { FiSettings } from "react-icons/fi";
import { LuBell } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPowerOff } from "react-icons/fa";
import { HiMiniBarsArrowDown } from "react-icons/hi2";


const DashboardHeader: React.FC = () => {
    const navigate = useNavigate();
    const [toastShow, setToastShow] = useState(0)
    const componentRef = useRef(null);
    const navBar = <>
        <li> <NavLink className={({ isActive }) => isActive ? 'bg-[#7F56D9] py-2 px-3 rounded-md ' : 'hover:bg-[#7F56D9] py-2 px-3 rounded-md'} to="/dashboard">Home</NavLink> </li>
        <li> <NavLink className={({ isActive }) => isActive ? 'bg-[#7F56D9] py-2 px-3 rounded-md' : 'hover:bg-[#7F56D9] py-2 px-3 rounded-md'} to="users/">Users</NavLink> </li>
        <li> <NavLink className={({ isActive }) => isActive ? 'bg-[#7F56D9] py-2 px-3 rounded-md' : 'hover:bg-[#7F56D9] py-2 px-3 rounded-md'} to="Project/">Project</NavLink> </li>
        <li> <NavLink className={({ isActive }) => isActive ? 'bg-[#7F56D9] py-2 px-3 rounded-md' : 'hover:bg-[#7F56D9] py-2 px-3 rounded-md'} to="Task/">Task</NavLink> </li>
        <li> <NavLink className={({ isActive }) => isActive ? 'bg-[#7F56D9] py-2 px-3 rounded-md' : 'hover:bg-[#7F56D9] py-2 px-3 rounded-md'} to="Reporting/">Reporting</NavLink> </li>
    </>

    const dispatch = useDispatch();
    const userId = localStorage.getItem('id');
    const authStatus = useSelector((state: RootState) => state.auth.status);
    const regStatus = useSelector((state: RootState) => state.registration.status);

    const [loginToastShown, setLoginToastShown] = useState(false);
    const [regToastShown, setRegToastShown] = useState(false);
    const [isVisible, setIsVisible] = useState(window.innerWidth < 850);

    useEffect(() => {
        const handleResize = () => setIsVisible(window.innerWidth < 850);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (authStatus === 'succeeded' && !loginToastShown) {
            // console.log("Showing---------------------------->");

            setLoginToastShown(true);


        }
        if (regStatus === 'succeeded' && !regToastShown) {

            toast.success(`Registration Successful`);
            setRegToastShown(true);
        }
    }, []);




    const handleLogout = () => {
        console.log("Logout");
        localStorage.removeItem('id');
        localStorage.removeItem('user');
        window.location.reload();
        // navigate('/login');

    }

    const [userData, setUserData] = useState<any>(null);
    const [isHovered, setIsHovered] = useState(false);
    useEffect(() => {
        const storedUserData = localStorage.getItem('user');
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData)); // Parse and set the user data
        }
    }, []);

    // Listen for changes to localStorage and update state in real-time
    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === 'user') {
                const updatedUserData = localStorage.getItem('user');
                if (updatedUserData) {
                    setUserData(JSON.parse(updatedUserData)); // Update state with new user data
                }
            }
        };

        // Add event listener to detect localStorage changes
        window.addEventListener('storage', handleStorageChange);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);



    // console.log(userData?.user_data)


    return (
        <>

            <div className='bg-[#6941C6] py-5 font-inter'>
                <div className='max-w-7xl mx-auto'>
                    <div className='flex justify-between'>
                        {/* right Part */}
                        <div className='flex items-center justify-between gap-7'>
                            {/* Logo and Stuck */}
                            <div className='hidden smaller-than-850:flex smaller-than-850:gap-3 smaller-than-850:items-center'>
                                <img className='w-16' src="/headerLogo.png" alt="Not_Found" />
                                <h1 className='hidden smaller-than-850:block text-[#fff] text-xl font-bold w-24'>
                                    MM System
                                </h1>

                            </div>
                            {/* Nav bar */}
                            <div className='hidden smaller-than-850:flex smaller-than-850:list-none gap-7 smaller-than-850:text-[#F4EBFF] smaller-than-850:font-medium'>
                                {navBar}
                            </div>
                            <div style={{ display: isVisible ? 'block' : 'none' }} className="drawer">
                                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                                <div className="drawer-content">
                                    {/* Page content here */}
                                    <label htmlFor="my-drawer" className="text-white text-2xl ">
                                        <div className='flex gap-1 items-center'>
                                            <img className='w-16' src="/headerLogo.png" alt="Not_Found" />
                                            <HiMiniBarsArrowDown />
                                        </div>

                                    </label>

                                </div>
                                <div className="drawer-side">
                                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                    <ul className="menu bg-base-200 text-base-content min-h-full w-60 p-4">
                                        {/* Sidebar content here */}
                                        <div className='flex flex-col items-center mb-10 mt-3'>
                                            <div className='flex items-center'>
                                                <img className='w-16' src="/headerLogo.png" alt="Not_Found" />
                                                <h1 className='text-black text-xl font-bold ml-4'>
                                                    Meal Management System
                                                </h1>
                                            </div>
                                            <hr className='w-full mt-2 border-t-2 border-gray-300' />
                                        </div>


                                        {navBar}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* right Part */}
                        <div className='flex gap-4  justify-center items-center'>
                            <div className='flex text-[#D6BBFB] gap-2 text-xl'>
                                <p className='p-[10px]'><CiSearch /></p>
                                <p className='p-[10px]'><FiSettings /></p>
                                <p className='p-[10px]'><LuBell /></p>
                            </div>
                            <div className='relative'>
                                <div
                                    ref={componentRef}
                                    className='flex items-center gap-2'
                                    onMouseEnter={() => setIsHovered(true)}
                                // onMouseLeave={() => setIsHovered(false)}
                                >
                                    <img
                                        src={userData?.user_data?.user_profile_img || 'https://i.ibb.co/rcYfSrY/Avatar.png'}
                                        alt='User_pic'
                                        style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                                    />


                                </div>

                                {/* The card is shown when hovering */}
                                {isHovered && (
                                    <div
                                        className="absolute flex right-0 mt-2 py-4 px-4 w-80 bg-white rounded-xl shadow-lg space-y-2"
                                        style={{ zIndex: 10 }}
                                    >
                                        {/* Close Button */}
                                        <button
                                            className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
                                            onClick={() => setIsHovered(false)}// Replace with your close handler function
                                            title="Close"
                                        >
                                            ✖
                                        </button>

                                        <img
                                            className="block mx-auto h-24 rounded-full"
                                            src={userData?.user_data?.user_profile_img || 'https://i.ibb.co/rcYfSrY/Avatar.png'}
                                            alt="DP"
                                        />
                                        <div className="text-center space-y-2">
                                            <p className="text-lg text-black font-semibold">
                                                {userData?.user_data?.fullName}
                                            </p>
                                            <p className="text-slate-500 font-medium">
                                                {userData?.user_data?.is_superuser
                                                    ? userData?.user_data?.is_manager
                                                        ? 'Admin & Manager'
                                                        : 'Admin & Member'
                                                    : userData?.user_data?.is_manager
                                                        ? 'Manager'
                                                        : 'Member'}
                                            </p>

                                            <div className='flex items-center justify-between'>
                                                <button
                                                    className={`px-4 py-1 text-sm font-semibold rounded-full border ${userData?.user_data?.is_active
                                                        ? 'text-green-600 border-green-200 hover:text-white hover:bg-green-600 hover:border-transparent focus:ring-green-600'
                                                        : 'text-red-600 border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:ring-red-600'
                                                        }`}
                                                    style={{
                                                        backgroundColor: userData?.user_data?.is_active ? 'transparent' : 'red',
                                                        color: userData?.user_data?.is_active ? 'green' : 'red'
                                                    }}
                                                    focus={{ outline: 'none' }}
                                                >
                                                    {userData?.user_data?.is_active ? 'Active' : 'Inactive'}
                                                </button>
                                                <span
                                                    className="text-[#D6BBFB] text-xl cursor-pointer hover:text-red-600 ml-3.5"
                                                    onClick={handleLogout}
                                                    title="Logout"
                                                >
                                                    <FaPowerOff />
                                                </span>
                                            </div>
                                        </div>

                                    </div>

                                )}
                            </div>

                        </div>
                    </div>

                </div>
                <ToastContainer></ToastContainer>
            </div>
        </>
    );
};

export default DashboardHeader;