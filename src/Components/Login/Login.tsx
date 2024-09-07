import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/authSlice'; // Update the path ../redux/authSlice
import { RootState } from '../../redux/store';
import store from '../../redux/store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login: React.FC = () => {
    const dispatch = useDispatch();
    const authStatus = useSelector((state: RootState) => state.auth.status);
    const authError = useSelector((state: RootState) => state.auth.error);
    const navigate = useNavigate();

    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [isValid, setIsValid] = useState<boolean>(true);
    const [phone_no, setPhone_no] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleLogin(e);
        }
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handlePassChange = (e) => {
        const { value } = e.target;
        setPassword(value);
    };

    const handlePhoneChange = (event) => {
        const { value } = event.target;
        const numberRegex = /^\+?\d+$/;
        setIsValid(numberRegex.test(value));
        setPhone_no(value);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (isValid) {
            // If the input is valid, dispatch the login action
            dispatch(loginUser({ phone_no, password }));
        } else {
            // If the input is invalid, show a toast message
            toast.error('Please enter a valid phone number');
        }
    };

    useEffect(() => {
        if (authStatus === 'succeeded') {
            navigate('/');

        }
    }, [authStatus, authError, navigate]);


    return (
        <>
            <div className="w-screen h-screen font-inter">
                <div className="w-[444px] h-[576px] border border-1 border-solid border-[#eee] bg-customLoginBG rounded-2xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl p-[62px]">
                    <div className="flex  items-center gap-1">
                        <img className='w-20' src="/headerLogo.png" alt="Not_Found" />
                        <h1 className="text-[#4E5D78] text-[28px] font-bold align-top mt-4">Login</h1>
                    </div>
                    <h1 className="mt-[4px] text-[#404040] text-xl font-semibold">Digital Meal Partner</h1>
                    <div className="mt-[52px]">
                        <div>
                            <label className="text-[#344054] font-medium">Phone No.</label>
                            <br />
                            <input
                                className={`mt-0.5 shadow appearance-none border rounded-lg w-full py-[10px] px-[14px] text-gray-700 leading-tight
          focus:outline-none focus:border-[#9E7AF4] focus:ring-4 focus:ring-[#dbc4fc]
          ${(!isValid || (isFocused && !isValid)) ? 'focus:invalid:border-[#f8776d] focus:invalid:ring-[#ffb5b0] invalid:border-[#f8776d] invalid:ring-[#ffb5b0]' : ''}
        `}
                                id="phone_no"
                                placeholder="Phone Number"
                                value={phone_no}
                                required
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                onChange={handlePhoneChange}
                            />
                            {(!isValid || (isFocused && !isValid)) && (
                                <div className="text-[#f8776d] mt-1 text-sm">
                                    This field is required or invalid
                                </div>
                            )}
                        </div>



                        <div className="mt-7">
                            <label className="text-[#344054] font-medium ">Password</label>
                            <br />
                            <input className="mt-0.5 shadow appearance-none border rounded-lg w-full py-[10px] px-[14px] text-gray-700 leading-tight focus:outline-none focus:border-[#9E7AF4] focus:ring-4 focus:ring-[#dbc4fc]" id="username" type="password" placeholder="Enter Password" onChange={handlePassChange} onKeyDown={handleKeyDown} />
                        </div>

                        <button className="mt-[30px] w-full rounded-lg border-2 border-[#6941C6] bg-[#6941C6] font-semibold text-white py-[10px] px-[18px] hover:bg-[#9062fb] hover:border-[#9062fb]" type='submit' onClick={handleLogin}
                            disabled={authStatus === 'loading'}
                        >
                            {authStatus === 'loading' ? 'Loading...' : 'Sign In'}
                        </button>

                        <h1 className="font-medium mt-6">
                            <span className="text-[#B0B7C3]">Don’t have an account?</span>
                            <NavLink to="/signup" className="text-[#377DFF]"> Sign Up</NavLink>
                        </h1>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </>
    );
};

export default Login;