import React, { useEffect, useState } from 'react';
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
import ReactTooltip from 'react-tooltip';


const DashboardHeader: React.FC = () => {
    const navigate = useNavigate();
    const [toastShow, setToastShow] = useState(0)
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

    useEffect(() => {
        if (authStatus === 'succeeded' && !loginToastShown) {
            console.log("Showing---------------------------->");

            toast.success(`Login Successful-1`);
            setLoginToastShown(true);


        }
        if (regStatus === 'succeeded' && !regToastShown) {

            toast.success(`Registration Successful-1`);
            setRegToastShown(true);
        }
    }, []);




    const handleLogout = () => {
        localStorage.removeItem('id');
        localStorage.removeItem('user');
        window.location.reload();
        // navigate('/login');

    }

    const [userData, setUserData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                if (userId) {
                    const response = await axios.get(`https://reqres.in/api/users/${userId}`);
                    setUserData(response.data.data);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, [userId, authStatus]);

    console.log(userData)


    return (
        <>

            <div className='bg-[#6941C6] py-8 font-inter'>
                <div className='max-w-7xl mx-auto'>
                    <div className='flex justify-between'>
                        {/* right Part */}
                        <div className='flex items-center justify-between gap-7'>
                            {/* Logo and Stuck */}
                            <div className='flex gap-3 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="34" viewBox="0 0 40 34" fill="none">
                                    <g clip-path="url(#clip0_302_17319)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M38.9771 19.6145L37.4945 17.5863H38.411C38.6572 17.5859 38.8836 17.4688 39.0015 17.2808C39.1194 17.0927 39.11 16.8638 38.9771 16.6835L30.3986 4.95937C30.2762 4.79036 30.0621 4.68838 29.8325 4.68971H9.25223C9.02263 4.68838 8.80854 4.79036 8.68617 4.95937L0.107676 16.6835C-0.0252722 16.8638 -0.0346328 17.0927 0.0832608 17.2808C0.201155 17.4688 0.427535 17.5859 0.673736 17.5863H1.59021L0.107676 19.6145C-0.0252722 19.7948 -0.0346328 20.0238 0.0832608 20.2118C0.201155 20.3998 0.427535 20.5169 0.673736 20.5173H1.59021L0.107676 22.5456C-0.0252722 22.7258 -0.0346328 22.9548 0.0832608 23.1428C0.201155 23.3308 0.427535 23.448 0.673736 23.4483H1.59021L0.107676 25.4766C-0.0252722 25.6569 -0.0346328 25.8858 0.0832608 26.0739C0.201155 26.2619 0.427535 26.379 0.673736 26.3794H1.59021L0.107676 28.4076C-0.0252722 28.5879 -0.0346328 28.8169 0.0832608 29.0049C0.201155 29.1929 0.427535 29.31 0.673736 29.3104H38.411C38.6572 29.31 38.8836 29.1929 39.0015 29.0049C39.1194 28.8169 39.11 28.5879 38.9771 28.4076L37.4945 26.3794H38.411C38.6572 26.379 38.8836 26.2619 39.0015 26.0739C39.1194 25.8858 39.11 25.6569 38.9771 25.4766L37.4945 23.4483H38.411C38.6572 23.448 38.8836 23.3308 39.0015 23.1428C39.1194 22.9548 39.11 22.7258 38.9771 22.5456L37.4945 20.5173H38.411C38.6572 20.5169 38.8836 20.3998 39.0015 20.2118C39.1194 20.0238 39.11 19.7948 38.9771 19.6145Z" fill="#9E7AF4" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.26113 9.12381C9.01545 9.12355 8.7894 9.007 8.6712 8.81965C8.55299 8.63229 8.56137 8.40382 8.69305 8.2234L9.79283 6.71978C9.91658 6.55066 10.1311 6.44828 10.3616 6.44836H13.4776C13.8498 6.44836 14.1515 6.71082 14.1515 7.03457C14.1515 7.35832 13.8498 7.62078 13.4776 7.62078H10.7315L9.83056 8.85181C9.70684 9.02133 9.49197 9.12397 9.26113 9.12381Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M38.411 20.5173H0.673736C0.427535 20.517 0.201155 20.3999 0.0832608 20.2118C-0.0346328 20.0238 -0.0252722 19.7948 0.107676 19.6146L1.59021 17.5863H37.4945L38.9771 19.6146C39.11 19.7948 39.1194 20.0238 39.0015 20.2118C38.8836 20.3999 38.6572 20.517 38.411 20.5173Z" fill="#CBBBF0" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M38.411 23.4484H0.673736C0.427535 23.448 0.201155 23.3309 0.0832608 23.1429C-0.0346328 22.9548 -0.0252722 22.7259 0.107676 22.5456L1.59021 20.5173H37.4945L38.9771 22.5456C39.11 22.7259 39.1194 22.9548 39.0015 23.1429C38.8836 23.3309 38.6572 23.448 38.411 23.4484Z" fill="#ECE8F5" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M38.411 26.3794H0.673736C0.427535 26.379 0.201155 26.2619 0.0832608 26.0739C-0.0346328 25.8859 -0.0252722 25.6569 0.107676 25.4766L1.59021 23.4484H37.4945L38.9771 25.4766C39.11 25.6569 39.1194 25.8859 39.0015 26.0739C38.8836 26.2619 38.6572 26.379 38.411 26.3794Z" fill="#CBBBF0" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M38.411 29.3104H0.673736C0.427535 29.3101 0.201155 29.1929 0.0832608 29.0049C-0.0346328 28.8169 -0.0252722 28.5879 0.107676 28.4077L1.59021 26.3794H37.4945L38.9771 28.4077C39.11 28.5879 39.1194 28.8169 39.0015 29.0049C38.8836 29.1929 38.6572 29.3101 38.411 29.3104Z" fill="#ECE8F5" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_302_17319">
                                            <rect width="39.0851" height="34" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <h1 className='text-[#fff] text-xl font-bold w-24'>Stack</h1>
                            </div>
                            {/* Nav bar */}
                            <div className='flex list-none gap-7 text-[#F4EBFF] font-medium'>
                                {navBar}
                            </div>
                        </div>
                        {/* right Part */}
                        <div className='flex gap-4'>
                            <div className='flex text-[#D6BBFB] gap-2 text-xl'>
                                <p className='p-[10px]'><CiSearch /></p>
                                <p className='p-[10px]'><FiSettings /></p>
                                <p className='p-[10px]'><LuBell /></p>
                            </div>
                            <div className='flex items-center gap-2'>
                                {isLoading ? (
                                    <div>Loading...</div>
                                ) : (
                                    <img
                                        src={userData?.avatar || 'https://i.ibb.co/rcYfSrY/Avatar.png'}
                                        alt='User_pic'
                                        style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                                )}
                                <span className='text-[#D6BBFB] text-xl cursor-pointer hover:text-red-600 '
                                    onClick={() => {
                                        handleLogout();
                                    }}
                                ><FaPowerOff /></span>
                                {/* <ReactTooltip effect='solid' /> */}
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